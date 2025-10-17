import { useQuery } from "@tanstack/react-query";
import { request } from "../request";

export const Queries = () => {
  ///auth
  const googleInitiate = useQuery({
    queryKey: ["google-key"],
    queryFn: request.GoogleInitiate,
  });
  return {
    googleInitiate,
  };
};
