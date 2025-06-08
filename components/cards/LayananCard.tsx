import Image from "next/image";
import { Inter} from "next/font/google";

const adlamDisplay = Inter({
    weight: "400",
    subsets: ["latin"],
});

export default async function LayananCard({text} : {text : string}) {
    return(
        <main className="sm:w-[270px] w-auto sm:h-auto h-auto flex flex-col shadow-lg overflow-hidden rounded-sm hover:scale-105 transition-all duration-300 ease-in-out">
            <section className="w-full h-2/3 border-b border-slate-200 rounded-b-sm overflow-hidden">
                <Image
                    src={"/jumb-1.jpg"}
                    alt="JokiinAja"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </section>
            <section className={`${adlamDisplay.className} w-full h-auto sm:py-4 py-2 sm:px-4 px-2 flex flex-col justify-center items-center gap-y-2`}>
                <h1 className="sm:text-2xl text-base">{text}</h1>
                <p className="sm:text-sm text-xs text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos Dolor tempora beatae velit.
                </p>
            </section>
        </main>
    )
}