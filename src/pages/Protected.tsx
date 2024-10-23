import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedPage = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null; // Render children if authenticated
};

export default ProtectedPage;
