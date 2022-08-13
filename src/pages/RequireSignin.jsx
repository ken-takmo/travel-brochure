import { useLocation, Navigate } from "react-router-dom";

export const RequireSignin = () => {
  const location = useLocation();
  alert("ログイン後にご利用になれます");
  return <Navigate to="/signin" state={{ from: location }} />;
};
