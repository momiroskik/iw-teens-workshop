import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import logo from "../assets/logo.png";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-header">
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
          <h1 className="contact-title">Контакт</h1>
        </div>

        <div className="contact-content">
          {/* Left Side - Offices/Locations */}
          <div className="contact-left">
            <div className="offices-card">
              <h2 className="offices-title">Наши канцеларии</h2>
              <div className="offices-list">
                {/* Macedonia Offices */}
                <div className="office-group">
                  <h3 className="office-group-title">Македонија (MK)</h3>
                  <div className="office-group-list">
                    <div className="office-item hq">
                      <div className="office-image">
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
                      <div className="office-info">
                        <h4 className="office-name">
                          Битола
                          <span className="hq-badge">HQ</span>
                        </h4>
                        <p className="office-location">Bitola, MK</p>
                      </div>
                    </div>
                    <div className="office-item">
                      <div className="office-image">
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
                      <div className="office-info">
                        <h4 className="office-name">Прилеп</h4>
                        <p className="office-location">Prilep, MK</p>
                      </div>
                    </div>
                    <div className="office-item">
                      <div className="office-image">
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
                      <div className="office-info">
                        <h4 className="office-name">Скопје</h4>
                        <p className="office-location">Skopje, MK</p>
                      </div>
                    </div>
                    <div className="office-item">
                      <div className="office-image">
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
                      <div className="office-info">
                        <h4 className="office-name">Охрид</h4>
                        <p className="office-location">Ohrid, MK</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Netherlands Offices */}
                <div className="office-group">
                  <h3 className="office-group-title">Холандија (NL)</h3>
                  <div className="office-group-list">
                    <div className="office-item">
                      <div className="office-image netherlands">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="office-info">
                        <h4 className="office-name">Холандија</h4>
                        <p className="office-location">Netherlands</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Serbia Offices */}
                <div className="office-group">
                  <h3 className="office-group-title">Србија (SR)</h3>
                  <div className="office-group-list">
                    <div className="office-item">
                      <div className="office-image serbia">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="office-info">
                        <h4 className="office-name">Србија</h4>
                        <p className="office-location">Serbia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* North America Offices */}
                <div className="office-group">
                  <h3 className="office-group-title">Северна Америка</h3>
                  <div className="office-group-list">
                    <div className="office-item">
                      <div className="office-image north-america">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div className="office-info">
                        <h4 className="office-name">Сан Диего</h4>
                        <p className="office-location">San Diego, USA</p>
                      </div>
                    </div>
                    <div className="office-item">
                      <div className="office-image north-america">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div className="office-info">
                        <h4 className="office-name">Тексас</h4>
                        <p className="office-location">Texas, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - General Info */}
          <div className="contact-right">
            <div className="info-card">
              <div className="info-logo-wrapper">
                <img src={logo} alt="IWConnect Logo" className="info-logo" />
              </div>
              <div className="info-content">
                <h2 className="company-name">IWConnect</h2>
                <p className="company-description">
                  Компанија со канцеларии во градот Прилеп. Специјализирани сме за 
                  развој на софтверски решенија и дигитални услуги.
                </p>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="detail-icon"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>info@iwconnect.com</span>
                  </div>
                  <div className="contact-detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="detail-icon"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+389 XX XXX XXX</span>
                  </div>
                </div>
                <a
                  href="https://www.iwconnect.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  <span>Посети го официјалниот сајт</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
