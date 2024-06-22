import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const onHandleLogout = useCallback(() => {
    logout();
    navigate("/");
  }, [navigate, logout]);

  return (
    <nav>
      <img src={require("../../assets/logo.png")} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/">Дома</Link>
        </li>
        {isAuthenticated && (
          <>
            {user?.role_id === 1 && (
              <li>
                <Link to="/allstudents">Преглед на оцени</Link>
              </li>
            )}
            {user?.role_id === 2 && (
              <li>
                <Link to="/evidentenlist">Евидентен лист</Link>
              </li>
            )}
            <li>
              <Link to="/contact">Контакт</Link>
            </li>
          </>
        )}
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">Логирај се</Link>
            </li>
            <li>
              <Link to="/register">Регистрирај се</Link>
            </li>
          </>
        ) : (
          <li>
            <button className="btn btn-danger" onClick={onHandleLogout}>
              Одјави се
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
