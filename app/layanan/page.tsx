import LayananCard from "@/components/cards/LayananCard";
import { TextCardLayanan } from "@/lib/datas/layanan";
import { ADLaM_Display } from "next/font/google";

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
})

export default function LayananPage() {
  return (
    <main className="w-full h-auto py-28 bg-(--bgPage) flex flex-col justify-center items-center">
      <section className="w-full flex justify-center items-center">
        <h1 className={`${adlamDisplay.className} text-4xl font-bold`}>
          Layanan <span className="text-(--secondaryRed)">JokiinAja</span>
        </h1>
      </section>
      <section className="w-full h-auto grid grid-cols-4 justify-items-center gap-x-2 gap-y-10 py-6">
        {TextCardLayanan.map((item, index) => (
          <LayananCard key={index} text={item.text} />
        ))}
      </section>
    </main>
  );
}
