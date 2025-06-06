import { useState, useEffect } from "react";
import "../../styles/EditEventModal.css";


const EditEventModal = ({ event, onClose, onSave }) => {
    // S�tter initialt formul�rdata till det event som skickats in som prop
    const [formData, setFormData] = useState({ ...event });

    useEffect(() => {
        // Uppdaterar formul�rdata om ett nytt event skickas in till komponenten
        setFormData({ ...event });
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Uppdaterar formData dynamiskt baserat p� f�ltens namn
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Skickar tillbaka det uppdaterade eventet till parent-komponenten
        onSave(event.id, formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Event</h2>
                <form onSubmit={handleSubmit}>
                    <input name="title" value={formData.title} onChange={handleChange} required />
                    <input name="description" value={formData.description} onChange={handleChange} required />
                    <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} required />
                    <input name="location" value={formData.location} onChange={handleChange} required />
                    <div className="modal-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEventModal;
