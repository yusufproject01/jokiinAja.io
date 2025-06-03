"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const disableLayout = pathname === "/login" || pathname === "/register"
  
  
  return (
    <>
      {!disableLayout && <Navbar />}
        {children}
      {!disableLayout && <Footer />}
    </>
  );
}
