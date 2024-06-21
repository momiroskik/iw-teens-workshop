const LIST_ALL_STUDENTS = `SELECT User.name, User.surname, User.school
FROM User
WHERE User.role_id == 2`;

const STUDENT_GRADES_BY_SUBJECT = `SELECT
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
`;
const STUDENTS_SUMMARY_REPORT = `SELECT
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
`;

const CHANGE_STUDENT_SUBJECT_GRADE = `UPDATE Grade
SET grade = ?
WHERE user_id = ?
  AND subject_id = ?;`;

export {
  LIST_ALL_STUDENTS,
  STUDENT_GRADES_BY_SUBJECT,
  STUDENTS_SUMMARY_REPORT,
  CHANGE_STUDENT_SUBJECT_GRADE,
};
