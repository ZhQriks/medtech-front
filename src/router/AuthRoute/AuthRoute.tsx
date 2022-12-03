import { Navigate } from "react-router-dom";
import { useSelector } from "../../app/hooks/useSelector";
import { ROUTE_LOGIN } from "..";
import { selectIsAuthenticated } from "../../services/auth/auth.selectors";

export default function AuthRoute({ children }: any) {
  const isAuthorizedUser = useSelector((state) => selectIsAuthenticated(state));

  if (!isAuthorizedUser) {
    return <Navigate to={ROUTE_LOGIN} replace />;
  }

  return children;
}
