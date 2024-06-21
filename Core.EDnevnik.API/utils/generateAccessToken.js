import jwt from "jsonwebtoken";
import { generateRandomSecret } from "./randomSecret";

export const generateAccessToken = (user) => {
  const access_token = jwt.sign(
    {
      _id: user?.user_id,
      school: user?.school,
      email: user?.email,
      role_id: user?.role_id,
    },
    process.env.JWT_SECRET || generateRandomSecret(),
    { expiresIn: "1h" }
  );

  return { access_token };
};
