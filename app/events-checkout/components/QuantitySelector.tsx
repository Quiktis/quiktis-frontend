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
      className="w-[183px] h-[69px] flex items-center justify-between rounded-[9.19px] border-[0.26px] border-[rgba(81,81,81,0.3)] px-6 flex-shrink-0 bg-[#FFFFFF05]"
      style={{
        backdropFilter: "blur(10.33px)",
        WebkitBackdropFilter: "blur(10.33px)",
      }}
    >
      <span className="font-medium text-2xl leading-[121%] text-white font-inter">
        Qty
      </span>
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onIncrement}
            className="bg-transparent border-none w-[9px] h-[6.75px] cursor-pointer p-0 leading-none flex items-center justify-center text-[#919499]"
          >
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M4.5 0L9 6.75H0L4.5 0Z" fill="#919499" />
            </svg>
          </button>
          <span className="font-medium text-xl leading-[121%] text-white text-center min-w-[20px] font-inter">
            {quantity}
          </span>
          <button
            onClick={onDecrement}
            className="bg-transparent border-none w-[9px] h-[6.75px] cursor-pointer p-0 leading-none flex items-center justify-center text-[#919499]"
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
