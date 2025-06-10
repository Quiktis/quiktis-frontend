import React from "react";
import NftEventCard from "./NftEventCard";

interface Event {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  ticketsLeft: number;
  image: string;
}

const DUMMY_EVENTS: Event[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: "Christmas Concert",
  category: "Concert",
  price: "$500",
  rating: 4.5,
  ticketsLeft: 45,
  image: "/images/sample-event.jpg",
}));

const NftEventList: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {DUMMY_EVENTS.map((evt) => (
      <NftEventCard key={evt.id} {...evt} />
    ))}
  </div>
);

export default NftEventList;
