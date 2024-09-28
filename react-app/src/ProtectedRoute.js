// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const authToken = localStorage.getItem('authToken'); // Sau folosește o metodă mai sigură

  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
