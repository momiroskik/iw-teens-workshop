import { ALLOWED_ROLE } from "../constants/constants";
import ERROR_CODE from "../constants/errorCodes";

const teacherOnly = (req, res, next) => {
  const USER_INFO_DATA = req?.USER_INFO_DATA;
  const IS_ALLOWED_TO_CHANGE = ALLOWED_ROLE?.includes(USER_INFO_DATA?.role_id);

  if (USER_INFO_DATA && !IS_ALLOWED_TO_CHANGE) {
    return res.status(403).json({
      message: ERROR_CODE.FORBIDDEN,
    });
  }

  if (USER_INFO_DATA && IS_ALLOWED_TO_CHANGE) {
    req.USER_INFO_DATA = USER_INFO_DATA;
    next(); 
  }
};

export default teacherOnly;
