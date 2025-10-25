"use client"

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { TokenService } from "@/ApiServices/token-service";
import { useRouter } from "next/navigation";
import { User } from "../types/types";

interface State {
  loading: boolean;
  message: string | null;
  messageType: "success" | "error" | null;
  user: User | null;
}

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_MESSAGE"; payload: { message: string | null; type?: "success" | "error" | null } }
  | { type: "SET_USER"; payload: User | null };

const initialState: State = {
  loading: false,
  message: null,
  messageType: null,
  user: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload.message,
        messageType: action.payload.type || "success",
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const STORAGE_KEY = "qkt_storage";

function loadPersistedState(): State {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...initialState, ...JSON.parse(stored) } : initialState;
  } catch {
    return initialState;
  }
}


const QuiktisContext = createContext<{
  state: State;
  setLoading: (value: boolean) => void;
  setMessage: (message: string | null, type?: "success" | "error" | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}>({
  state: initialState,
  setLoading: () => {},
  setMessage: () => {},
  setUser: () => {},
  logout: () => {},
});

export const QuiktisProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, loadPersistedState());
  const router = useRouter();

  // persist changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // mimic devtools logging
  useEffect(() => {
    console.log("[QuiktisContext] State changed:", state);
  }, [state]);

  const setLoading = (value: boolean) => dispatch({ type: "SET_LOADING", payload: value });
  const setMessage = (message: string | null, type?: "success" | "error" | null) =>
    dispatch({ type: "SET_MESSAGE", payload: { message, type } });
  const setUser = (user: User | null) => dispatch({ type: "SET_USER", payload: user });


  /**
   *  Logout function
   * - Clears cookies, localStorage, and context state
   * - Optionally redirects to login page
   */
  const logout = () => {
    try {
      // 1Remove token cookie
      TokenService.removeCookie();

      // Clear persisted state
      localStorage.removeItem(STORAGE_KEY);

      // Clear user from context
      dispatch({ type: "SET_USER", payload: null });

      // Optionally show logout message
      dispatch({
        type: "SET_MESSAGE",
        payload: { message: "You’ve been logged out successfully.", type: "success" },
      });

      // Optionally redirect to login
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
      dispatch({
        type: "SET_MESSAGE",
        payload: { message: "Logout failed. Try again.", type: "error" },
      });
    }
  };

  return (
    <QuiktisContext.Provider value={{ state, setLoading, setMessage, setUser, logout }}>
      {children}
    </QuiktisContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(QuiktisContext);
  if (!context) throw new Error("useQuiktis must be used within a QuiktisProvider");
  return context;
};