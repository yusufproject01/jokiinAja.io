import Image from "next/image";
import { Inter} from "next/font/google";

const adlamDisplay = Inter({
    weight: "400",
    subsets: ["latin"],
});

export default async function LayananCard({text} : {text : string}) {
    return(
        <main className="sm:w-[270px] w-[150px] sm:h-[270px] h-[150px] flex flex-col shadow-lg overflow-hidden rounded-sm hover:scale-105 transition-all duration-300 ease-in-out">
            <section className="w-full h-2/3 border-b border-slate-200 rounded-b-sm overflow-hidden">
                <Image
                    src={"/jumb-1.jpg"}
                    alt="JokiinAja"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </section>
            <section className={`${adlamDisplay.className} w-full h-1/3 flex justify-center items-center sm:text-2xl text-lg`}>{text}</section>
        </main>
    )
}