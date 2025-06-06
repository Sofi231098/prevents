import { useEffect } from 'react';
import { useParams } from 'react-router';
import { EventDetail, EventDetailSkeleton } from '../components/event-detail/event-detail';
import useEventStore from '../store/event-store';
import { Error } from '@/shared/components';

const EventsDetailPage = () => {
    const params = useParams<{ id: string }>();
    const { event, error, isLoading, fetchEventById } = useEventStore();

    useEffect(() => {
        if (params.id) {
            fetchEventById(params.id);
        }
    }, [params.id, fetchEventById]);

    return (
        (isLoading) ? <EventDetailSkeleton /> :
            (error) ? <Error title='Error al cargar el evento' subtitle=" No se pudo cargar el evento solicitado. Por favor, inténtalo de nuevo más tarde." showButton /> :
                (event) && <EventDetail event={event} />
    )
}

export default EventsDetailPage