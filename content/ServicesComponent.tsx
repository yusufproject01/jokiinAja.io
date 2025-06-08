import LayananCard from "../components/cards/LayananCard";
import { TextCardLayanan } from "@/lib/datas/layanan";
import BtnLayanan from "../components/buttons/Btn-Layanan";
import { TitleCenter } from "@/Typography/TitleCenter";


export default function ServicesComponent() {
  return (
    <main className="w-full h-auto bg-(--bgPage) sm:py-20 py-10 flex flex-col justify-center items-center">
      <section className="w-full flex justify-center items-center">
        <TitleCenter TitleContent="Layanan" BrandTitle="JokiinAja" />
      </section>
      <section className="w-full h-auto grid sm:grid-cols-4 grid-cols-1 justify-items-center sm:gap-x-4 gap-x-0 sm:gap-y-0 gap-y-6 pt-8 sm:pb-20 pb-12 sm:px-0 px-6">
        {TextCardLayanan.slice(0, 4).map((item, index) => (
          <LayananCard key={index} text={item.text} />
        ))}
      </section>
      <BtnLayanan/>
    </main>
  );
}
