import { create } from "zustand";
import eventAPI from "../api/event.api";
import { EventType } from "../types/event.types";

interface EventStore {
    event: EventType | null;
    error: string | null;
    isLoading: boolean;
    fetchEventById: (eventId: string) => Promise<void>;
}

const useEventStore = create<EventStore>((set) => ({
    event: null,
    error: null,
    isLoading: false,
    fetchEventById: async (eventId) => {
        set({ isLoading: true, error: null });
        try {
            const response = await eventAPI.getEventById(eventId);
            set({ event: response.data });
        } catch ($error) {
            set({
                error:
                    $error instanceof Error
                        ? $error.message
                        : "An unknown error occurred",
            });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useEventStore;
