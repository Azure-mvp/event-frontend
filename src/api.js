const EVENT_API = "https://localhost:7103/api/events";
const USER_API = "https://localhost:7009/api";

/* Events */
export async function fetchEvents() {
    const res = await fetch(EVENT_API);
    if (!res.ok) {
        throw new Error("Failed to fetch events");
    }
    return await res.json();
}

export async function createEvent(eventData) {
    const res = await fetch(EVENT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(`Failed to create event: ${res.status} – ${message}`);
    }
}

export async function deleteEvent(id) {
    const res = await fetch(`${EVENT_API}/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(`Failed to delete event: ${res.status} – ${message}`);
    }
}

export async function updateEvent(eventId, updatedData) {
    const res = await fetch(`${EVENT_API}/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(`Failed to update event: ${res.status} – ${message}`);
    }
}

/* Login */
export async function login(username, password) {
    const res = await fetch(`${USER_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        throw new Error("Wrong username or password");
    }

    return await res.json();
}
