import QUERIES from "../../constants/queries";
import * as db from "../../database/init-db";

const getGradesOfSubjectByStudent = async (user_id) => {
  try {
    const grades = await db.runQuery(QUERIES.SUBJECT_GRADE_BY_STUDENT, [user_id]);
    return grades;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getGradesOfSubjectByStudent;