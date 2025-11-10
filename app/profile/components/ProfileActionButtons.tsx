import Image from "next/image";

export default function ProfileActionButtons() {
  return (
    <div className="mb-[60px]">
      <div className="mt-10 md:mt-[286.47px] flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0 md:justify-between">
        {/* Check Journal */}
        <button
          className="w-full md:w-[196px] h-[49px] rounded-[7.78px] border border-[#373737] text-white bg-transparent font-medium text-[16px] md:text-[18.67px] leading-[100%] hover:bg-[#1b1e21] focus:outline-none focus:ring-2 focus:ring-white/20 transition"
          aria-label="Check Journal"
        >
          Check Journal
        </button>

        {/* View Reward */}
        <button
          className="w-full md:w-[196px] h-[49px] rounded-[7.78px] bg-white text-[#131517] font-medium text-[16px] md:text-[18.67px] leading-[100%] flex items-center justify-center gap-2 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          aria-label="View Reward"
        >
          <Image
            src="/icons/diamond-profile.svg"
            alt="Rewards"
            width={20}
            height={20}
          />
          View Reward
        </button>
      </div>
    </div>
  );
}
