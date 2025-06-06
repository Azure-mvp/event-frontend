import { useState } from "react";
import "../../styles/maincontent.css";
import EventForm from "./EventForm";
import EventList from "./EventList";

const MainContent = () => {
    const [reloadFlag, setReloadFlag] = useState(false);

    
    const handleEventCreated = () => {
        setReloadFlag(!reloadFlag); // togglar så att EventList laddar om. Skapad med hjälp av ChatGPT.
    };

    return (
        <main className="main-content-area">
            <h1 className="dashboard-title">Event Dashboard</h1>

            <div className="create-event">
                <EventForm onEventCreated={handleEventCreated} />
            </div>

            <div className="event-list">
                <EventList reloadTrigger={reloadFlag} />
            </div>
        </main>
    );
};

export default MainContent;
