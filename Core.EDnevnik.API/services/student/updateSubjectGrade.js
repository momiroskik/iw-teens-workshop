import changeSubjectGrade from "../../repository/students/change-grade";
import getStudentsReport from "../../repository/students/student-summary";
import allStudentsReportMapper from "../../utils/all-students-report-mapper";
import validateRequest from "../../utils/validateRequest";
import updateGradeValidationSchema from "./validationSchemas/updateGradeSchema";

export default async (req, res) => {
  const { error } = validateRequest(req.body, updateGradeValidationSchema);

  if (error && error.details) {
    return {
      message: error.details[0].message,
      statusCode: 400,
    };
  }

  // STUDENTS WORK: Find if there is an existing user in DB that we are trying to update
  // STUDENTS WORK: SHOW proper response if there is no student in db

  try {
    await changeSubjectGrade(
      req.body.grade,
      req.params.userId,
      req.params.subjectId
    );

    const result = await getStudentsReport();
    const data = allStudentsReportMapper(result);

    return {
      data: data,
      statusCode: 200,
    };
  } catch (error) {
    return { message: error };
  }
};
