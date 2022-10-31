import { createContext, useEffect, useState } from "react";

const initialState = {
  user: null,
  isLoggedIn: false,
  login: () => null,
  logOut: () => null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    console.log("islogged in", loggedIn);
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", true);
    setUser({ username: "test" });
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn", false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
