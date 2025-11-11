import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import Layout from "./Layout/Layout";
import latinToCyrillicText from "../utils/latin-to-cyrilic";
import "./EvidentenList.css";

const EvidentenList = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?._id;
  const [gradesByUser, setGradeByUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getGradesByUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3333/api/v1/student/${userId}`
      );
      setGradeByUser(response.data.data);
    } catch (error) {
      toast.error("Грешка при вчитување на оцени");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getGradesByUser();
    }
  }, [userId]);

  const calculateAverage = () => {
    if (!gradesByUser?.info) return 0;
    const validGrades = gradesByUser.info.filter(
      (g) => g.grade && !isNaN(g.grade)
    );
    if (validGrades.length === 0) return 0;
    const sum = validGrades.reduce((acc, g) => acc + Number(g.grade), 0);
    return (sum / validGrades.length).toFixed(2);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="evidenten-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Вчитување на податоци...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!gradesByUser) {
    return (
      <Layout>
        <div className="evidenten-container">
          <div className="empty-state">
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
            <h3>Нема податоци</h3>
            <p>Моментално нема достапни оцени</p>
          </div>
        </div>
      </Layout>
    );
  }

  const average = calculateAverage();
  const hasGrades = gradesByUser?.info && gradesByUser.info.length > 0;

  return (
    <Layout>
      <div className="evidenten-container">
        <div className="evidenten-header">
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
          <h1 className="evidenten-title">Евидентен лист</h1>
          <p className="evidenten-subtitle">Твои оцени и успех</p>
        </div>

        <div className="student-info-card">
          <div className="student-info-header">
            <div className="student-avatar-large">
              {latinToCyrillicText(gradesByUser?.user_name?.[0] || "")}
              {latinToCyrillicText(gradesByUser?.user_surname?.[0] || "")}
            </div>
            <div className="student-info-content">
              <h2 className="student-full-name">
                {latinToCyrillicText(gradesByUser?.user_name || "")}{" "}
                {latinToCyrillicText(gradesByUser?.user_surname || "")}
              </h2>
            </div>
          </div>
          <div className="student-stats-large">
            <div className="stat-card">
              <div className="stat-icon">
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
              </div>
              <div className="stat-info">
                <span className="stat-label">Предмети</span>
                <span className="stat-value">
                  {gradesByUser?.info?.length || 0}
                </span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="stat-info">
                <span className="stat-label">Просек</span>
                <span className="stat-value">{average}</span>
              </div>
            </div>
          </div>
        </div>

        {!hasGrades ? (
          <div className="empty-grades">
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
            <h3>Нема оцени</h3>
            <p>За ученикот не се внесени оцени до овој момент</p>
          </div>
        ) : (
          <div className="grades-card">
            <h3 className="grades-card-title">Оцени по предмети</h3>
            <div className="grades-table">
              <div className="table-header">
                <div className="table-cell">Предмет</div>
                <div className="table-cell">Оцена</div>
              </div>
              {gradesByUser.info.map((item, idx) => (
                <div className="table-row" key={idx}>
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
                      {latinToCyrillicText(item?.subject_name || "")}
                    </span>
                  </div>
                  <div className="table-cell grade-cell">
                    <span
                      className={`grade-badge grade-${item?.grade || "none"}`}
                    >
                      {item?.grade || "-"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EvidentenList;
