import { createContext } from "react";

const defaultValue = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
  login: async (email, password) => {},
  logout: () => {},
  getAccessToken: async () => {},
};

const AuthContext = createContext(defaultValue);

export default AuthContext;
