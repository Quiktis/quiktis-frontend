import { useEventsTab } from "@/src/lib/EventsTabContext";

export default function EventsPageClient() {
  const { activeTab } = useEventsTab();
  return <div className="text-white">Active tab: {activeTab}</div>;
}
