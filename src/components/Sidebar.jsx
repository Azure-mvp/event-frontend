import "../../styles/Sidebar.css";
import { Home, Calendar, Settings, LogOut } from "lucide-react";
import Logo from "../images/Logo.png"; 

const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload(); // Ladda om för att gå tillbaka till login. Skapad med hjälp av Chatpgt.
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <div className="logo-container">
                    <img src={Logo} alt="Ventixe Logo" className="logo-img" />
                </div>

                <nav className="menu">
                    <a href="#"><Home size={18} /> <span>Dashboard</span></a>
                    <a href="#"><Calendar size={18} /> <span>Events</span></a>
                    <a href="#"><Settings size={18} /> <span>Settings</span></a>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <button className="logout-btn" onClick={handleLogout}>
                    <LogOut size={16} /> <span>Log out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
