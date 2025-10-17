import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
interface QuiktisStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  userId: string;
  setUserId: (value: string) => void;
  isError: boolean;
  setIsError: (value:boolean)=>void;
  isSuccess: boolean;
  setIsSuccess: (value:boolean)=>void;
}

export const useStore = create<QuiktisStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        setLoading: (value: boolean) => {
          set({ loading: value });
        },
        isSuccess: false,
        setIsSuccess: (value:boolean)=> {
          set({isSuccess:value })
        },
         isError: false,
        setIsError: (value:boolean)=> {
          set({isError:value })
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
