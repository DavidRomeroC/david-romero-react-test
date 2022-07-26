import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeesScreen } from '../components/employees/EmployeesScreen';
import { Upload } from '../components/upload/Upload';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { Formulario } from '../components/employees/form/Formulario';

export const AppRouter = () => {

    const { isLoggedIn } = useSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoute isAuthenticated={isLoggedIn} />}>
                    <Route path="*" element={<AuthRouter />} />
                </Route>
                
                <Route element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
                    <Route path="/employees" element={<EmployeesScreen />} />
                    <Route path="/employees/form" element={<Formulario />} />
                    <Route path="/upload" element={<Upload />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
