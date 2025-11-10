import Image from "next/image";

interface CulturalIdentityHeaderProps {
  eventsOrganized: number;
  eventsAttended: number;
  isEmptyState?: boolean;
  isOrganizedState?: boolean;
}

export default function CulturalIdentityHeader({
  eventsOrganized,
  eventsAttended,
  isEmptyState = false,
  isOrganizedState = false,
}: CulturalIdentityHeaderProps) {
  return (
    <div className="mb-16">
      <h2 className="font-semibold text-[40px] leading-[121%] text-white m-0 mb-[17px] font-inter">
        Your Cultural Identity
      </h2>
      <div className="flex items-center space-x-2 mt-[17px]">
        <Image
          src="/icons/calender-profile.svg"
          alt="Calendar"
          width={16}
          height={16}
        />
        <span
          className={`font-medium text-xl leading-[100%] font-inter ${
            isOrganizedState ? "text-white" : "text-[#919499]"
          }`}
        >
          {eventsOrganized} organized
        </span>
        <span className="font-medium text-xl leading-[100%] text-[#919499] font-inter">
          |
        </span>
        <span
          className={`font-medium text-xl leading-[100%] font-inter ${
            isEmptyState || isOrganizedState ? "text-[#919499]" : "text-white"
          }`}
        >
          {eventsAttended} Attended
        </span>
      </div>
    </div>
  );
}
