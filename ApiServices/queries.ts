import { useQuery } from "@tanstack/react-query";
import { request } from "./request";
import { GetAllEventsResponse } from "../app/types";
import { useStore } from "../app/lib/store";

/**
 * Google OAuth initialization
 */
export const useGoogleInitiate = () =>
  useQuery({
    queryKey: ["google-key"],
    queryFn: request.GoogleInitiate,
  });


/**
 * Get all events
 */
export const useGetAllEvents = () =>
  useQuery({
    queryKey: ["get-all-events"],
    queryFn: request.getAllEvents,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });


  /**
 * Get all events belonging to current user
 */
export const useGetAllUserEvents = () => {
  const { user } = useStore();
  return useQuery({
    queryKey: ["get-all-user-events", user?.id],
    queryFn: () => request.getAllUserEvents(user!.id),
    enabled: !!user, // only runs when logged in
  });
};


/**
 * Get event details by ID
 */
export const useGetEventById = (eventId?: string) =>
  useQuery({
    queryKey: ["get-event-by-id", eventId],
    queryFn: () => request.getEventById(eventId!),
    enabled: !!eventId,
  });

