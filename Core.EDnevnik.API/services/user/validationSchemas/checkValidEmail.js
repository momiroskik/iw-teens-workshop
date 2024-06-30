import * as USER_QUERIES from "../../../database/queries/user";
import * as db from "../../../database/init-db";
import ERROR_CODE from "../../../constants/errorCodes.js"

export default async (req, res) => {
    const existingUser = await db.findOne(USER_QUERIES.FIND_USER_BY_EMAIL, [
        req.body.email,
      ]);
    
      if (existingUser) {
        return {
          message: ERROR_CODE.USER_EXIST,
          statusCode: 400,
        };
      } else {
        return {
            message: "Email does not exist.",
            statusCode: 200,
        }
      }
}