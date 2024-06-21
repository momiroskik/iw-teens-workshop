import ERROR_CODE from "../../constants/errorCodes";
import QUERIES from "../../constants/queries";
import * as db from "../../database/init-db";
import createUser from "../../repository/user/register-user";
import bcrypt from "bcryptjs";

export default async (req, res) => {
  let role = process.env.DEFAULT_ROLE || 2;

  if (!Object.keys(req.body).length) {
    return {
      message: ERROR_CODE.NO_REQ_BODY,
      statusCode: 400,
    };
  }

  const existingUser = await db.findOne(QUERIES.FIND_USER_BY_EMAIL, [
    req.body.email,
  ]);

  if (existingUser) {
    return {
      message: ERROR_CODE.USER_EXIST,
      statusCode: 400,
    };
  }

  const salt = await bcrypt.genSalt(16);
  const encryptedPass = await bcrypt.hash(req.body.password, salt);

  // Create user object that will be stored in db
  const User = {
    name: req.body.name,
    email: req.body.email,
    surname: req.body.surname,
    school: req.body.school,
    password: encryptedPass,
    role_id: role,
  };

  try {
    await createUser(
      User.name,
      User.surname,
      User.role_id,
      User.email,
      User.password,
      User.school
    );

    return {
      message: `User with ${User.email} has been created`,
      statusCode: 201,
    };
  } catch (error) {
    return { message: error };
  }
};
