import { EventType } from "@/modules/events/types/event.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikeEventStore {
    likedEvents: EventType[];
    addLikedEvent: (event: EventType) => void;
    removeLikedEvent: (eventId: string) => void;
    isEventLiked: (eventId: string) => boolean;
}

export const useLikeEventStore = create<LikeEventStore>()(
    persist(
        (set, get) => ({
            likedEvents: [],
            addLikedEvent: (event: EventType) => set((state) => ({
                likedEvents: [...state.likedEvents, event]
            })),
            removeLikedEvent: (eventId: string) => set((state) => ({
                likedEvents: state.likedEvents.filter(event => event.id !== eventId)
            })),
            isEventLiked: (eventId: string) =>
                get().likedEvents.some(event => event.id === eventId)
        }),
        {
            name: "liked-events-storage",
        }
    )
);