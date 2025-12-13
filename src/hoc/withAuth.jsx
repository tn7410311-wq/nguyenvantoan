import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => { 
  const AuthComponent = (props) => { 
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
