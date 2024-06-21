import getAllStudents from "../../repository/students/students";

export default async (req, res) => {
  const students = await getAllStudents();

  return {
    data: students,
    statusCode: 200,
  };
};
