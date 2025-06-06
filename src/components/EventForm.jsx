

import { useState } from "react";
import { createEvent } from "../api";


const EventForm = ({ onEventCreated }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEvent(formData); 
            setSuccessMessage("✅ Event created successfully!");
            setErrorMessage("");
            onEventCreated(); 
            setFormData({ title: "", description: "", date: "", location: "" });

          
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            setErrorMessage("❌ Failed to create event. Please check your connection.");
            setSuccessMessage("");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form-grid mb-6">
            {/* Title */}
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Description */}
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Date */}
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Location */}
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Submit button */}
            <div className="form-actions">
                <button type="submit" className="btn-create">Create</button>
            </div>

            {/* messages */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
};

export default EventForm;
