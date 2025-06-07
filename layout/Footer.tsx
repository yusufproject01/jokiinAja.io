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
        <main className="w-full sm:h-[80vh] h-50 flex items-center justify-center sm:p-4 p-2 pt-8 border-t-2 border-slate-200">
            <section className="w-1/3 h-full flex flex-col justify-center items-center">
                <BrandFont/>
            </section>
            <section className="w-1/3 h-full flex flex-col justify-center items-center sm:gap-y-3 gap-1">
                <h1 className={`${poppins.className} sm:text-xl text-sm sm:w-36 w-24 flex flex-col items-start justify-center`}>Menu</h1>
                <ul className="sm:w-36 w-24 flex flex-col items-start justify-center sm:gap-y-1 gap-y-0">
                    <li>
                        <Link href={"/"} className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/layanan"} className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>Layanan</Link>
                    </li>
                    <li>
                        <Link href={"/order"} className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>Order</Link>
                    </li>
                    <li>
                        <Link href={"/faq"} className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"/syaratKetentuan"} className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>Syarat & Ketentuan</Link>
                    </li>
                </ul>
            </section>
            <section className="w-1/3 h-full flex flex-col sm:justify-center justify-start items-start sm:gap-y-2 gap-y-1 px-1">
                <h1 className={`${poppins.className} sm:text-xl text-sm w-full flex flex-col items-start justify-center`}>Media Social :</h1>
                <ul className="w-full flex flex-col items-start justify-center gap-2">
                    <li>
                        <Link href={'https://www.instagram.com/bambinaa_26/'} className="flex gap-2">
                            <FaInstagram className="sm:w-6 w-3 h-auto"/>
                            <p className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>@JokiinAja</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://wa.link/3g1oh9'} className="flex gap-2">
                            <FaWhatsapp className="sm:w-6 w-3 h-auto"/>
                            <p className={`${inter.className} sm:text-sm text-xs cursor-pointer hover:text-(--secondaryRed)`}>+628123123123</p>
                        </Link>
                    </li>
                    <li>
                        <h1 className="flex gap-2">
                            <SiGmail className="sm:w-6 w-3 h-auto"/>
                            <p className={`${inter.className} sm:text-sm text-[10px] hover:text-(--secondaryRed)`}>jokiinAja@gmail.com</p>
                        </h1>
                    </li>
                </ul>
            </section>
        </main>
    )
}