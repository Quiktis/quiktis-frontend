import { useQuery } from "@tanstack/react-query";
import { request } from "./request";
import { useStore } from "@/app/context/QuiktisContext";

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
  const { state } = useStore();
  const { user } = state;
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

/**
 * Get supported banks
 */
export const useGetSupportedBanks = () =>
  useQuery({
    queryKey: ["get-supported-banks"],
    queryFn: request.getSupportedBanks,
  });

/**
 * ✅ Get payout configuration
 */
export const useGetPayoutDetails = () =>
  useQuery({
    queryKey: ["get-payout-details"],
    queryFn: request.getPayoutDetails,
  });

/**
 * Confirm payout details
 */
export const useConfirmPayoutDetails = (
  account_number?: string,
  bank_code?: string
) =>
  useQuery({
    queryKey: ["confirm-payout-details", account_number, bank_code],
    queryFn: () =>
      request.confirmPayoutDetails(account_number!, bank_code!),
    enabled: !!(account_number && bank_code),
  });
