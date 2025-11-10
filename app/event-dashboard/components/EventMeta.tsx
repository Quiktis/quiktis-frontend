import React from "react";
import SafeImage from "@/components/SafeImage";
import { FaMapMarkerAlt } from "react-icons/fa";

interface EventMetaProps {
  organizerIcon: string;
  organizer: string;
  location: string;
  variant: "mobile" | "desktop";
}

export default function EventMeta({
  organizerIcon,
  organizer,
  location,
  variant,
}: EventMetaProps) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 mt-1">
        <div className="flex items-center gap-2">
          <SafeImage
            src={organizerIcon}
            alt="organizer icon"
            width={16}
            height={16}
            className="object-contain rounded-full"
            unoptimized
          />
          <span className="font-inter font-medium text-xs text-gray-400 truncate">
            By {organizer}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
          <span className="font-inter font-medium text-xs truncate max-w-[57%]">
            {location}
          </span>
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex items-center gap-2">
        <SafeImage
          src={organizerIcon}
          alt="organizer icon"
          width={26}
          height={26}
          className="object-cover rounded-full flex-shrink-0 w-[26px] h-[26px]"
          unoptimized
        />
        <span className="text-[#666666] font-medium text-[20px] leading-none">
          By {organizer}
        </span>
      </div>

      <div className="flex items-center gap-2 text-[#666666]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 9.75C0 4.3655 4.365 0 9.75 0C15.135 0 19.5 4.366 19.5 9.7505C19.5 13.2445 17.697 16.1835 15.737 18.352C13.771 20.528 11.574 22.01 10.6185 22.605C10.3584 22.7688 10.0573 22.8556 9.75 22.8556C9.44266 22.8556 9.14158 22.7688 8.8815 22.605C7.9265 22.01 5.729 20.528 3.763 18.352C1.803 16.183 0 13.244 0 9.75Z"
            fill="#666666"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.50195 13.9072C10.5628 13.9072 11.5802 13.4858 12.3304 12.7357C13.0805 11.9855 13.502 10.9681 13.502 9.90723C13.502 8.84636 13.0805 7.82894 12.3304 7.0788C11.5802 6.32865 10.5628 5.90723 9.50195 5.90723C8.44109 5.90723 7.42367 6.32865 6.67353 7.0788C5.92338 7.82894 5.50195 8.84636 5.50195 9.90723C5.50195 10.9681 5.92338 11.9855 6.67353 12.7357C7.42367 13.4858 8.44109 13.9072 9.50195 13.9072Z"
            fill="#131517"
          />
        </svg>
        <span className="text-[#666666] font-medium text-[20px] leading-none">
          {location}
        </span>
      </div>
    </div>
  );
}
