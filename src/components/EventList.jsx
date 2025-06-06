

import { useEffect, useState } from "react";
import { fetchEvents, updateEvent, deleteEvent } from "../api";
import EventCard from "./EventCard";
import EditEventModal from "./EditEventModal";
import "../../styles/EventCard.css";

const EventList = () => {
    const [events, setEvents] = useState([]); 
    const [editingEvent, setEditingEvent] = useState(null); 

    // Hämtar events från backend
    const loadEvents = async () => {
        const data = await fetchEvents();
        setEvents(data);
    };

    // Körs när komponenten mountas – hämtar eventlistan en gång. Skapad med hjälp av ChatGPT
    useEffect(() => {
        loadEvents();
    }, []);

    // Sätter valt event som aktivt för redigering
    const handleEdit = (event) => setEditingEvent(event);

    // Uppdaterar ett event via API och laddar om listan
    const handleUpdate = async (id, updatedData) => {
        await updateEvent(id, updatedData);
        setEditingEvent(null);
        loadEvents();
    };

    // Tar bort ett event från backend och uppdaterar listan lokalt
    const handleDelete = async (id) => {
        try {
            await deleteEvent(id);
            setEvents(events.filter(event => event.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    // Stänger modalen för redigering. Skapad med hjälp av ChatGPT.
    const handleCloseModal = () => setEditingEvent(null);

    return (
        <div>
            
            {editingEvent && (
                <EditEventModal
                    event={editingEvent}
                    onClose={handleCloseModal}
                    onSave={handleUpdate}
                />
            )}

            <h2>Event List</h2>

            <div className="event-list-container">
                {/* Renderar varje event som ett kort */}
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventList;
