import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../../axiosConfig";
import { useCustomToast } from "../../customHooks/useToast";

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
  const { showToast } = useCustomToast();

  const checkLogin = async () => {
    try {
      const res = await axiosInstance.get("/auth/refresh");
      setIsLoggedIn(true);
      setUser(res?.data?.user);
    } catch (e) {
      console.log(e);
      setIsLoggedIn(false);
    }
  };

  const logOutHandler = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      showToast(res?.data?.message);
    } catch (e) {
      showToast("Something went wrong.Please try again");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setUser(null);
    logOutHandler();
    setIsLoggedIn(false);
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
