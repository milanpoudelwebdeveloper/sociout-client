import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return <>{isLoggedIn && children}</>;
};

export default ProtectedRoute;
