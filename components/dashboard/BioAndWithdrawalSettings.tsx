"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Bank {
  name: string;
  code: string;
}

const banks: Bank[] = [
  { name: "Access Bank", code: "044" },
  { name: "GTBank", code: "058" },
];

const BioAndWithdrawalSettings: React.FC = () => {
  const [bio, setBio] = useState("");
  const [isBioSaved, setIsBioSaved] = useState(false);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId] = useState("HytVHSSMKmksjfa8y5n93HytV");

  const handleSaveBio = () => {
    setIsBioSaved(true);
    setTimeout(() => setIsBioSaved(false), 3000);
  };

  const handleWithdraw = () => {
    // withdrawal logic
  };

  return (
    <section className="mt-12 max-w-4xl mx-auto space-y-8">
      {/* Bio */}
      <div className="py-6">
        <h3 className="text-3xl font-bold text-white mb-2">
          Bio<span className="text-[#FF4D2A]">*</span>
        </h3>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Give a little description of yourself…"
          rows={4}
          className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] placeholder-[#AAAAAA]"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSaveBio}
            disabled={!bio.trim()}
            className="bg-[#FF4D2A] text-white px-6 py-2 rounded-md hover:bg-[#e03e16] transition-colors disabled:opacity-50">
            Save Bio
          </button>
        </div>
        {isBioSaved && (
          <p className="text-sm text-green-400 mt-2">
            Bio updated successfully!
          </p>
        )}
      </div>

      {/* Withdrawal Settings */}
      <div className="px-4 py-6">
        <h3 className="text-3xl font-bold text-white mb-4">
          Withdrawal Settings
        </h3>

        {/* Profile */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#C4C4C4] flex items-center justify-center text-black font-bold mr-4">
            {selectedBank
              ? selectedBank.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()
              : "AB"}
          </div>
          <div>
            <div className="text-white">
              {selectedBank?.name || "Access Bank"}
            </div>
            <div className="text-sm text-[#AAAAAA]">1393611583</div>
            <div className="text-sm text-[#AAAAAA]">
              {accountName || "David Adeleke O."}
            </div>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bank Name */}
          <div>
            <label htmlFor="bank" className="block text-[#FF4D2A] mb-1">
              Bank Name
            </label>

            <div className="relative">
              <select
                id="bank"
                value={selectedBank?.name || ""}
                onChange={(e) => {
                  const bank = banks.find((b) => b.name === e.target.value);
                  setSelectedBank(bank || null);
                }}
                className={`
        w-full
        bg-transparent                /* closed = transparent */
        border border-gray-600
        rounded-md
        p-3
        pr-10                         /* room for arrow */
        appearance-none               /* hide native arrow */
        focus:outline-none
        focus:border-[#FF4D2A]        /* colored border on focus */
        focus:bg-black                /* open/focused bg = black */
        focus:text-white              /* open/focused text = white */
        ${
          selectedBank
            ? "text-white" /* real selection = white text */
            : "text-[#AAAAAA]" /* placeholder = gray text */
        }
      `}>
                <option value="" disabled>
                  Input Bank Name
                </option>
                {banks.map((bank) => (
                  <option key={bank.code} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </select>

              {/* custom down-arrow */}
              <div
                className={`
        pointer-events-none
        absolute inset-y-0 right-0
        flex items-center
        pr-3
        ${
          selectedBank
            ? "text-white" /* after select → white arrow */
            : "text-[#AAAAAA]" /* placeholder → gray arrow */
        }
      `}>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Account Number */}
          <div>
            <label htmlFor="acct" className="block text-[#FF4D2A] mb-1">
              Account Number
            </label>
            <input
              id="acct"
              type="text"
              value={accountNumber}
              onChange={(e) =>
                setAccountNumber(e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="*************"
              className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] placeholder-[#AAAAAA]"
            />
          </div>

          {/* Account Name */}
          <div>
            <label htmlFor="acctName" className="block text-[#FF4D2A] mb-1">
              Account Name
            </label>
            <input
              id="acctName"
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="David Adeleke O."
              className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] placeholder-[#AAAAAA]"
            />
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amt" className="block text-[#FF4D2A] mb-1">
              Amount
            </label>
            <input
              id="amt"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="30,000"
              className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] placeholder-[#AAAAAA]"
            />
          </div>
        </div>
      </div>

      {/* Disconnect Wallet */}
      <div className="px-4 py-6">
        <h3 className="text-3xl font-bold text-white mb-2">
          Disconnect Wallet
        </h3>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm text-[#AAAAAA]">{transactionId}</span>
          <button className="text-red-500 hover:text-red-400">
            <IoMdClose size={18} />
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleWithdraw}
            className="bg-[#FF4D2A] text-white px-6 py-2 rounded-md hover:bg-[#e03e16] transition-colors">
            Withdraw
          </button>
        </div>
      </div>
    </section>
  );
};

export default BioAndWithdrawalSettings;
