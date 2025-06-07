import { Poppins, Inter } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
})

const inter = Inter({
    weight: "600",
    subsets: ["latin"],
})

export default function TestimonialCard({responseTestimonial} : {responseTestimonial : string}) {
    return (
        <main className="sm:w-56 w-44 sm:h-56 h-44 rounded-md shadow-lg flex flex-col px-2 bg-white hover:scale-105 transition-all duration-300 ease-in-out">
            <section className="w-full h-1/2 border-b border-slate-200 flex items-center justify-center">
                <h1 className={`${poppins.className} sm:text-lg text-base`}>{responseTestimonial}</h1>
            </section>
            <section className="w-full h-1/2 flex items-center justify-center px-2">
                <div className="w-1/2 h-full flex items-center justify-start">
                    <Image
                        src={"/jumb-1.jpg"}
                        alt="JokiinAja"
                        width={500}
                        height={500}
                        className="w-16 h-16 object-cover rounded-full"
                    />
                </div>
                <h1 className={`${inter.className} w-1/2 h-full flex items-center justify-center sm:text-lg text-sm text-slate-400`}>People</h1>
            </section>
        </main>
    )
}