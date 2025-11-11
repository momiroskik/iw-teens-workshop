import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import latinToCyrillicText from "../utils/latin-to-cyrilic";
import Layout from "../components/Layout/Layout";
import logo from "../assets/logo.png";
import "./Home.css";

const Home = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const isTeacher = user?.role_id === 1;
  const isStudent = user?.role_id === 2;

  return (
    <Layout>
      <div className="dashboard-container">
        {/* Welcome Section */}
        <div className="dashboard-header">
          <div className="welcome-section">
            <div className="welcome-content">
              <div className="welcome-text">
                <h1 className="welcome-title">
                  Добредојдовте,{" "}
                  <span className="user-name">
                    {latinToCyrillicText(user?.firstName ?? "")}{" "}
                    {latinToCyrillicText(user?.lastName ?? "")}
                  </span>
                </h1>
                <p className="welcome-subtitle">
                  {isTeacher ? "Наставник" : "Ученик"} • {latinToCyrillicText(user?.school ?? "")}
                </p>
              </div>
              <button className="welcome-logout-btn" onClick={logout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Одјави се</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2 className="section-title">Брзи акции</h2>
          <div className="actions-grid">
            {isTeacher && (
              <Link to="/allstudents" className="action-card teacher-action">
                <div className="action-icon">
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
                </div>
                <h3 className="action-title">Преглед на оцени</h3>
                <p className="action-description">
                  Прегледај и управувај со оцените на учениците
                </p>
                <span className="action-arrow">→</span>
              </Link>
            )}

            {isStudent && (
              <Link to="/evidentenlist" className="action-card student-action">
                <div className="action-icon">
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
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="action-title">Евидентен лист</h3>
                <p className="action-description">
                  Прегледај ги твоите оцени и успех
                </p>
                <span className="action-arrow">→</span>
              </Link>
            )}

            <Link to="/contact" className="action-card contact-action">
              <div className="contact-logo-bg" style={{ backgroundImage: `url(${logo})` }}></div>
              <div className="action-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="action-title">Контакт</h3>
              <p className="action-description">
                Ајде да се поврземе
              </p>
              <span className="action-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="info-section">
          <div className="info-card">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Училиште</h3>
              <p className="info-text">{latinToCyrillicText(user?.school ?? "Непознато")}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Улога</h3>
              <p className="info-text">{isTeacher ? "Наставник" : "Ученик"}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Е-маил</h3>
              <p className="info-text">{user?.email ?? "Непознато"}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
