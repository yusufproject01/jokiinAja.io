import { FaWhatsapp } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    weight: "500",
    subsets: ["latin"],
});

export default function BtnWhatsApp() {
    return (
        <Link href={"https://wa.link/3g1oh9"} className="w-40 h-10 text-white rounded-sm bg-green-700 cursor-pointer hover:brightness-90 flex justify-center items-center">
            <FaWhatsapp size={25} className="mr-2"/>
            <h1 className={`${inter.className} text-sm`}>Hubungi Kami</h1>
        </Link>
    )
}