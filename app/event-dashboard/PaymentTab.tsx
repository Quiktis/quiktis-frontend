"use client";
import React, { useState } from "react";
import AmountCard from "./components/AmountCard";
import FormInput from "./components/FormInput";

export default function PaymentTab() {
  const [accountName, setAccountName] = useState("");
  const [accountBank, setAccountBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleWithdraw = () => {
    console.log("Withdraw clicked", {
      accountName,
      accountBank,
      accountNumber,
      paymentAmount,
    });
  };

  return (
    <div className="min-h-screen pb-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-[90px]">
        {/* DARE Header */}
        <h1 className="uppercase mb-12 sm:mb-16 text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white font-[Silkscreen] font-bold leading-[80%] tracking-[-0.2em]">
          DARE
        </h1>

        {/* Ticket Sales Section */}
        <div className="mb-16">
          <h2 className="text-white mb-6 text-[17.59px] md:text-[32px] text-left font-inter font-medium leading-[100%]">
            Ticket sales
          </h2>

          {/* Cards Container */}
          <div className="p-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mt-[30px] rounded-[15px] border-[0.5px] border-[#9194994F]">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[17.59px] md:text-[32px] font-inter font-medium leading-[100%] tracking-[-0.05em]">
                Cards
              </h3>
              <p className="max-w-2xl text-[11px] md:text-[19px] font-inter font-medium leading-[100%] tracking-[-0.05em] text-[#919499]">
                Start selling tickets to your events. Major credit and debit
                cards are always accepted
              </p>
              <button className="font-medium transition hover:opacity-80 flex items-center justify-center w-[107.7662px] h-[26.9416px] md:w-[196px] md:h-[49px] rounded-[4.28px] md:rounded-[7.78px] bg-[#FFFFFF] font-inter leading-[100%] tracking-[-0.04em] text-[#131517]">
                <span className="text-[10.26px] md:text-[18.67px]">
                  Get Started
                </span>
              </button>
            </div>

            <button className="hidden lg:flex items-center justify-center w-[54.06px] h-[54.06px] rounded-full bg-[#6F4FF233]">
              <svg
                width="24.03"
                height="24.03"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="#6F4FF2"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center lg:justify-center gap-6 p-6 overflow-x-auto lg:overflow-x-visible h-[252px] rounded-[15px] border-[0.5px] border-[#9194994F] bg-transparent mt-[46px]">
            <AmountCard isEmpty />
            <AmountCard label="Amount Withdrawn:" amount="₦300,000" />
            <AmountCard label="Amount Withdrawn:" amount="₦300,000" />
            <AmountCard label="Total Amount:" amount="₦300,000" />
          </div>
        </div>

        <div>
          <h2 className="text-white mb-8 font-inter text-[32px] font-medium leading-[100%]">
            Add Account Details
          </h2>

          <div className="p-4 sm:p-6 lg:p-8 w-full max-w-[384px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-none rounded-[5.03px] lg:rounded-[15px] border-[0.17px] lg:border-[0.5px] border-[#9194994F] min-h-[170px] lg:h-[430px]">
            {/* Row 1: Account Name and Bank Name*/}
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 lg:gap-y-6 mb-4 lg:mb-6 lg:max-w-[926px] px-3 lg:px-0 w-full">
              <FormInput
                label="Account Name:"
                placeholder="Anjola Adeyemi"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />

              <FormInput
                label="Bank Name:"
                placeholder="First bank"
                value={accountBank}
                onChange={(e) => setAccountBank(e.target.value)}
              />
            </div>

            {/* Row 2: Bank Name and Amount */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 lg:gap-y-6 mb-6 lg:mb-8 lg:max-w-[926px] px-3 lg:px-0 w-full">
              <FormInput
                label="Bank Name:"
                placeholder="First bank"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />

              <FormInput
                label="Amount:"
                placeholder="Input amount you intend to cash out..."
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
              />
            </div>

            {/* Withdraw Button */}
            <button
              onClick={handleWithdraw}
              className="transition-opacity hover:opacity-90 font-medium flex items-center justify-center w-full lg:w-full h-[23.9191px] lg:h-[63px] rounded-[2.95px] lg:rounded-[7.78px] text-[7.59px] lg:text-[20px] mx-auto lg:mx-0 lg:max-w-[926px] bg-[#FFFFFF] font-inter leading-[100%] text-[#131517]"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
