import React from "react";

export default function AboutSection() {
  const learningPoints = [
    "Develop a simple, functional dashboard to visualize insights.",
    "Understand how Artificial Intelligence (AI) is shaping Analytics through practical examples.",
    "Apply storytelling techniques to transform numbers into narratives.",
    "Present data clearly, confidently, and persuasively.",
    "Strengthen public speaking skills to engage any audience.",
  ];

  return (
    <div className="max-w-[680px]">
      <h2 className="text-[26px] leading-none text-white/[0.54] m-0 mb-[18px] font-normal font-[Instrument_Serif]">
        About
      </h2>
      <div className="whitespace-normal break-words">
        <h3 className="font-medium text-[20px] leading-[32px] text-white m-0 mb-5">
          About the Masterclass
        </h3>
        <p className="font-medium text-[19px] leading-[30px] text-white m-0 mb-5 whitespace-normal break-words">
          Perfecting Storytelling With Data is a collaborative masterclass
          <br />
          by Dataleum and Surulere Toastmasters Club designed to bridge
          <br />
          the gap between technical data skills and effective communication.
          <br />
          In today&apos;s workplace, analyzing data is only half the job; being
          able to
          <br />
          translate those insights into compelling stories that drive decisions
          <br />
          is what sets professionals apart.
          <br />
          In this session, participants will learn how to:
        </p>
        <ul className="list-disc pl-7 m-0 mb-2 flex flex-col gap-[2px]">
          {learningPoints.map((text, index) => (
            <li
              key={index}
              className="font-medium text-[19px] leading-[30px] text-white whitespace-normal break-words"
            >
              {text}
            </li>
          ))}
        </ul>
        <p className="font-medium text-[19px] leading-[30px] text-white m-0 whitespace-normal break-words">
          Whether you&apos;re a data professional, or business leader, this
          masterclass will help you move from raw numbers to meaningful
          dialogue.
        </p>
      </div>
    </div>
  );
}
