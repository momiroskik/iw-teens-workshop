const QUERIES = Object.freeze({
  CREATE_USER: `
        INSERT INTO User (name, surname, role_id, email, password, school)
        VALUES (?, ?, ?, ?, ?, ?);
    `,
  FIND_USER_BY_EMAIL: `
    SELECT * FROM User WHERE email = ?
  `,
  ALL_STUDENTS: `SELECT User.name, User.surname, User.school
FROM User
WHERE User.role_id == 2`,
  SUBJECT_GRADE_BY_STUDENT: `SELECT
    U.name AS user_name,
    U.surname AS user_surname,
    S.subject_name,
    G.grade
FROM
    Grade G
JOIN
    Subject S ON G.subject_id = S.subject_id
JOIN
    User U ON G.user_id = U.user_id
JOIN
    User_Subject US ON G.user_id = US.user_id AND G.subject_id = US.subject_id
WHERE
    U.user_id = ?;
`,
  ALL_STUDENTS_SUBJECT_GRADE: `SELECT
    U.user_id, U.name AS student_name,
    U.surname AS student_surname,
    S.subject_name,
    G.grade
FROM
    Grade G
JOIN
    User U ON G.user_id = U.user_id
JOIN
    Subject S ON G.subject_id = S.subject_id
WHERE
    U.role_id = 2;
`,
  CHANGE_GRADE: `UPDATE Grade
SET grade = ?
WHERE user_id = ?
  AND subject_id = ?;`,
});

export default QUERIES;
