import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
type propsGuard = { children?: any };

export const Guard = ({ children }: propsGuard) => {

  
  if (
    localStorage.getItem("tokenHitData") &&
    localStorage.getItem("tokenName") &&
    localStorage.getItem("tokenHitData")
  ) {
    const userToken = String(localStorage.getItem("tokenHitData"));
    const userTokenName = String(localStorage.getItem("tokenName"));
    const userTokenEmail = String(localStorage.getItem("tokenEmail"));

    try {
      jwtDecode(userToken);
      jwtDecode(userTokenName);
      jwtDecode(userTokenEmail);
    } catch (error) {
      <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};
