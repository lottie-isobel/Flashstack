import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [userid, setUserId] = useLocalStorage("userid", null);
  const [firstName, setFirstName] = useLocalStorage("firstName", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setToken(data.token);
    setUserId(data.userid);
    setFirstName(data.firstName)
    navigate("/dashboard");
  };

  const logout = () => {
    setToken(null);
    setFirstName(null)
    setUserId(null)
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      userid,
      firstName,
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};