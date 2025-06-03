import BrandFont from "@/Typography/BrandFont"
import { Inter, Poppins } from "next/font/google"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const inter = Inter({
    weight: "400",
    subsets: ["latin"],
})

const poppins = Poppins({
    weight: "600",
    subsets: ["latin"],
})

export default function Footer() {
    return (
        <main className="w-full h-[80vh] flex items-center justify-center p-4 pt-8 border-t-2 border-slate-200">
            <section className="w-1/3 h-full flex flex-col justify-center items-center">
                <BrandFont/>
            </section>
            <section className="w-1/3 h-full flex flex-col justify-center items-center gap-3">
                <h1 className={`${poppins.className} text-xl w-36 flex flex-col items-start justify-center`}>Menu</h1>
                <ul className="w-36 flex flex-col items-start justify-center gap-1">
                    <li>
                        <Link href={"/"} className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/layanan"} className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>Layanan</Link>
                    </li>
                    <li>
                        <Link href={"/order"} className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>Order</Link>
                    </li>
                    <li>
                        <Link href={"/faq"} className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"/syaratKetentuan"} className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>Syarat & Ketentuan</Link>
                    </li>
                </ul>
            </section>
            <section className="w-1/3 h-full flex flex-col justify-center items-center gap-2">
                <h1 className={`${poppins.className} text-xl w-36 flex flex-col items-start justify-center`}>Media Social :</h1>
                <ul className="w-44 flex flex-col items-start justify-center gap-2">
                    <li>
                        <Link href={'https://www.instagram.com/bambinaa_26/'} className="flex gap-2">
                            <FaInstagram size={20}/>
                            <p className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>@JokiinAja</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://wa.link/3g1oh9'} className="flex gap-2">
                            <FaWhatsapp size={20}/>
                            <p className={`${inter.className} text-sm cursor-pointer hover:text-(--secondaryRed)`}>+628123123123</p>
                        </Link>
                    </li>
                    <li>
                        <h1 className="flex gap-2">
                            <SiGmail size={20}/>
                            <p className={`${inter.className} text-sm hover:text-(--secondaryRed)`}>jokiinAja@gmail.com</p>
                        </h1>
                    </li>
                </ul>
            </section>
        </main>
    )
}