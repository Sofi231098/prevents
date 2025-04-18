import { PaginatedResponse } from "@/shared/types/http.types";
import { EventType } from "./event.types";

export interface GetEventsResponse extends PaginatedResponse {
    _embedded: {
        events: EventType[];
    };
}