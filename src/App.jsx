import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import "./index.css"; 

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    return (
        <div className="App">
            {user ? (
                <div className="layout"> 
                    <Sidebar />
                    <div className="main">
                        <Topbar />
                        <MainContent />
                    </div>
                </div>
            ) : (
                <Login onLoginSuccess={(user) => {
                    setUser(user);
                    localStorage.setItem("user", JSON.stringify(user));
                }} />
            )}
        </div>
    );
}

export default App;
