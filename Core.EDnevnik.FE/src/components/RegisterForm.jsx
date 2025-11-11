import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [selectedRole, setSelectedRole] = useState('Наставник');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const role_id = selectedRole === "Наставник" ? 1 : 2;
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'http://localhost:3333/api/v1/user/register',
        { name, surname, email, password, school, role_id }
      );

      if (response.status === 201) {
        toast.success(response.data.message, {
          onClose: () => navigate('/login')
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Грешка при регистрација';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="register-brand">
            <h1 className="brand-title">E-Grade</h1>
            <p className="brand-subtitle">Електронски дневник</p>
          </div>
          <div className="brand-description">
            <p>Придружи се на нашата платформа и започни да користиш модерен систем за управување со оцени</p>
            <div className="brand-info">
              <p className="brand-role">Регистрирај се како {selectedRole.toLowerCase()}</p>
              <p className="brand-login-text">
                Веќе имате сметка?{' '}
                <Link to="/login" className="brand-login-link">
                  Најавете се
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="register-right">
          <div className="register-form-container">
            <div className="register-header">
              <h2 className="register-title">Креирај нова сметка</h2>
            </div>

        <div className="role-selector">
          <div className="role-option">
            <input
              type="radio"
              id="role-teacher"
              name="role"
              value="Наставник"
              checked={selectedRole === 'Наставник'}
              onChange={handleRoleChange}
              className="role-radio"
            />
            <label htmlFor="role-teacher" className="role-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="role-icon"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Наставник</span>
            </label>
          </div>
          <div className="role-option">
            <input
              type="radio"
              id="role-student"
              name="role"
              value="Ученик"
              checked={selectedRole === 'Ученик'}
              onChange={handleRoleChange}
              className="role-radio"
            />
            <label htmlFor="role-student" className="role-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="role-icon"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
                <path d="M12 14v7" />
                <path d="M12 14l-6.16-3.422a12.083 12.083 0 0 0-.665 6.479A11.952 11.952 0 0 1 12 20.055a11.952 11.952 0 0 1 6.824-2.998 12.078 12.078 0 0 0-.665-6.479L12 14z" />
              </svg>
              <span>Ученик</span>
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Име
              </label>
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  id="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Внесете го вашето име"
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="surname" className="form-label">
                Презиме
              </label>
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  required
                  onChange={(e) => setSurname(e.target.value)}
                  className="form-input"
                  placeholder="Внесете го вашето презиме"
                  autoComplete="family-name"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Е-маил адреса
            </label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="example@email.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="school" className="form-label">
              Име на училиште
            </label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <input
                type="text"
                id="school"
                value={school}
                required
                onChange={(e) => setSchool(e.target.value)}
                className="form-input"
                placeholder="Внесете го името на училиштето"
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Лозинка
            </label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="form-input password-input"
                placeholder="Внесете ја вашата лозинка"
                autoComplete="new-password"
                style={{ paddingRight: "50px" }}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  togglePasswordVisibility();
                }}
                onMouseDown={(e) => e.preventDefault()}
                aria-label={showPassword ? "Сокриј лозинка" : "Прикажи лозинка"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Регистрирање...</span>
              </>
            ) : (
              <>
                <span>Креирај корисник</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="button-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterForm;
