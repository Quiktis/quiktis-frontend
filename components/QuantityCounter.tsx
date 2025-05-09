import React, { useState } from 'react';

interface QuantityCounterProps {
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ min = 1, max = 10, onChange }) => {
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
    <div className="flex items-center space-x-3">
      <button
      type='button'
        onClick={decrease}
        className="border px-3 py-1 rounded disabled:opacity-50"
        disabled={quantity <= min}
      >
        -
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
      type="button"
        onClick={increase}
        className="border px-3 py-1 rounded disabled:opacity-50"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
