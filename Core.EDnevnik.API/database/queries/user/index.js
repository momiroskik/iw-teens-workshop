const CREATE_USER = `
INSERT INTO User (name, surname, role_id, email, password, school)
VALUES (?, ?, ?, ?, ?, ?);
`;

const FIND_USER_BY_EMAIL = `SELECT * FROM User WHERE email = ?`;

export { CREATE_USER, FIND_USER_BY_EMAIL };
