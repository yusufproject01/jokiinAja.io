import LayananCard from "@/components/cards/LayananCard";
import { TextCardLayanan } from "@/lib/datas/layanan";
import { TitleCenter } from "@/Typography/TitleCenter";


export default function LayananPage() {
  return (
    <main className="w-full h-auto sm:py-28 py-14 sm:px-0 px-4 bg-(--bgPage) flex flex-col justify-center items-center">
      <section className="w-full flex justify-center items-center">
        <TitleCenter TitleContent="Layanan" BrandTitle="JokiinAja" />
      </section>
      <section className="w-full h-auto grid sm:grid-cols-4 grid-cols-1 justify-items-center sm:gap-x-2 gap-x-0 sm:gap-y-10 gap-y-6 py-6 px-6">
        {TextCardLayanan.map((item, index) => (
          <LayananCard key={index} text={item.text} />
        ))}
      </section>
    </main>
  );
}
