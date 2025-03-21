"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface User {
  userId?: string | null;
  email?: string | null;
  name?: string | null;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
  
    userId: null,
    name: null,
    email: null,
  });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
