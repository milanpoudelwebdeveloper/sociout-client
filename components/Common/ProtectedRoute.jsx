import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, 700);
    return () => clearTimeout(timeId);
  }, [isLoggedIn]);

  return <>{isLoggedIn && children}</>;
};

export default ProtectedRoute;
