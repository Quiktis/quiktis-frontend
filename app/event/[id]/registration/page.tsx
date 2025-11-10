"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import EventToggle from "../EventToggle";
import { useParams } from "next/navigation";
import CancelDeleteModal from "./CancelDeleteModal";
import { ActionButton } from "../components";

const OnclickRegistrationPage: NextPage = () => {
  const params = useParams();
  const eventId = params?.id as string;
  const [customQuestion, setCustomQuestion] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCancel = () => setIsModalOpen(true);
  const handleCloseCancel = () => setIsModalOpen(false);

  const handleConfirmDelete = () => {
    console.log("Delete confirmed.");
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full mt-40">
        {/* Event Toggle */}
        <div className="mb-8 md:mb-12">
          <EventToggle eventId={eventId} defaultTab="registration" />
        </div>

        {/* Invite & Share */}
        <div className="flex justify-start overflow-x-auto md:overflow-visible mb-[50px]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <ActionButton
              icon="/icons/invite-onclick-guest.svg"
              iconBgColor="rgba(255, 242, 0, 0.5)"
              text="Invite Guest"
              iconAlt="Invite Guest"
            />
            <ActionButton
              icon="/icons/share-onclick-event.svg"
              iconBgColor="rgba(111, 79, 242, 0.14)"
              text="Share Event"
              iconAlt="Share Event"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-white font-inter font-medium text-[28px]">
            Tickets
          </h2>
          <div
            className="p-6 flex flex-col md:flex-row md:items-center md:justify-between 
            gap-4 mt-[30px] rounded-[15px] border-[0.5px] border-[#9194994F] 
            backdrop-blur-[15px] bg-transparent"
          >
            <div className="flex flex-col gap-4">
              <h3
                className="text-white text-[17.59px] md:text-[28px] font-medium 
                leading-[100%] tracking-[-0.05em] font-inter"
              >
                Cards
              </h3>
              <p
                className="text-[#919499] max-w-2xl text-[11px] md:text-[18px] 
                font-medium leading-[100%] tracking-[-0.05em] font-inter"
              >
                Start selling tickets to your events. Major credit and debit
                cards are always accepted
              </p>
              <button
                className="text-[#131517] font-medium transition hover:opacity-80 
                flex items-center justify-center bg-white w-[107.7662px] h-[26.94155px] 
                rounded-[4.28px] md:w-[196px] md:h-[49px] md:rounded-[7.78px] 
                text-[10.26px] md:text-[18.67px] leading-[100%] tracking-[-0.04em] font-inter"
              >
                Get Started
              </button>
            </div>

            <button className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full">
              <Image
                src="/icons/add-icon-registration.svg"
                alt="add"
                width={48}
                height={48}
                className="object-cover"
              />
            </button>
          </div>

          <div
            className="px-4 py-3 flex flex-row items-center justify-between mt-[46px]
            rounded-[9.19px] bg-[#FFFFFF05] border-[0.33px] border-[#91949926] 
            backdrop-blur-[10.33px]"
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-white font-medium text-[18px] md:text-[24px]">
                Event Type
              </span>
              <span className="text-[#707070] font-medium text-[18px] md:text-[24px]">
                Free
              </span>
              <span
                className="flex items-center justify-center rounded-full px-3 py-1 
                md:px-4 md:py-2 bg-[#E4751F1A]"
              >
                <span className="text-[#FF994A] text-[14px] md:text-[20px]">
                  Approval required
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 md:ml-4">
              <Image
                src="/icons/counting-registration.svg"
                alt="count"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-[#919499] text-[16px] md:text-[20px]">
                0
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-9">
          <h2 className="text-white text-[28px] font-medium">
            Registration Questions
          </h2>

          <div
            className="px-4 py-3 flex flex-wrap gap-3 pt-[17px] pb-[17px] 
            rounded-[9.19px] bg-[#FFFFFF05] border-[0.33px] border-[#91949926] 
            backdrop-blur-[10.33px]"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-[100px] bg-[#6F4FF21A]">
              <Image
                src="/icons/full-name-registration.svg"
                alt="full name"
                width={20}
                height={20}
              />
              <span className="text-[#6F4FF2] text-[20px]">Full Name</span>
            </span>

            <div className="flex items-center px-4 py-2 rounded-[100px] bg-[#FB2E741A]">
              <span className="text-[#FB2E74] text-[20px] mr-10">
                Email Address
              </span>
              <span className="text-[#FFFFFF36] text-[20px]">Required</span>
            </div>

            <span className="flex items-center px-4 py-2 rounded-[100px] bg-[#E4751F1A]">
              <span className="text-[#FF994A] text-[20px]">Phone Number</span>
            </span>
          </div>
        </div>

        <div className="space-y-2 mt-[49px]">
          <h2 className="text-white font-inter font-medium text-[28px] leading-[100%]">
            Custom Question
          </h2>
          <div className="mt-[17px] px-4 py-3 rounded-[9.19px] bg-[#FFFFFF05] border-[0.33px] border-[#91949926] backdrop-blur-[10.33px]">
            <input
              placeholder="Input your questions here...."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="w-full bg-transparent text-white focus:outline-none focus:ring-0 border-0 
                font-inter font-medium text-[20px] leading-[100%] tracking-[-0.05em] 
                placeholder:text-[#919499]"
            />
          </div>
        </div>

        {/* Registration Email */}
        <div className="space-y-2 mt-[46px]">
          <h2 className="text-white font-inter font-medium text-[28px] leading-[100%]">
            Registration email
          </h2>
          <div className="mt-[17px] px-4 py-3 rounded-[9.19px] bg-[#FFFFFF05] border-[0.33px] border-[#91949926] backdrop-blur-[10.33px]">
            <textarea
              value={registrationEmail}
              onChange={(e) => setRegistrationEmail(e.target.value)}
              className="w-full bg-transparent text-white focus:outline-none focus:ring-0 border-0 
                font-inter font-medium text-[20px] leading-[100%] tracking-[-0.05em]
                placeholder:text-[#919499] min-h-[200px]"
            />
          </div>
        </div>

        {/* Cancel Event */}
        <div className="space-y-2 pt-4 mt-[49px]">
          <h2 className="text-white font-inter font-medium text-[28px]">
            Cancel Event
          </h2>
          <p
            className="font-inter font-medium text-[20px] text-[#919499] 
            mt-[7px] w-[95%] leading-[1.15]"
          >
            <span className="block">
              Cancel and permanently delete this event. This operation cannot be
              undone. If there are
            </span>
            <span className="block mt-1.5">
              any registered guests, we will notify them that the event has been
              canceled.
            </span>
          </p>

          <button
            onClick={handleOpenCancel}
            className="inline-flex items-center justify-start gap-4 transition-colors 
              px-6 mt-[55px] w-[312px] h-[77px] rounded-[22.38px] bg-[#FF00000F]"
          >
            <Image
              src="/icons/cancel-registration.svg"
              alt="cancel"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-inter font-medium text-[32px] text-[#FF0000]">
              Cancel Event
            </span>
          </button>
        </div>
      </div>

      <CancelDeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseCancel}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default OnclickRegistrationPage;
