"use client";
import Link from "next/link";
import React from "react";

interface BalanceCardProps {
  balance: string;
  transactionId: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  transactionId,
}) => {
  return (
    <div
      className="
        relative
        h-full
        w-full
        rounded-[40px]
        overflow-hidden
        bg-white/20
        backdrop-blur-md
        border border-white/30
        text-white
        shadow-lg
      ">
      <div className="h-full flex flex-col justify-between p-8 pt-12">
        <div>
          <h2 className="text-4xl font-bold text-[#e3e3e3]">{balance}</h2>
          <p
            className="
              mt-2
              text-sm
              text-[#AAAAAA]
              max-w-xs
              truncate
              whitespace-nowrap
            ">
            {transactionId}
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            href="/withdraw-bank"
            className="
              flex-1
              text-center
              text-white
              text-sm font-semibold
              py-3 px-6
              rounded-xl
              bg-[#FF4D2A]
              shadow-md
              hover:bg-[#e03e16]
              transition-colors
              whitespace-nowrap
            ">
            Withdraw to Bank
          </Link>
          <Link
            href="/withdraw-wallet"
            className="
              flex-1
              text-center
              text-white
              text-sm font-semibold
              py-3 px-6
              rounded-xl
              bg-[#FF4D2A]
              shadow-md
              hover:bg-[#e03e16]
              transition-colors
              whitespace-nowrap
            ">
            Withdraw to Wallet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
