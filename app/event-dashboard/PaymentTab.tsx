"use client";
import React, { useState } from "react";

export default function PaymentTab() {
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankName2, setBankName2] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    console.log("Withdraw clicked", {
      accountName,
      bankName,
      bankName2,
      amount,
    });
  };

  return (
    <div className="min-h-screen pb-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-[90px]">
        {/* DARE Header */}
        <h1
          className="uppercase mb-12 sm:mb-16 text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white"
          style={{
            fontFamily: "Silkscreen",
            fontWeight: 700,
            lineHeight: "80%",
            letterSpacing: "-20%",
          }}
        >
          DARE
        </h1>

        {/* Ticket Sales Section */}
        <div className="mb-16">
          <h2
            className="text-white mb-6 text-[17.59px] md:text-[32px] text-left"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Ticket sales
          </h2>

          {/* Cards Container */}
          <div
            className="p-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
            style={{
              marginTop: "30px",
              borderRadius: "15px",
              border: "0.5px solid #9194994F",
            }}
          >
            <div className="flex flex-col gap-4">
              <h3
                className="text-white text-[17.59px] md:text-[32px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                  color: "#FFFFFF",
                }}
              >
                Cards
              </h3>
              <p
                className="max-w-2xl text-[11px] md:text-[19px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                  color: "#919499",
                }}
              >
                Start selling tickets to your events. Major credit and debit
                cards are always accepted
              </p>
              <button
                className="font-medium transition hover:opacity-80 flex items-center justify-center w-[107.7662px] h-[26.9416px] md:w-[196px] md:h-[49px] rounded-[4.28px] md:rounded-[7.78px]"
                style={{
                  background: "#FFFFFF",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-4%",
                  color: "#131517",
                }}
              >
                <span className="text-[10.26px] md:text-[18.67px]">
                  Get Started
                </span>
              </button>
            </div>

            <button
              className="hidden lg:flex items-center justify-center"
              style={{
                width: "54.064456939697266px",
                height: "54.064456939697266px",
                borderRadius: "50%",
                background: "#6F4FF233",
              }}
            >
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

          <div
            className="flex items-center lg:justify-center gap-6 p-6 overflow-x-auto lg:overflow-x-visible"
            style={{
              height: "252px",
              borderRadius: "15px",
              border: "0.5px solid #9194994F",
              backgroundColor: "transparent",
              marginTop: "46px",
            }}
          >
            {/* Empty Card */}
            <div
              style={{
                width: "245px",
                height: "174px",
                borderRadius: "10px",
                border: "1px solid #373737B2",
                background: "#FFFFFF05",
                backdropFilter: "blur(10px)",
                opacity: 1,
                transform: "rotate(0deg)",
                flexShrink: 0,
                flexGrow: 0,
              }}
            ></div>

            {/* Amount Withdrawn Card 1 */}
            <div
              className="flex flex-col justify-center"
              style={{
                width: "244px",
                height: "174px",
                borderRadius: "10px",
                border: "1px solid #373737B2",
                background: "#FFFFFF05",
                backdropFilter: "blur(10px)",
                opacity: 1,
                flexShrink: 0,
                flexGrow: 0,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666",
                  marginBottom: "12px",
                  verticalAlign: "middle",
                }}
              >
                Amount Withdrawn:
              </p>
              <h3
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  verticalAlign: "middle",
                }}
              >
                ₦300,000
              </h3>
            </div>

            {/* Amount Withdrawn Card 2 */}
            <div
              className="flex flex-col justify-center"
              style={{
                width: "244px",
                height: "174px",
                borderRadius: "10px",
                border: "1px solid #373737B2",
                background: "#FFFFFF05",
                backdropFilter: "blur(10px)",
                opacity: 1,
                flexShrink: 0,
                flexGrow: 0,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666",
                  marginBottom: "12px",
                  verticalAlign: "middle",
                }}
              >
                Amount Withdrawn:
              </p>
              <h3
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  verticalAlign: "middle",
                }}
              >
                ₦300,000
              </h3>
            </div>

            {/* Total Amount Card */}
            <div
              className="flex flex-col justify-center"
              style={{
                width: "244px",
                height: "174px",
                borderRadius: "10px",
                border: "1px solid #373737B2",
                background: "#FFFFFF05",
                backdropFilter: "blur(10px)",
                opacity: 1,
                flexShrink: 0,
                flexGrow: 0,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666",
                  marginBottom: "12px",
                  verticalAlign: "middle",
                }}
              >
                Total Amount:
              </p>
              <h3
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  verticalAlign: "middle",
                }}
              >
                ₦300,000
              </h3>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
            }}
          >
            Add Account Details
          </h2>

          <div className="p-4 sm:p-6 lg:p-8 w-full max-w-[384px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-none rounded-[5.03px] lg:rounded-[15px] border-[0.17px] lg:border-[0.5px] border-[#9194994F] backdrop-blur-[0px] lg:backdrop-blur-0 min-h-[170px] lg:h-[430px]">
            {/* Row 1: Account Name and Bank Name*/}
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 lg:gap-y-6 mb-4 lg:mb-6 lg:max-w-[926px] px-3 lg:px-0 w-full">
              {/* Account Name */}
              <div className="w-full md:w-auto">
                <label
                  className="block mb-2 text-[7.59px] md:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  Account Name:
                </label>
                <input
                  type="text"
                  placeholder="Anjola Adeyemi"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="w-full lg:w-[447px] h-[25.0581px] lg:h-[66px] rounded-[4.96px] lg:rounded-[13.06px] border-[0.17px] lg:border-[0.44px] border-[#9194994F] backdrop-blur-[4.9589px] lg:backdrop-blur-0 px-2 lg:px-4 bg-transparent text-white focus:outline-none focus:ring-0 transition-colors text-[7.59px] lg:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: accountName ? "#FFFFFF" : "#666666",
                  }}
                />
              </div>

              {/* Bank Name */}
              <div className="w-full md:w-auto">
                <label
                  className="block mb-2 text-[7.59px] md:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  Bank Name:
                </label>
                <input
                  type="text"
                  placeholder="First bank"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full lg:w-[447px] h-[25.0581px] lg:h-[66px] rounded-[4.96px] lg:rounded-[13.06px] border-[0.17px] lg:border-[0.44px] border-[#9194994F] backdrop-blur-[4.9589px] lg:backdrop-blur-0 px-2 lg:px-4 bg-transparent text-white focus:outline-none focus:ring-0 transition-colors text-[7.59px] lg:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: bankName ? "#FFFFFF" : "#666666",
                  }}
                />
              </div>
            </div>

            {/* Row 2: Bank Name and Amount */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 lg:gap-y-6 mb-6 lg:mb-8 lg:max-w-[926px] px-3 lg:px-0 w-full">
              {/* Bank Name */}
              <div className="w-full md:w-auto">
                <label
                  className="block mb-2 text-[7.59px] md:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  Bank Name:
                </label>
                <input
                  type="text"
                  placeholder="First bank"
                  value={bankName2}
                  onChange={(e) => setBankName2(e.target.value)}
                  className="w-full lg:w-[447px] h-[25.0581px] lg:h-[66px] rounded-[4.96px] lg:rounded-[13.06px] border-[0.17px] lg:border-[0.44px] border-[#9194994F] backdrop-blur-[4.9589px] lg:backdrop-blur-0 px-2 lg:px-4 bg-transparent text-white focus:outline-none focus:ring-0 transition-colors text-[7.59px] lg:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: bankName2 ? "#FFFFFF" : "#666666",
                  }}
                />
              </div>

              {/* Amount */}
              <div className="w-full md:w-auto">
                <label
                  className="block mb-2 text-[7.59px] md:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  Amount:
                </label>
                <input
                  type="text"
                  placeholder="Input amount you intend to cash out..."
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full lg:w-[447px] h-[25.0581px] lg:h-[66px] rounded-[4.96px] lg:rounded-[13.06px] border-[0.17px] lg:border-[0.44px] border-[#9194994F] backdrop-blur-[4.9589px] lg:backdrop-blur-0 px-2 lg:px-4 bg-transparent text-white focus:outline-none focus:ring-0 transition-colors text-[7.59px] lg:text-[20px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: amount ? "#FFFFFF" : "#666666",
                  }}
                />
              </div>
            </div>

            {/* Withdraw Button */}
            <button
              onClick={handleWithdraw}
              className="transition-opacity hover:opacity-90 font-medium flex items-center justify-center w-full lg:w-full h-[23.9191px] lg:h-[63px] rounded-[2.95px] lg:rounded-[7.78px] text-[7.59px] lg:text-[20px] mx-auto lg:mx-0 lg:max-w-[926px]"
              style={{
                background: "#FFFFFF",
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#131517",
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
