import { useQuery } from "@tanstack/react-query";
import eventAPI from "../api/event.api";

export const useEventsQuery = () => {
    return useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const response = await eventAPI.getEvents();
            if (response.status !== 200) {
                throw new Error('Error fetching events');
            }
            return response.data
        }
    });
}