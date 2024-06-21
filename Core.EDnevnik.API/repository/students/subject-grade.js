import * as STUDENT_QUERIES from "../../database/queries/students";
import * as db from "../../database/init-db";

const getGradesOfSubjectByStudent = async (user_id) => {
  try {
    const grades = await db.runQuery(
      STUDENT_QUERIES.STUDENT_GRADES_BY_SUBJECT,
      [user_id]
    );
    return grades;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getGradesOfSubjectByStudent;
