import ProfileActive from "./ProfileActive";
import ProfileEmpty from "./ProfileEmpty";
import ProfileOrganized from "./ProfileOrganized";

type Props = {
  searchParams?: { state?: string };
};

export default function ProfilePage({ searchParams }: Props) {
  const rawState = (searchParams?.state ?? "active").toLowerCase();

  if (rawState === "inactive" || rawState === "empty") {
    return <ProfileEmpty />;
  }

  if (rawState === "organized") {
    return <ProfileOrganized />;
  }

  return <ProfileActive />;
}
