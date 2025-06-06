

import { Calendar, MapPin, Pencil, Trash2 } from "lucide-react";
import "../../styles/EventCard.css";

const EventCard = ({ event, onEdit, onDelete }) => {
    return (
        <div className="event-card">
            <div className="event-card-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                
                <div className="event-meta">
                    <div className="event-meta-item">
                        <Calendar size={16} /> <span>{event.date}</span>
                    </div>
                    <div className="event-meta-item">
                        <MapPin size={16} /> <span>{event.location}</span>
                    </div>
                </div>
            </div>

            {/* Knappar för redigering och radering av event */}
            <div className="event-actions">
                <button onClick={() => onEdit(event)} title="Edit">
                    <Pencil size={16} />
                </button>
                <button onClick={() => onDelete(event.id)} title="Delete">
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
};

export default EventCard;
