import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import eventAPI from '../api/event.api';
import { EventDetail } from '../components/event-detail/event-detail';
import { EventType } from '../types/event.types';

const EventsDetailPage = () => {

    const params = useParams<{ id: string }>();
    const [event, setEvent] = useState<EventType | null>(null);

    useEffect(() => {
        if (params.id) {
            eventAPI.getEventById(params.id).then(response => {
                setEvent(response.data);
            });
        }
    }, []);

    return (

        (event) ? <EventDetail event={event} /> : <p>Cargando...</p>
    )
}

export default EventsDetailPage