import * as USER_QUERIES from "../../database/queries/user";
import * as db from "../../database/init-db";

const changeUser = async (new_name, new_surname, new_roleId, new_email, new_password, new_school, old_email) => {
  const params = [new_name, new_surname, new_roleId, new_email, new_password, new_school, old_email];

  try {
    await db.runQuery(USER_QUERIES.CHANGE_USER_DATA, params);
    console.log(`User changed successfully - Email ${email}`);
  } catch (error) {
    console.error("An error occured while changing user: ", error);
  }
};

export default changeUser;
