import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  profileImage: string;
  joinedDate: string;
}

export default function ProfileHeader({
  name,
  profileImage,
  joinedDate,
}: ProfileHeaderProps) {
  return (
    <header className="mb-10 -ml-6">
      <div className="flex items-start gap-7">
        <div className="relative flex-shrink-0">
          <Image
            src={profileImage}
            alt={name}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-medium text-5xl leading-[121%] text-white m-0 mb-3.5 font-inter">
            {name}
          </h1>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/calender-profile.svg"
              alt="Calendar"
              width={16}
              height={16}
            />
            <span className="font-medium text-xl leading-[100%] text-[#919499] font-inter">
              Joined {joinedDate}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
