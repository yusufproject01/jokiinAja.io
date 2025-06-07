import Image from "next/image";
import { ADLaM_Display, Inter, Poppins } from "next/font/google";
import { TextCardJumbotron } from "@/lib/datas/jumbotron";
import Link from "next/link";

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
        <main className="w-full sm:h-screen h-[28rem] sm:pt-8 pt-0 flex bg-gradient-to-r from-(--white) to-(--tertiaryRed)">
            <section className="sm:w-1/2 w-full h-full flex flex-col justify-center items-center">
            {TextCardJumbotron.map((item, index) => (
                <div key={index} className="sm:w-[26rem] w-[21rem] h-full flex flex-col items-center justify-center gap-4">
                    <h1 className={`${inter.className} gap-2 flex flex-col justify-center font-bold sm:text-6xl text-5xl`}>
                        <span>{item.text1}</span>
                        <span>{item.text2}</span>
                        <span className={`${adlamDisplay.className} hover:text-(--secondaryRed) cursor-pointer`}>{item.text3}</span>
                    </h1>
                    <p className={`${poppins.className} flex gap-2 sm:text-lg text-sm text-justify`}>
                        {item.descriptionText}
                    </p>
                    <div className={`${poppins.className} w-full flex items-center justify-between`}>
                        <Link href="/order" className="flex justify-center items-center bg-(--secondaryRed) hover:bg-(--tertiaryRed) 
                        text-white font-bold sm:w-44 w-36 sm:h-12 h-10 py-4 px-6 cursor-pointer rounded sm:text-base text-xs">
                            Order
                        </Link>
                        <Link href="/layanan" className="flex justify-center items-center border border-(--secondaryRed) hover:bg-(--secondaryRed) 
                        hover:text-white text-(--secondaryRed) font-bold sm:w-44 w-36 sm:h-12 h-10 py-4 px-6 cursor-pointer rounded sm:text-base text-xs">
                            Lihat Layanan
                        </Link>
                    </div>
                </div>
            ))}
            </section>
            <section className="w-1/2 h-full sm:flex hidden justify-center items-center overflow-hidden">
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