import { useState } from "react";
import { login } from "../api";
import "../../styles/Login.css";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login(username, password);
            onLoginSuccess(userData); 
        } catch {
            setError("Incorrect username or password");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                {error && <p className="login-error">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Login;
