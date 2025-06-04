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
  const disableLayout = pathname === "/sign-in" || pathname === "/sign-in/factor-one" || pathname === "/sign-up" || pathname === "/sign-up/verify-email-address";
  
  
  return (
    <>
      {!disableLayout && <Navbar />}
        {children}
      {!disableLayout && <Footer />}
    </>
  );
}
