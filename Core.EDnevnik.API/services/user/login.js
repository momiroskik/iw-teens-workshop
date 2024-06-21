import ERROR_CODE from "../../constants/errorCodes";
import QUERIES from "../../constants/queries";
import bcrypt from "bcryptjs";
import { findOne } from "../../database/init-db";
import { generateAccessToken } from "../../utils/generateAccessToken";
import validateRequest from "../../utils/validateRequest";
import loginValidationSchema from "./validationSchemas/loginValidationSchema";

export const isPasswordHashed = (password) =>
  /^\$2[aby]\$[0-9]{2}\$/.test(password);

export default async (req, res) => {
  if (!Object.keys(req.body).length) {
    return {
      message: ERROR_CODE.NO_REQ_BODY,
      statusCode: 400,
    };
  }

  const { error } = validateRequest(req.body, loginValidationSchema);

  if (error && error.details) {
    return {
      message: error.details[0].message,
      statusCode: 400,
    };
  }

  const existingUser = await findOne(QUERIES.FIND_USER_BY_EMAIL, [
    req.body.email,
  ]);

  if (!existingUser) {
    return {
      message: ERROR_CODE.WRONG_CREDENTIALS,
      statusCode: 400,
    };
  }

  let validPassword = false;

  const securePassword = isPasswordHashed(existingUser.password);

  if (securePassword) {
    validPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
  } else {
    validPassword = req.body.password === existingUser.password;
  }

  if (!validPassword) {
    return {
      message: ERROR_CODE.WRONG_CREDENTIALS,
      statusCode: 400,
    };
  }

  const { access_token } = generateAccessToken(existingUser);

  res.header("Authorization", access_token);

  return {
    access_token,
  };
};
