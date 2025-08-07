import React, { useEffect } from "react";
import "./Logout.scss";
import { useUserContext } from "../../store/UserContext";

export const Logout: React.FC = () => {
  const { setUser } = useUserContext();

  useEffect(() => {
    // Run on mount, not during render. this will facilitate safe state update
    setUser(null);
    localStorage.removeItem("user");
  }, [setUser]);

  return (
    <div className="container">You have been successfully logged out!</div>
  );
};
