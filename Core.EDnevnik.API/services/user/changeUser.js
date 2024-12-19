import validateRequest from "../../utils/validateRequest";
import changeUserValidationSchema from "./validationSchemas/changeUserValidationSchema";
import ERROR_CODE from "../../constants/errorCodes";
import * as USER_QUERIES from "../../database/queries/user";
import * as db from "../../database/init-db";
import changeUser from "../../repository/user/change-user";
import bcrypt from "bcryptjs";

/*
{
    old_email
    old_password
    new_email
    name
    surname
    new_password
    school
}
*/

export const isPasswordHashed = (password) =>
    /^\$2[aby]\$[0-9]{2}\$/.test(password);

export default async (req, res) => {

    if (!Object.keys(req.body).length) {
        return {
          message: ERROR_CODE.NO_REQ_BODY,
          statusCode: 400,
        };
    }

    const { error } = validateRequest(req.body, changeUserValidationSchema);

    if (error && error.details) {
        return {
            message: error.details[0].message,
            statusCode: 400,
        };
    }

    const existingUser = await db.findOne(USER_QUERIES.FIND_USER_BY_EMAIL, [
        req.body.old_email,
    ]);

    if (!existingUser) {
        return {
            message: ERROR_CODE.WRONG_CREDENTIALS,
            statusCode: 400,
        };
    }

    const diffUser = await db.findOne(USER_QUERIES.FIND_USER_BY_EMAIL, [
        req.body.new_email,
    ]);

    if (diffUser) {
        return {
            message: ERROR_CODE.FORBIDDEN,
            statusCode: 400,
        };
    }

    let validPassword = false;

    const securePassword = isPasswordHashed(existingUser.password);
  
    if (securePassword) {
      validPassword = await bcrypt.compare(
        req.body.old_password,
        existingUser.password
      );
    } else {
      validPassword = req.body.old_password === existingUser.password;
    }
  
    if (!validPassword) {
      return {
        message: ERROR_CODE.WRONG_CREDENTIALS,
        statusCode: 400,
      };
    }

    const salt = await bcrypt.genSalt(16);
    const encryptedPass = await bcrypt.hash(req.body.new_password, salt);

    const User = {
        name: req.body.name,
        old_email: req.body.old_email,
        surname: req.body.surname,
        school: req.body.school,
        password: encryptedPass,
        role_id: req.body.role_id,
        new_email: req.body.new_email
      };
    
      try {
        await changeUser(
          User.name,
          User.surname,
          User.role_id,
          User.new_email,
          User.password,
          User.school,
          User.old_email
        );
    
        return {
          message: `User with ${User.old_email} has been changed to ${User.new_email}`,
          statusCode: 200,
        };
      } catch (error) {
        return { message: error };
      }
}