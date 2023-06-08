import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
type propsGuard = { children?: any };

export const Guard = ({ children }: propsGuard) => {
  const userToken= localStorage.getItem("tokenHitData");
  if (userToken) {
    try {
      jwtDecode(userToken);
    } catch (error) {
      <Navigate to="/" replace />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
