"use client";

export default function GenderDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent border border-gray-600 rounded p-3 text-white h-[50px] focus:outline-none"
      >
        <option className="bg-black text-white" value="">
          Select
        </option>
        <option className="bg-black text-white" value="male">
          Male
        </option>
        <option className="bg-black text-white" value="female">
          Female
        </option>
        <option className="bg-black text-white" value="non-binary">
          Non-binary
        </option>
        <option className="bg-black text-white" value="other">
          Other
        </option>
        <option className="bg-black text-white" value="prefer-not-to-say">
          Prefer not to say
        </option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center justify-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}
