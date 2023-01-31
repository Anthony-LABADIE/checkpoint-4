import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Navigate } from "react-router";
import { authContext } from "../contexts/AuthContexts";

function ProtectedRoute({ children }) {
  const { auth } = useContext(authContext);
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProtectedRoute;
