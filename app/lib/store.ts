import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../types";

interface QuiktisStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
  message: string | null;
  messageType: "success" | "error" | null;
  setMessage: (message: string | null, type?: "success" | "error" | null) => void;
  user: User | null;
    setUser: (user: User | null) => void;
}

export const useStore = create<QuiktisStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        setLoading: (value: boolean) => {
          set({ loading: value });
        },
        message: "",
        messageType: null,
        setMessage: (message, type = "success") =>
          set({ message, messageType: type }),
        user: null,
        setUser: (user: User | null) => set({ user }),
      }),
      {
        name: "qkt",
      }
    )
  )
);