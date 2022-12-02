import { Navigate } from "react-router-dom";
import { useSelector } from "../../app/hooks/useSelector";
import { ROUTE_ROOT } from "..";

export default function AuthRoute({ children }: any) {
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthorizedUser) {
    return <Navigate to={ROUTE_ROOT} replace />;
  }

  return children;
}
