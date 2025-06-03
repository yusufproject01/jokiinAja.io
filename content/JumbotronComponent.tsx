import Image from "next/image";
import { ADLaM_Display, Inter, Poppins } from "next/font/google";
import { TextCardJumbotron } from "@/lib/datas/jumbotron";

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    weight: "400",
    subsets: ["latin"],
});

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export default function JumbotronComponent() {

    return (
        <main className="w-full h-screen pt-8 flex bg-gradient-to-r from-(--white) to-(--tertiaryRed)">
            <section className="w-1/2 h-full flex flex-col justify-center items-center">
            {TextCardJumbotron.map((item, index) => (
                <div key={index} className="w-[26rem] h-full flex flex-col items-center justify-center gap-4">
                    <h1 className={`${inter.className} gap-2 flex flex-col justify-center font-bold text-6xl`}>
                        <span>{item.text1}</span>
                        <span>{item.text2}</span>
                        <span className={`${adlamDisplay.className} hover:text-(--secondaryRed) cursor-pointer`}>{item.text3}</span>
                    </h1>
                    <p className={`${poppins.className} flex gap-2 text-lg text-justify`}>
                        {item.descriptionText}
                    </p>
                    <div className={`${poppins.className} w-full flex items-center justify-between`}>
                        <button className="flex justify-center items-center bg-(--secondaryRed) hover:bg-(--tertiaryRed) 
                        text-white font-bold w-44 h-12 py-4 px-6 cursor-pointer rounded text-base">
                            Order
                        </button>
                        <button className="flex justify-center items-center border border-(--secondaryRed) hover:bg-(--secondaryRed) 
                        hover:text-white text-(--secondaryRed) font-bold w-44 h-12 py-4 px-6 cursor-pointer rounded text-base">
                            Lihat Layanan
                        </button>
                    </div>
                </div>
            ))}
            </section>
            <section className="w-1/2 h-full flex justify-center items-center overflow-hidden">
                <Image
                    src={"/foto-1.png"}
                    alt="JokiinAja"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover translate-y-12 scale-95"
                />
            </section>
        </main>
    )
}