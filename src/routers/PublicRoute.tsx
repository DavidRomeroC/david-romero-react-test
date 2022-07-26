import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({isAuthenticated}:any) => {
    return isAuthenticated ? <Navigate to="/employees" /> : <Outlet />;
}