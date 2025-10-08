import ProfileActive from "./ProfileActive";
import ProfileEmpty from "./ProfileEmpty";

type Props = {
  searchParams?: Promise<{ state?: string }>;
};

export default async function ProfilePage(props: Props) {
  const searchParams = await props.searchParams;
  const rawState = (searchParams?.state ?? "active").toLowerCase();

  // the "inactive" or "empty" as empty state and everything else would be active

  if (rawState === "inactive" || rawState === "empty") {
    return <ProfileEmpty />;
  }

  return <ProfileActive />;
}
