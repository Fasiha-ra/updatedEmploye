import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [trendingSessions, setTrendingSessions] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        companyId,
        setCompanyId,
        trendingSessions,
        setTrendingSessions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
