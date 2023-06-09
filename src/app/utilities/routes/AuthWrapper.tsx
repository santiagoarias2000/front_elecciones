import { Navigate, Outlet, useLocation } from 'react-router-dom';
export const AuthWrapper = () => {
    const location = useLocation(); // current location
  
    const userLogged = localStorage.getItem("tokenHitdata");
  
    return userLogged
      ? <Outlet />
      : (
        <Navigate
          to="/"
          replace
          state={{ from: location }} // <-- pass location in route state
        />
      );
  };