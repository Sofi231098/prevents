import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "../types/user.types";

interface UserStore {
    user: UserType | null;
    updateUser: (user: UserType) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            updateUser: (user: UserType) => set({ user }),
        }),
        {
            name: "user-storage",
        }
    )
);