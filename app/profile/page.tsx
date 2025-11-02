import ProfileActive from "./ProfileActive";
import ProfileEmpty from "./ProfileEmpty";

type Props = {
  searchParams?: { state?: string };
};

export default function ProfilePage({ searchParams }: Props) {
  const rawState = (searchParams?.state ?? "active").toLowerCase();

  if (rawState === "inactive" || rawState === "empty") {
    return <ProfileEmpty />;
  }

  return <ProfileActive />;
}
