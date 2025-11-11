import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import latinToCyrillicText from "../utils/latin-to-cyrilic";
import httpAuth from "../utils/core/api";
import "./AllStudents.css";

const AllStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalStudent, setModalStudent] = useState(null);
  const [modalSubjectIndex, setModalSubjectIndex] = useState(null);
  const [editedGrade, setEditedGrade] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllStudents = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:3333/api/v1/student/report"
      );
      setStudents(response.data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changeGradeBySubject = async (studentId, subjectId, grade) => {
    try {
      const response = await httpAuth.post(
        `http://localhost:3333/api/v1/student/${studentId}/${subjectId}`,
        { grade }
      );

      setStudents(response.data.data);
      toast.success("Оцената е успешно ажурирана!");
    } catch (error) {
      toast.error(error.message || "Грешка при ажурирање на оценка");
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
    if (!editedGrade || editedGrade.trim() === "") {
      toast.error("Внесете валидна оценка");
      return;
    }

    const updatedGrade = +editedGrade;
    if (isNaN(updatedGrade) || updatedGrade < 1 || updatedGrade > 5) {
      toast.error("Оцената мора да биде помеѓу 1 и 5");
      return;
    }

    const subjectIdToChangeGrade = modalSubjectIndex + 1;
    const studentId = modalStudent?.user_id;

    await changeGradeBySubject(studentId, subjectIdToChangeGrade, updatedGrade);

    handleCloseModal();
  };

  const calculateAverage = (grades) => {
    const validGrades = grades.filter((g) => g.grade && !isNaN(g.grade));
    if (validGrades.length === 0) return 0;
    const sum = validGrades.reduce((acc, g) => acc + Number(g.grade), 0);
    return (sum / validGrades.length).toFixed(2);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="students-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Вчитување на податоци...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="students-container">
        <div className="students-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Назад</span>
          </button>
          <h1 className="students-title">Преглед на оцени</h1>
          <p className="students-subtitle">
            Вкупно ученици: {students.length}
          </p>
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3>Нема ученици</h3>
            <p>Моментално нема регистрирани ученици</p>
          </div>
        ) : (
          <div className="students-list">
            {students.map((student, studentIndex) => {
              const average = calculateAverage(student.info);
              const isExpanded = expandedIndex === studentIndex;

              return (
                <div className="student-card" key={studentIndex}>
                  <div
                    className="student-card-header"
                    onClick={() => toggleAccordion(studentIndex)}
                  >
                    <div className="student-info">
                      <div className="student-avatar">
                        {latinToCyrillicText(student.student_name?.[0] || "")}
                        {latinToCyrillicText(student.student_surname?.[0] || "")}
                      </div>
                      <div className="student-details">
                        <h3 className="student-name">
                          {latinToCyrillicText(student.student_name || "")}{" "}
                          {latinToCyrillicText(student.student_surname || "")}
                        </h3>
                        <div className="student-stats">
                          <span className="stat-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            {student.info?.length || 0} предмети
                          </span>
                          <span className="stat-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                            Просек: {average}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="expand-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={isExpanded ? "expanded" : ""}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="student-grades">
                      <div className="grades-table">
                        <div className="table-header">
                          <div className="table-cell">Предмет</div>
                          <div className="table-cell">Оцена</div>
                          <div className="table-cell">Акција</div>
                        </div>
                        {student.info?.map((item, subjectIndex) => (
                          <div className="table-row" key={subjectIndex}>
                            <div className="table-cell subject-cell">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                              </svg>
                              <span>
                                {latinToCyrillicText(item.subject_name || "")}
                              </span>
                            </div>
                            <div className="table-cell grade-cell">
                              <span
                                className={`grade-badge grade-${item.grade || "none"}`}
                              >
                                {item.grade || "-"}
                              </span>
                            </div>
                            <div className="table-cell action-cell">
                              <button
                                className="edit-button"
                                onClick={() =>
                                  openEditModal(studentIndex, subjectIndex)
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                                <span>Ажурирај</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Edit Grade Modal */}
        {modalStudent && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleCloseModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="modal-header">
                <h2>Ажурирај оценка</h2>
              </div>
              <div className="modal-body">
                <div className="modal-info-item">
                  <label>Ученик:</label>
                  <p>
                    {latinToCyrillicText(modalStudent.student_name || "")}{" "}
                    {latinToCyrillicText(modalStudent.student_surname || "")}
                  </p>
                </div>
                <div className="modal-info-item">
                  <label>Предмет:</label>
                  <p>
                    {modalStudent.info[modalSubjectIndex] &&
                      latinToCyrillicText(
                        modalStudent.info[modalSubjectIndex].subject_name
                      )}
                  </p>
                </div>
                <div className="modal-form-group">
                  <label htmlFor="grade-input">Нова оценка:</label>
                  <input
                    id="grade-input"
                    type="number"
                    min="1"
                    max="5"
                    value={editedGrade}
                    onChange={(e) => setEditedGrade(e.target.value)}
                    className="grade-input"
                    placeholder="Внесете оценка (1-5)"
                    autoFocus
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-button cancel" onClick={handleCloseModal}>
                  Откажи
                </button>
                <button className="modal-button save" onClick={handleModalSave}>
                  Зачувај
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllStudents;
