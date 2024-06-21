import { ALLOWED_ROLE } from "../../constants/constants";
import ERROR_CODE from "../../constants/errorCodes";
import changeSubjectGrade from "../../repository/students/change-grade";
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

  const USER_INFO_DATA = req?.USER_INFO_DATA;
  const IS_ALLOWED_TO_CHANGE = ALLOWED_ROLE?.includes(USER_INFO_DATA?.role_id);

  // STUDENTS WORK: Find if there is an existing user in DB that we are trying to update

  try {
    if (USER_INFO_DATA && IS_ALLOWED_TO_CHANGE) {
      await changeSubjectGrade(
        req.body.grade,
        req.params.userId,
        req.params.subjectId
      );

      return {
        data: `The grade ${req.body.grade} is set for subject ${req.params.subjectId}`,
        statusCode: 204,
      };
    }

    if (USER_INFO_DATA && !IS_ALLOWED_TO_CHANGE) {
      return {
        data: ERROR_CODE.FORBIDDEN,
        statusCode: 403,
      };
    }

    // STUDENTS WORK: SHOW proper response if there is no student in db
  } catch (error) {
    return { message: error };
  }
};
