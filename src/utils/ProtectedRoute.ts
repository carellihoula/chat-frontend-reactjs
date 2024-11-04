import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
