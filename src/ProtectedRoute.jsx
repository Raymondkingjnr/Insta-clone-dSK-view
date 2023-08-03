import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.data.user.user);

  if (!user) {
    return <Navigate to={"/authPage"} />;
  }

  return children;
};

export default ProtectedRoute;
