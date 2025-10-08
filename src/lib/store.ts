import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
interface QuiktisStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  userId: string;
  setUserId: (value: string) => void;
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
        setMessage: (value: string) => {
          set({ message: value });
        },
        userId: "",
        setUserId: (value: string) => {
          set({ userId: value });
        },
      }),
      {
        name: "qkt",
      }
    )
  )
);
