import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

type propsGuard = { children?: any };

export const Guard = ({ children }: propsGuard) => {
  if (localStorage.getItem("tokenHitData")) {
    const userToken = String(localStorage.getItem("tokenHitData"));
    try {
      jwtDecode(userToken);
    } catch (error) {
      <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};