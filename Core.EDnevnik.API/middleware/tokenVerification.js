import jwt from "jsonwebtoken";
import ERROR_CODE from "../constants/errorCodes";
import { generateRandomSecret } from "../utils/randomSecret";

const tokenVerification = (req, res, next) => {
  const hasToken = req.header("Authorization");
  if (!hasToken) {
    return res.status(401).json({
      message: ERROR_CODE.NOT_AUTH,
    });
  }

  const TOKEN_SECRET = process.env.JWT_SECRET || generateRandomSecret();

  try {
    const verifyToken = jwt.verify(hasToken, TOKEN_SECRET);
    req.USER_INFO_DATA = verifyToken; // This can be used if we want to prevent some actions for certain role
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export default tokenVerification;
