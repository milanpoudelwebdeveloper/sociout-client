import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return <>{isLoggedIn && children}</>;
};

export default ProtectedRoute;
