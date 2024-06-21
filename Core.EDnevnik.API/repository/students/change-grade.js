import QUERIES from "../../constants/queries";
import * as db from "../../database/init-db";

const changeSubjectGrade = async (grade, user_id, subject_id) => {
  const params = [grade, user_id, subject_id];
  try {
    await db.runQuery(QUERIES.CHANGE_GRADE, params);
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default changeSubjectGrade;
