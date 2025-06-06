import { useQuery } from "@tanstack/react-query";
import eventAPI from "../api/event.api";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";

export const useEventsQuery = () => {
    const [currentPage] = useQueryParam('page', NumberParam)
    const [keyword] = useQueryParam('search', StringParam)

    return useQuery({
        queryKey: ['events', currentPage, keyword],
        queryFn: async () => {
            const response = await eventAPI.getEvents(currentPage ?? 0, keyword || '');
            if (response.status !== 200) {
                throw new Error('Error fetching events');
            }
            return response.data
        },
    });
}