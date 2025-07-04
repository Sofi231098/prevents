import api from "@/core/api";
import { GetEventsResponse } from "../types/event-http.types";
import { EventType } from "../types/event.types";

const API_KEY = import.meta.env.VITE_API_KEY;

class EventAPI {

    getEvents = (page: number = 0, keyword: string = '') => {
        const params = new URLSearchParams({
            apikey: API_KEY,
            countryCode: 'MX',
            page: String(page),
            keyword: keyword,
        });
        return api.get<GetEventsResponse>(`events.json?${params}`);
    }

    getEventById = (id: string) => {
        return api.get<EventType>(`events/${id}.json?apikey=${API_KEY}`);
    }

}

const eventAPI = new EventAPI();
export default eventAPI;