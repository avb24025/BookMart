import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center p-10">Checking authentication...</div>;
  }

  if (!user) {
    return <Navigate to="/signup" replace state={{ fromProtected: true }} />;
  }

  return children;
};

export default ProtectedRoute;
