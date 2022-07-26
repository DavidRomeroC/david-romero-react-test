import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/home/Auth/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Routes>

                <Route path="/home" element={< HomeScreen />} />
                
                <Route path="/login" element={< LoginScreen />} />

            </Routes>
        </div>
    )
}
