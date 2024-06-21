import * as STUDENT_QUERIES from "../../database/queries/students";
import * as db from "../../database/init-db";

const getStudentsReport = async () => {
  try {
    const studentSummary = await db.runQuery(STUDENT_QUERIES.STUDENTS_SUMMARY_REPORT);
    return studentSummary;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getStudentsReport;
