import GuestActive from "./GuestActive";
import GuestEmpty from "./GuestEmpty";

type Props = {
  params: { id: string };
  searchParams?: { state?: string };
};

export default function GuestPage({ params, searchParams }: Props) {
  const eventId = params.id;
  const rawState = (searchParams?.state ?? "active").toLowerCase();

  // the "inactive" or "empty" as empty state and everything else would be active
  if (rawState === "inactive" || rawState === "empty") {
    return <GuestEmpty eventId={eventId} />;
  }

  return <GuestActive eventId={eventId} />;
}
