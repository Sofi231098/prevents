import { useEffect, useState } from "react";
import eventAPI from "../api/event.api";
import { EventList } from "../components/event-list/event-list";
import { EventType } from "../types/event.types";

const EventsPage = () => {

    const [events, setEvents] = useState<EventType[]>([]);

    useEffect(() => {
        eventAPI.getEvents().then(response => {
            setEvents(response.data._embedded.events);
        });
    }, []);

    return (
        (events.length === 0) ? <p>Cargando...</p> :
            <EventList
                events={events}
            />
    )
}

export default EventsPage;