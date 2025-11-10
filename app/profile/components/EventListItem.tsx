import Image from "next/image";

interface EventListItemProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    venue: string;
    imageUrl: string;
  };
  isLast?: boolean;
}

export default function EventListItem({
  event,
  isLast = false,
}: EventListItemProps) {
  return (
    <div className={`flex space-x-4 ${!isLast ? "mb-10" : ""}`}>
      <Image
        src={event.imageUrl}
        alt={event.title}
        width={80}
        height={80}
        className="rounded-[8px] object-cover"
      />
      <div className="flex-1 flex flex-col justify-between min-h-[80px]">
        <div>
          <h3 className="font-medium text-xl leading-[100%] text-white m-0 font-inter">
            {event.title}
          </h3>
        </div>
        <div>
          <p className="font-normal text-base leading-[100%] text-[#919499] m-0 mb-1 font-inter">
            {event.date}, {event.time}
          </p>
          <p className="font-normal text-base leading-[100%] text-[#919499] m-0 font-inter">
            {event.venue}
          </p>
        </div>
      </div>
    </div>
  );
}
