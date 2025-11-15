interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) {
  return (
    <div
      className="w-full sm:w-[160px] md:w-[170px] lg:w-[183px] h-[58px] sm:h-[64px] md:h-[69px] flex items-center justify-between rounded-[7.5px] sm:rounded-[8.5px] md:rounded-[9.19px] border-[0.26px] border-[rgba(81,81,81,0.3)] px-4 sm:px-5 md:px-6 flex-shrink-0 bg-[#FFFFFF05]"
      style={{
        backdropFilter: "blur(10.33px)",
        WebkitBackdropFilter: "blur(10.33px)",
      }}
    >
      <span className="font-medium text-[20px] sm:text-[22px] md:text-2xl leading-[121%] text-white font-inter">
        Qty
      </span>
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onIncrement}
            className="bg-transparent border-none w-[8px] sm:w-[8.5px] md:w-[9px] h-[6px] sm:h-[6.25px] md:h-[6.75px] cursor-pointer p-0 leading-none flex items-center justify-center text-[#919499]"
          >
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M4.5 0L9 6.75H0L4.5 0Z" fill="#919499" />
            </svg>
          </button>
          <span className="font-medium text-[18px] sm:text-[19px] md:text-xl leading-[121%] text-white text-center min-w-[18px] sm:min-w-[19px] md:min-w-[20px] font-inter">
            {quantity}
          </span>
          <button
            onClick={onDecrement}
            className="bg-transparent border-none w-[8px] sm:w-[8.5px] md:w-[9px] h-[6px] sm:h-[6.25px] md:h-[6.75px] cursor-pointer p-0 leading-none flex items-center justify-center text-[#919499]"
          >
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M4.5 6.75L0 0H9L4.5 6.75Z" fill="#919499" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
