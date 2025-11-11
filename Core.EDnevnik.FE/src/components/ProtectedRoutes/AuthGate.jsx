import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const AuthGate = ({ to }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={to} />;
  }

  return <Outlet />;
};

export default AuthGate;
