import GuestActive from "./GuestActive";
import GuestEmpty from "./GuestEmpty";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ state?: string }>;
};

export default async function GuestPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const eventId = params.id;
  const rawState = (searchParams?.state ?? "active").toLowerCase();

  // the "inactive" or "empty" as empty state and everything else would be active
  if (rawState === "inactive" || rawState === "empty") {
    return <GuestEmpty eventId={eventId} />;
  }

  return <GuestActive eventId={eventId} />;
}
