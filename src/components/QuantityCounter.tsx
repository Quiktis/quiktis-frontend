import React, { useState } from 'react';

interface QuantityCounterProps {
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ min = 1, max = 50000, onChange }) => {
  const [quantity, setQuantity] = useState<number>(min);

  const increase = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const decrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className="grid grid-cols-[2em_2em_2em] place-items-center gap-[1em] h-fit">
      <button
      type='button'
        onClick={decrease}
        className="border px-3 py-1 rounded disabled:opacity-50 h-fit"
        disabled={quantity <= min}
      >
        -
      </button>
      <span className="text-lg font-medium h-fit">{quantity}</span>
      <button
      type="button"
        onClick={increase}
        className="border px-3 py-1 rounded disabled:opacity-50 h-fit"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
