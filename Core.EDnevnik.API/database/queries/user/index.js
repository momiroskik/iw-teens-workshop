const CREATE_USER = `
INSERT INTO User (name, surname, role_id, email, password, school)
VALUES (?, ?, ?, ?, ?, ?);
`;

const FIND_USER_BY_EMAIL = `SELECT * FROM User WHERE email = ?`;

const CHANGE_TEACHER_ROLE = `UPDATE User
SET role_id = (
    SELECT role_id FROM Role WHERE role = 'teacher'
)
WHERE user_id = ?;
`;

export { CREATE_USER, FIND_USER_BY_EMAIL, CHANGE_TEACHER_ROLE };
