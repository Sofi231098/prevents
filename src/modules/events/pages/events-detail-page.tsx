import { useEffect } from 'react';
import { useParams } from 'react-router';
import { EventDetail } from '../components/event-detail/event-detail';
import useEventStore from '../store/event-store';

const EventsDetailPage = () => {
    const params = useParams<{ id: string }>();
    const { event, error, isLoading, fetchEventById  }  = useEventStore();

    useEffect(() => {
        if (params.id) {
            fetchEventById(params.id);
        }
    }, [params.id, fetchEventById]);

    return (
        (isLoading) ? <p>Cargando...</p> :
        (error) ? <p>{error}</p> :
        (event) && <EventDetail event={event} />
    )
}

export default EventsDetailPage