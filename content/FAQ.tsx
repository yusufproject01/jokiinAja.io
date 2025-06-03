"use client";

import AccordionFAQ from "@/components/AccordionsFAQ";
import { TextCardFAQ } from "@/lib/datas/FAQ";
import { TitleCenter } from "@/Typography/TitleCenter";
import { Inter, Poppins } from "next/font/google";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function FAQ() {
  

  return (
    <main className="bg-(--bgPage) w-full h-auto py-10 flex flex-col justify-center items-center gap-4">
      <TitleCenter TitleContent="FAQ" />
      <section className="max-w-6xl w-full h-auto py-2 px-2 grid grid-cols-2 gap-2">
        {TextCardFAQ.map((item) => (
            <AccordionFAQ key={item.id} TitleQuestion={item.TitleQuestion} Answer={item.Answer} />
        ))}
      </section>
    </main>
  );
}
