import { useQuery } from "@tanstack/react-query";
import eventAPI from "../api/event.api";
import { NumberParam, useQueryParam } from "use-query-params";

export const useEventsQuery = () => {
    const [currentPage] = useQueryParam('page', NumberParam)

    return useQuery({
        queryKey: ['events', currentPage],
        queryFn: async () => {
            const response = await eventAPI.getEvents(currentPage ?? 0);
            if (response.status !== 200) {
                throw new Error('Error fetching events');
            }
            return response.data
        },
    });
}