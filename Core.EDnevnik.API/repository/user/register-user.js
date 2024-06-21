import * as USER_QUERIES from "../../database/queries/user";
import * as db from "../../database/init-db";

const createUser = async (name, surname, roleId, email, password, school) => {
  const params = [name, surname, roleId, email, password, school];

  try {
    await db.runQuery(USER_QUERIES.CREATE_USER, params);
    console.log(`User added - Email ${email}`);
  } catch (error) {
    console.error("An error occured while creating user: ", error);
  }
};

export default createUser;
