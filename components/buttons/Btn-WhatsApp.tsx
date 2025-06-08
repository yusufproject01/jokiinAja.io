import { FaWhatsapp } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    weight: "500",
    subsets: ["latin"],
});

export default function BtnWhatsApp() {
    return (
        <Link href={"https://wa.link/3g1oh9"} className="sm:w-40 w-36 sm:h-12 h-10 text-white rounded-sm bg-green-700 cursor-pointer hover:brightness-90 flex justify-center items-center">
            <FaWhatsapp size={25} className="mr-2"/>
            <h1 className={`${inter.className} sm:text-sm text-xs`}>Hubungi Kami</h1>
        </Link>
    )
}