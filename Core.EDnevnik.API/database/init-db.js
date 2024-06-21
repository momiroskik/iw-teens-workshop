import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";

const dbName = process.env.DB_NAME || "e-dnevnik.db";
const dbFilePath = path.resolve(__dirname, dbName);

const schemaPath = path.resolve(__dirname, "schema", "init-schema.sql");
const schema = fs.readFileSync(schemaPath, "utf-8");

let dbInstance = null;

const initializeDB = () => {
  dbInstance = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.error("Error opening database:", err.message);
    } else {
      console.log(`Connected to SQLite database at ${dbName}.`);

      const dbExists = fs.existsSync(dbFilePath);

      if (!dbExists) {
        dbInstance.exec(schema, function (err) {
          if (err) {
            console.error("Error executing schema:", err.message);
          } else {
            console.log("Database initialized successfully.");
          }
        });
      }
    }
  });

  return dbInstance;
};

const findOne = (sql, params) => {
  return new Promise((resolve, reject) => {
    dbInstance.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const runQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    dbInstance.all(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export { initializeDB as initialize, findOne, runQuery, dbInstance };
