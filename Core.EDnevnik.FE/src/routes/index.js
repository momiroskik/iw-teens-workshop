import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoutes";
import AuthGate from "../components/ProtectedRoutes/AuthGate";

const Login = React.lazy(() => import("../components/Login"));
const Home = React.lazy(() => import("../components/Home"));
const About = React.lazy(() => import("../components/About"));
const Contact = React.lazy(() => import("../components/Contact"));
const AllStudents = React.lazy(() => import("../components/AllStudents"));
const EvidentenList = React.lazy(() => import("../components/EvidentenList"));
const RegisterForm = React.lazy(() => import("../components/RegisterForm"));
const Error404 = React.lazy(() => import("../components/404Page/404Page"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthGate to="/dashboard" />,
    children: [
      {
        element: <Login />,
        index: true,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/about",
    element: <ProtectedRoute />,
    children: [
      {
        element: <About />,
        index: true,
      },
    ],
  },
  {
    path: "/evidentenlist",
    element: <ProtectedRoute />,
    children: [
      {
        element: <EvidentenList />,
        index: true,
      },
    ],
  },
  {
    path: "/allstudents",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AllStudents />,
        index: true,
      },
    ],
  },
  {
    path: "/contact",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Contact />,
        index: true,
      },
    ],
  },
  {
    path: "/register",
    element: <ProtectedRoute />,
    children: [
      {
        element: <RegisterForm />,
        index: true,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
