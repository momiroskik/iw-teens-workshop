import React, { useCallback, useState } from "react";
import useAuth from "../hooks/use-auth";
import LargeIndicator from "../components/LoadingOverlay";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    login(email, password);
    setEmail("");
    setPassword("");
  };

  if (isLoading) {
    return <LargeIndicator />;
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row no-gutters shadow-lg">
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://img.freepik.com/free-photo/cheerful-schoolchildren-with-blackboard-background_1098-3943.jpg"
            className="img-fluid"
            style={{ minHeight: "100%" }}
            alt="Login Image"
          />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h3 className="pb-3">Е-Дневник најава</h3>
          <div className="form-style">
            <form onSubmit={handleSubmit}>
              <div className="form-group pb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Е-маил адреса"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Лозинка"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="pb-2">
                <button
                  type="submit"
                  className="btn btn-dark w-100 font-weight-bold mt-2"
                >
                  Најави се
                </button>
              </div>
            </form>
            <div className="pt-4 text-center">
              Немате корисничка сметка?{" "}
              <Link to="/register" title="Регистрирај се">
                Регистрирај се
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
