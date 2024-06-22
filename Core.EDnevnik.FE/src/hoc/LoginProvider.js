import { useCallback, useEffect, useMemo, useState } from "react";
import AuthContext from "../context/auth-context";
import Cookies from "universal-cookie";
import httpAuth from "../utils/core/api";

const cookies = new Cookies();

const AuthProviderInternal = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthenticated = useCallback((user) => {
    setIsAuthenticated(true);
    setError(null);
    setIsLoading(false);
    setUser(user);
  }, []);

  const handleUnauthenticated = useCallback((error = "") => {
    setIsAuthenticated(false);
    setUser(null);
    setError(error);
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (email, password) => {
      try {
        setIsLoading(true);
        await httpAuth
          .post("user/login", { email, password })
          .then(async (response) => {
            cookies.set("token", response.data.access_token);
            await httpAuth.get("user/me").then((result) => {
              handleAuthenticated(result?.data);
            });
          });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    },
    [handleAuthenticated]
  );

  const logout = useCallback(async () => {
    cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      error,
      login,
      logout,
      isLoading,
    }),
    [isAuthenticated, user, error, isLoading, logout, login]
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await httpAuth.get("user/me");
        handleAuthenticated(result?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        handleUnauthenticated();
      }
    };

    if (cookies.get("token")) {
      setIsLoading(true);
      fetchUserData();
    } else {
      handleUnauthenticated();
    }
  }, [cookies, handleAuthenticated, handleUnauthenticated]);

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

const LoginProcider = ({ children }) => {
  return <AuthProviderInternal>{children}</AuthProviderInternal>;
};

export default LoginProcider;
