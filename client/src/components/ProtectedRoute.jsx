/**
 * @file ProtectedRoute.jsx
 * @module ProtectedRoute
 * @description A React component that restricts access to its children based on authentication status.
 * If the user is not authenticated, they are redirected to the home page.
 * Authentication is determined by the presence of an 'authToken' in localStorage.
 */

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;