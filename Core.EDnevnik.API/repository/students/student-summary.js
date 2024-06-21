import QUERIES from "../../constants/queries";
import * as db from "../../database/init-db";

const getStudentsReport = async () => {
  try {
    const studentSummary = await db.runQuery(QUERIES.ALL_STUDENTS_SUBJECT_GRADE);
    return studentSummary;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getStudentsReport;
