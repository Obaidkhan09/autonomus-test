import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

export const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
      const token = localStorage.getItem('Token');

      // If the user tries to access the root ("/") route
      if (location.pathname === '/') {
        if (token) {
          navigate('/dashboard'); // Redirect to dashboard if authenticated
        } else {
          navigate('/login'); // Redirect to login if not authenticated
        }
      }
      // For other protected routes
      else if (!token && location.pathname !== '/signUp') {
        navigate('/login'); // Redirect to login if no token
      }
    }, [location.pathname]);
    return WithHeader(WrappedComponent);
  };

  return <AuthHOC />;
};

export const WithHeader = (WrappedComponent) => {
  const token = localStorage.getItem('Token');
  return (
    <>
      {token &&
        <Header />
      }
      <WrappedComponent />
    </>
  )
}

export default withAuth;
