-- File generated with SQLiteStudio v3.4.4 on Wed Jun 19 16:29:51 2024
-- Text encoding used: System

PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Grade
CREATE TABLE IF NOT EXISTS Grade (
    grade_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_id INTEGER NOT NULL,
    user_id    INTEGER NOT NULL,
    grade      INTEGER NOT NULL CHECK (grade BETWEEN 1 AND 5),
    name       TEXT    NOT NULL,
    surname    TEXT    NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES Subject (subject_id),
    FOREIGN KEY (user_id) REFERENCES User (user_id)
);

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (1, 1, 4, 5, 'Hristijan', 'Ilioski');

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (2, 2, 4, 4, 'Hristijan', 'Ilioski');

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (3, 3, 4, 5, 'Hristijan', 'Ilioski');

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (4, 1, 5, 5, 'Martin', 'Petkoski');

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (5, 2, 5, 3, 'Martin', 'Petkoski');

INSERT INTO Grade (grade_id, subject_id, user_id, grade, name, surname)
VALUES (6, 3, 5, 4, 'Martin', 'Petkoski');


-- Table: Role
CREATE TABLE IF NOT EXISTS Role (
    role_id INTEGER PRIMARY KEY AUTOINCREMENT,
    role    TEXT    CHECK (role IN ('student', 'teacher')) NOT NULL
);

INSERT INTO Role (role_id, role) VALUES (1, 'teacher');
INSERT INTO Role (role_id, role) VALUES (2, 'student');


-- Table: Subject
CREATE TABLE IF NOT EXISTS Subject (
    subject_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_name TEXT    NOT NULL
);

INSERT INTO Subject (subject_id, subject_name) VALUES (1, 'Matematika');
INSERT INTO Subject (subject_id, subject_name) VALUES (2, 'Hemija');
INSERT INTO Subject (subject_id, subject_name) VALUES (3, 'Makedonski jazik');


-- Table: User
CREATE TABLE IF NOT EXISTS User (
    user_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    name     TEXT    NOT NULL,
    surname  TEXT    NOT NULL,
    role_id  INTEGER NOT NULL,
    email    TEXT    NOT NULL,
    password TEXT    NOT NULL,
    school   TEXT    NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role (role_id)
);

INSERT INTO User (user_id, name, surname, role_id, email, password, school)
VALUES (1, 'Marija', 'Risteska Nikovik', 1, 'marija.risteska@gmail.com', 'test', 'Gimnazija Mirce Acev-Prilep');

INSERT INTO User (user_id, name, surname, role_id, email, password, school)
VALUES (2, 'Simona', 'Kolevska Boceska', 1, 'simona.kolevska@gmail.com', 'test1', 'Gimnazija Mirce Acev-Prilep');

INSERT INTO User (user_id, name, surname, role_id, email, password, school)
VALUES (3, 'Cvetanka', 'Eftimoska', 1, 'cvetanka.eftimoska@hotmail.com', 'test2', 'Ekonomsko-Prilep');

INSERT INTO User (user_id, name, surname, role_id, email, password, school)
VALUES (4, 'Hristijan', 'Ilioski', 2, 'hristijan.ilioski@gmail.com', 'test3', 'Gimnazija Mirce Acev-Prilep');

INSERT INTO User (user_id, name, surname, role_id, email, password, school)
VALUES (5, 'Martin', 'Petkoski', 2, 'martin.petkoski@hotmail.com', 'test4', 'Medicinsko-Prilep');


-- Table: User_Subject
CREATE TABLE IF NOT EXISTS User_Subject (
    user_id    INTEGER NOT NULL,
    subject_id INTEGER NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES Subject (subject_id),
    FOREIGN KEY (user_id) REFERENCES User (user_id)
);

INSERT INTO User_Subject (user_id, subject_id) VALUES (1, 1);
INSERT INTO User_Subject (user_id, subject_id) VALUES (2, 2);
INSERT INTO User_Subject (user_id, subject_id) VALUES (3, 3);
INSERT INTO User_Subject (user_id, subject_id) VALUES (4, 1);
INSERT INTO User_Subject (user_id, subject_id) VALUES (4, 2);
INSERT INTO User_Subject (user_id, subject_id) VALUES (4, 3);
INSERT INTO User_Subject (user_id, subject_id) VALUES (5, 1);
INSERT INTO User_Subject (user_id, subject_id) VALUES (5, 2);
INSERT INTO User_Subject (user_id, subject_id) VALUES (5, 3);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
