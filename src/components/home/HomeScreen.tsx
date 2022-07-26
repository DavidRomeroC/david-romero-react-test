import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
    
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }
    
    return (
        <div className="home__container">
            <h3>Home Page</h3>

            <button className="btn-login" onClick={handleLogin}>Log In</button>
        </div>

    )
}
