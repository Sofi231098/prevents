import { EventList } from "../components/event-list/event-list";
import { useEventsQuery } from "../queries/events.query";

const EventsPage = () => {

    const { data: events, isLoading, error } = useEventsQuery();

    return (
        (isLoading) ? <p>Cargando...</p> :
            (error) ? <p>{error.message}</p> :
                (events) && <EventList events={events._embedded.events} />

    )
}

export default EventsPage;