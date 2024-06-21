import QUERIES from "../../constants/queries";
import * as db from "../../database/init-db";

const getAllStudents = async () => {
  try {
    const students = await db.runQuery(QUERIES.ALL_STUDENTS);
    return students;
  } catch (error) {
    console.error("An error occured while fetching students: ", error);
  }
};

export default getAllStudents;
