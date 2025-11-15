import QuantitySelector from "./QuantitySelector";

interface TicketOptionProps {
  name: string;
  price: string;
  priceAmount: string;
  isSelected: boolean;
  onSelect: () => void;
  quantity: number;
  onIncrementQty: () => void;
  onDecrementQty: () => void;
  benefits?: string;
}

export default function TicketOption({
  name,
  price,
  priceAmount,
  isSelected,
  onSelect,
  quantity,
  onIncrementQty,
  onDecrementQty,
  benefits = "Drink, accommodation",
}: TicketOptionProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        className="w-full max-w-[600px] h-[58px] sm:h-[64px] md:h-[69px] rounded-[7.5px] sm:rounded-[8.5px] md:rounded-[9.19px] border-[0.26px] border-[rgba(81,81,81,0.3)] flex justify-between items-center px-5 sm:px-6 md:px-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.08)] bg-[#FFFFFF05]"
        style={{
          backdropFilter: "blur(10.33px)",
          WebkitBackdropFilter: "blur(10.33px)",
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            e.currentTarget.style.background = "#FFFFFF05";
          }
        }}
      >
        <span className="font-medium text-[20px] sm:text-[22px] md:text-2xl leading-[121%] text-white font-inter">
          {name}
        </span>
        <span className="font-bold text-[20px] sm:text-[22px] md:text-2xl leading-[121%] text-white font-inter">
          ₦{price}
          <span className="font-medium">{priceAmount}</span>
        </span>
      </div>

      {isSelected && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px] sm:gap-[26px] pl-0 self-start mt-1 w-full max-w-[600px] animate-[slideDown_0.3s_ease-in-out]">
          <QuantitySelector
            quantity={quantity}
            onIncrement={onIncrementQty}
            onDecrement={onDecrementQty}
          />

          <div
            className="flex-1 w-full sm:w-auto h-[58px] sm:h-[64px] md:h-[69px] flex items-center pl-4 sm:pl-5 md:pl-6 rounded-[7.5px] sm:rounded-[8.5px] md:rounded-[9.19px] border-[0.26px] border-[#515151] bg-[#FFFFFF05]"
            style={{
              backdropFilter: "blur(10.33px)",
              WebkitBackdropFilter: "blur(10.33px)",
            }}
          >
            <span className="font-medium text-[20px] sm:text-[22px] md:text-2xl leading-[121%] text-white font-inter">
              {benefits}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
