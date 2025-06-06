import "../../styles/Topbar.css";

const Topbar = () => {
    return (
        <header className="topbar">
            <h1 className="topbar-title">Dashboard</h1>
            <div className="topbar-user">
                <span>Admin</span>
            </div>
        </header>
    );
};

export default Topbar;
