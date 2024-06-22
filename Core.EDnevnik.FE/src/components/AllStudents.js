import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import latinToCyrillicText from "../utils/latin-to-cyrilic";
import httpAuth from "../utils/core/api";

const accordionStyle = {
  padding: "15px 50px",
  borderRadius: "25px",
  textTransform: "uppercase",
  fontWeight: 500,
  background: "#dee2e6",
  marginBottom: "20px",
};

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalStudent, setModalStudent] = useState(null);
  const [modalSubjectIndex, setModalSubjectIndex] = useState(null);
  const [editedGrade, setEditedGrade] = useState("");

  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3333/api/v1/student/report"
      );
      setStudents(response.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeGradeBySubject = async (studentId, subjectId, grade) => {
    try {
      const response = await httpAuth.post(
        `http://localhost:3333/api/v1/student/${studentId}/${subjectId}`,
        { grade }
      );

      setStudents(response.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const openEditModal = (studentIndex, subjectIndex) => {
    setModalStudent(students[studentIndex]);
    setModalSubjectIndex(subjectIndex);
    setEditedGrade(students[studentIndex].info[subjectIndex].grade);
  };

  const handleCloseModal = () => {
    setModalStudent(null);
    setModalSubjectIndex(null);
    setEditedGrade("");
  };

  const handleModalSave = async () => {
    const updatedGrade = +editedGrade;
    const subjectIdToChangeGrade = modalSubjectIndex + 1;
    const studentId = modalStudent?.user_id;

    await changeGradeBySubject(studentId, subjectIdToChangeGrade, updatedGrade);

    handleCloseModal();
  };

  return (
    <Layout>
      <h2 className="text-center mb-4">Е-дневник на ученици и оцени</h2>
      {students.map((student, studentIndex) => (
        <div className="accordion-item" key={studentIndex}>
          <h2
            className="accordion-header"
            onClick={() => toggleAccordion(studentIndex)}
          >
            <button
              className="accordion-button"
              type="button"
              style={accordionStyle}
            >
              {latinToCyrillicText(student.student_name)}{" "}
              {latinToCyrillicText(student.student_surname)}
            </button>
          </h2>
          {expandedIndex === studentIndex && (
            <div className="accordion-collapse">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Предмет</th>
                    <th scope="col">Оцена</th>
                    <th scope="col">Акции</th>
                  </tr>
                </thead>
                <tbody>
                  {student.info.map((item, subjectIndex) => (
                    <tr key={`${studentIndex}-${subjectIndex}`}>
                      <td>{latinToCyrillicText(item.subject_name)}</td>
                      <td>
                        <input
                          type="text"
                          value={item.grade}
                          readOnly
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            openEditModal(studentIndex, subjectIndex)
                          }
                        >
                          Ажурирај
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {modalStudent && (
        <div className="custom-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Ажурирај Оцена</h2>
            <p>
              Име: {latinToCyrillicText(modalStudent.student_name)}{" "}
              {latinToCyrillicText(modalStudent.student_surname)}
            </p>
            <p>
              Предмет:{" "}
              {modalStudent.info[modalSubjectIndex] &&
                latinToCyrillicText(
                  modalStudent.info[modalSubjectIndex].subject_name
                )}
            </p>
            <p>
              Оцена:{" "}
              <input
                type="text"
                value={editedGrade}
                onChange={(e) => setEditedGrade(e.target.value)}
                className="form-control"
              />
            </p>
            <button className="btn btn-primary" onClick={handleModalSave}>
              Зачувај
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AllStudents;
