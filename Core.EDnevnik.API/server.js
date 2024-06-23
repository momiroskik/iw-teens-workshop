import express from "express";
import cors from "cors";
import * as db from "./database/init-db";
import users from "./controllers/users";
import students from "./controllers/students";
require("dotenv/config");

const server = express();
const PORT = process.env.PORT || 3333;

//INIT DB
db.initialize();

// MIDDLEWARES
server.use(cors());
server.use(express.urlencoded({ extended: false })).use(express.json());

// ROUTES
server.use(users);
server.use(students);

server.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
