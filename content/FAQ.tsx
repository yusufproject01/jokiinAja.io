"use client";

import AccordionFAQ from "@/components/AccordionsFAQ";
import { TextCardFAQ } from "@/lib/datas/FAQ";
import { TitleCenter } from "@/Typography/TitleCenter";


export default function FAQ() {
  return (
    <main className="bg-(--bgPage) w-full h-auto sm:py-10 py-4 flex flex-col justify-center items-center gap-4 px-2">
      <TitleCenter TitleContent="FAQ" />
      <section className="max-w-6xl w-full h-auto py-2 px-2 grid sm:grid-cols-2 gap-2">
        {TextCardFAQ.map((item) => (
            <AccordionFAQ key={item.id} TitleQuestion={item.TitleQuestion} Answer={item.Answer} />
        ))}
      </section>
    </main>
  );
}
