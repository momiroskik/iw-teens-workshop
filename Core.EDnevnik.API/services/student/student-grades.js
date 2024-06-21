import getGradesOfSubjectByStudent from "../../repository/students/subject-grade";

export default async (req, res) => {
  const result = await getGradesOfSubjectByStudent(req.params.userId);

  const { user_name, user_surname } = result?.[0];

  const subjectsAndGrades =
    result &&
    result?.map((entry) => ({
      subject_name: entry?.subject_name,
      grade: entry?.grade,
    }));

  if (user_name) {
    return { data: { user_name, user_surname, info: subjectsAndGrades } };
  }

  return {
    data: [],
    statusCode: 200,
  };
};
