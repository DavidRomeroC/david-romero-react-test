import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({isAuthenticated}:any) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
