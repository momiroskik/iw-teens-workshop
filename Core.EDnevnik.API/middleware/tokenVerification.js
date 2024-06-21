import jwt from "jsonwebtoken";

const tokenVerification = (req, res, next) => {
  const hasToken = req.header("Authorization");
  if (!hasToken) {
    return res.status(401).json({
      message: "UNAUTHORIZED, ACCESS HAS BEEN DENIED!",
    });
  }

  try {
    const verifyToken = jwt.verify(hasToken, process.env.JWT_SECRET);
    req.userData = verifyToken;
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export default tokenVerification;
