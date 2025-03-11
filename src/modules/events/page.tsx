import { EventList } from "./components/event-list/event-list";
import { EventType } from "./types/event.types";

const listaEventos: EventType[] = [
    {
        id: 1,
        name: 'Soda Stereo',
        img: 'https://placehold.co/600x400'
    },
    {
        id: 2,
        name: 'Patricio Rey y sus Redonditos de Ricota',
        img: 'https://placehold.co/600x400'
    },
    {
        id: 3,
        name: 'Charly Garcia',
        img: 'https://placehold.co/600x400'
    },
    {
        id: 4,
        name: 'El Mato a un Policia Motorizado',
        img: 'https://placehold.co/600x400'
    },
    {
        id: 5,
        name: 'Ciro y los Persas',
        img: 'https:/placehold.co/600x400'
    }
]

const EventsPage = () => {
    return (
        <EventList
            events={listaEventos}
        />
    )
}

export default EventsPage;