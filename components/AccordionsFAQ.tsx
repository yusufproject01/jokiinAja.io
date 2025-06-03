"use client";

import { Inter, Poppins } from "next/font/google";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function AccordionFAQ({
  TitleQuestion,
  Answer,
}: {
  TitleQuestion: string;
  Answer: string;
}) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(!scroll);
  };

  return (
    <button
      onClick={handleScroll}
      className="bg-white max-w-xl w-full h-auto py-2 border border-slate-300 shadow-sm 
        px-4 rounded-sm cursor-pointer flex flex-col items-center justify-center 
        transition-all duration-500 ease-in-out"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className={`${poppins.className} text-base font-bold`}>
          {TitleQuestion}
        </h1>
        {scroll ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
      </div>

      {/* Selalu render jawaban, tapi animasikan dengan height dan opacity */}
      <div
        className={`overflow-hidden w-full transition-all duration-500 ease-in-out 
          ${scroll ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <p
          className={`${inter.className} text-sm text-justify w-full px-2`}
        >
          {Answer}
        </p>
      </div>
    </button>
  );
}
