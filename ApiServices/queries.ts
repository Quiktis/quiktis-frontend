import { useQuery } from "@tanstack/react-query";
import { request } from "./request";
import { GetAllEventsResponse } from "../app/types";
import { useStore } from "../app/lib/store";

export const Queries = (eventId?: string) => {
  const { user } = useStore();

  const googleInitiate = useQuery({
    queryKey: ["google-key"],
    queryFn: request.GoogleInitiate,
  });

  const getAllEvents = useQuery<GetAllEventsResponse>({
    queryKey: ["get-all-events"],
    queryFn: request.getAllEvents,
    staleTime: 1000 * 60 * 5,
  });

  const getAllUserEvents = useQuery<GetAllEventsResponse>({
    queryKey: ["get-all-user-events"],
    queryFn: () => request.getAllUserEvents(user!.id),
    enabled: !!user,
  });

  const getEventById = useQuery({
    queryKey: ["get-event-by-id", eventId],
    queryFn: () => request.getEventById(eventId!),
    enabled: !!eventId, // only run when eventId exists
  });

  return {
    googleInitiate,
    getAllEvents,
    getAllUserEvents,
    getEventById,
  };
};
