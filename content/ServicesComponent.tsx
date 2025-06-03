import { ADLaM_Display } from "next/font/google";
import LayananCard from "../components/cards/LayananCard";
import { TextCardLayanan } from "@/lib/datas/layanan";
import BtnLayanan from "../components/buttons/Btn-Layanan";
import { TitleCenter } from "@/Typography/TitleCenter";

const adlamDisplay = ADLaM_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function ServicesComponent() {
  return (
    <main className="w-full h-auto py-12 bg-(--bgPage) flex flex-col justify-center items-center">
      <section className="w-full flex justify-center items-center">
        <TitleCenter TitleContent="Layanan" BrandTitle="JokiinAja" />
      </section>
      <section className="w-full h-auto grid grid-cols-4 justify-items-center gap-4 pt-8 pb-20">
        {TextCardLayanan.map((item, index) => (
          <LayananCard key={index} text={item.text} />
        ))}
      </section>
      <BtnLayanan/>
    </main>
  );
}
