"use client";

import { ADLaM_Display, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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


export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    
  return (
    <nav className={`${scroll ? "bg-(--secondaryRed) text-white" : "bg-transparent"} transition-all duration-300 ease-in-out w-full h-20 flex items-center justify-between px-16 fixed z-50`}>
      <Link
        href="/"
        className={`${adlamDisplay.className} ${scroll ? "hover:text-white text-slate-50" : "hover:text-(--secondaryRed)"} text-4xl font-bold`}
      >
        JokiinAja
      </Link>
      <ul className={`${inter.className} flex gap-6`}>
        <li>
          <Link
            href="/"
            className={`${scroll ? "hover:text-white text-slate-50" : "text-black hover:text-(--secondaryRed)"} 
            ${pathname === "/" ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm" : "text-black hover:text-(--secondaryRed)"} text-base`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/layanan"
            className={`${scroll ? "hover:text-white text-slate-50" : "text-black hover:text-(--secondaryRed)"} 
            ${pathname === "/layanan" ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm" : "text-black hover:text-(--secondaryRed)"} text-base`}
          >
            Layanan
          </Link>
        </li>
        <li>
          <Link
            href="/order"
            className={`${scroll ? "hover:text-white text-slate-50" : "text-black hover:text-(--secondaryRed)"} 
            ${pathname === "/order" ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm" : "text-black hover:text-(--secondaryRed)"} text-base`}
          >
            Order
          </Link>
        </li>
        <li>
          <Link
            href="/FAQ"
            className={`${scroll ? "hover:text-white text-slate-50" : "text-black hover:text-(--secondaryRed)"} 
            ${pathname === "/FAQ" ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm" : "text-black hover:text-(--secondaryRed)"} text-base`}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/syaratKetentuan"
            className={`${scroll ? "hover:text-white text-slate-50" : "text-black hover:text-(--secondaryRed)"} 
            ${pathname === "/syaratKetentuan" ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm" : "text-black hover:text-(--secondaryRed)"} text-base`}
          >
            Syarat & Ketentuan
          </Link>
        </li>
      </ul>
      <button className={`${poppins.className} ${scroll ? "bg-slate-100 text-(--primaryRed) hover:bg-(--quartenaryRed)" : "bg-(--secondaryRed) text-white hover:bg-(--primaryRed) "} px-6 py-2 rounded-md hover:cursor-pointer`}>
            Hubungi Kami
        </button>
    </nav>
  );
}
