import * as USER_QUERIES from "../../database/queries/user";
import * as db from "../../database/init-db";

const studentAsTeacher = async (user_id) => {
  try {
    await db.runQuery(USER_QUERIES.CHANGE_TEACHER_ROLE, [user_id]);
    console.log(`Role is changed for user with id: ${user_id}`);
  } catch (error) {
    console.error("An error occured while change user rol: ", error);
  }
};

export default studentAsTeacher;
