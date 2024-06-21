import * as STUDENT_QUERIES from "../../database/queries/students";
import * as db from "../../database/init-db";

const getAllStudents = async () => {
  try {
    const students = await db.runQuery(STUDENT_QUERIES.LIST_ALL_STUDENTS);
    return students;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getAllStudents;
