import Image from "next/image";

export default function EmptyStateSection() {
  return (
    <div className="mb-[200px]">
      <Image
        src="/inactive_events.svg"
        alt="No cultural identity"
        width={330}
        height={112.2}
        className="opacity-100 mb-[37px]"
      />

      <h2 className="font-medium text-[33.36px] leading-[100%] text-[#919499] m-0 mb-[11px] font-inter">
        No Cultural Identity Yet
      </h2>

      <p className="font-medium text-[20.02px] leading-[25.07px] text-[#919499] m-0 font-[Poppins]">
        No identity yet, build your portfolio of event organised and
        <br />
        attended to earn a reward.
      </p>
    </div>
  );
}
