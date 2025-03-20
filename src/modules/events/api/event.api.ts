import api from "@/core/api";
import { GetEventsResponse } from "../types/event-http.types";
import { EventType } from "../types/event.types";

const API_KEY = import.meta.env.VITE_API_KEY;

class EventAPI {

    getEvents = () => {
        return api.get<GetEventsResponse>(`events.json?apikey=${API_KEY}&countryCode=US`);
    }

    getEventById = (id: string) => {
        return api.get<EventType>(`events/${id}.json?apikey=${API_KEY}`);
    }

}

const eventAPI = new EventAPI();
export default eventAPI;