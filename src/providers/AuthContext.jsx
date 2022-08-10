import { createContext, useContext } from "react";
import { auth } from "../database/db";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuth, loading, error] = useAuthState(auth);
  return (
    <AuthContext.Provider value={[isAuth, loading, error]}>
      {children}
    </AuthContext.Provider>
  );
};
