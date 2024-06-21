const QUERIES = Object.freeze({
  CREATE_USER: `
        INSERT INTO User (name, surname, role_id, email, password, school)
        VALUES (?, ?, ?, ?, ?, ?);
    `,
  FIND_USER_BY_EMAIL: `
    SELECT * FROM User WHERE email = ?
  `,
});

export default QUERIES;
