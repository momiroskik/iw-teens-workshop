import jwt from "jsonwebtoken";
import { generateRandomSecret } from "./randomSecret";

export const generateAccessToken = (user) => {
  const TOKEN_SECRET = process.env.JWT_SECRET || generateRandomSecret();
  const access_token = jwt.sign(
    {
      _id: user?.user_id,
      school: user?.school,
      email: user?.email,
      role_id: user?.role_id,
    },
    TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  return { access_token };
};
