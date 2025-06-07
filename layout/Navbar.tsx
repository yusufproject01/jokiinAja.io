"use client";

import { Button } from "@/components/ui/button";
import SmoothLink from "@/features/SmoothLinks";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ADLaM_Display, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  
  const handleMenu = () => {
    setOpen(!open && false);
  };

  return (
    <main className="w-full relative">
      <nav
        className={`${
          scroll ? "bg-(--secondaryRed) text-white" : "bg-transparent"
        } transition-all duration-300 ease-in-out w-full sm:h-20 h-16 flex items-center justify-between sm:px-16 px-6 fixed z-50`}
      >
        <SmoothLink
          to="/"
          className={`${adlamDisplay.className} ${
            scroll
              ? "hover:text-white text-slate-50"
              : "hover:text-(--secondaryRed)"
          } sm:text-4xl text-3xl font-bold transition-all duration-300 ease-in-out`}
        >
          Jokiin
          <span
            className={`${scroll ? "text-white" : "text-(--secondaryRed)"}`}
          >
            Aja
          </span>
        </SmoothLink>

        {/* web */}
        <ul className={`${inter.className} sm:flex hidden gap-6`}>
          <li>
            <SmoothLink
              to="/"
              className={`${
                scroll
                  ? "hover:text-white text-slate-50"
                  : "text-black hover:text-(--secondaryRed)"
              } 
            ${
              pathname === "/"
                ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm"
                : "text-black hover:text-(--secondaryRed)"
            } text-base`}
            >
              Home
            </SmoothLink>
          </li>
          <li>
            <SmoothLink
              to="/layanan"
              className={`${
                scroll
                  ? "hover:text-white text-slate-50"
                  : "text-black hover:text-(--secondaryRed)"
              } 
            ${
              pathname === "/layanan"
                ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm"
                : "text-black hover:text-(--secondaryRed)"
            } text-base`}
            >
              Layanan
            </SmoothLink>
          </li>
          <li>
            <SmoothLink
              to="/order"
              className={`${
                scroll
                  ? "hover:text-white text-slate-50"
                  : "text-black hover:text-(--secondaryRed)"
              } 
            ${
              pathname === "/order"
                ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm"
                : "text-black hover:text-(--secondaryRed)"
            } text-base`}
            >
              Order
            </SmoothLink>
          </li>
          <li>
            <SmoothLink
              to="/faq"
              className={`${
                scroll
                  ? "hover:text-white text-slate-50"
                  : "text-black hover:text-(--secondaryRed)"
              } 
            ${
              pathname === "/faq"
                ? "hover:text-white text-slate-50 bg-(--secondaryRed) font-bold py-2 px-4 rounded-sm"
                : "text-black hover:text-(--secondaryRed)"
            } text-base`}
            >
              FAQ
            </SmoothLink>
          </li>
        </ul>
        <SignedOut>
          <Button
            asChild
            className={`${poppins.className} ${
              scroll
                ? "bg-slate-100 text-(--primaryRed) hover:bg-(--quartenaryRed)"
                : "bg-(--secondaryRed) text-white hover:bg-(--primaryRed) "
            } px-6 py-2 rounded-md hover:cursor-pointer sm:block hidden`}
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>

        {/* Mobile */}
        <section className="sm:hidden block">
          <button
            onClick={handleMenu}
            className={`transition-all duration-400 ease-in-out cursor-pointer
            ${open ? "rotate-90" : "rotate-0"}
            `}
          >
            {open ? (
              <AiOutlineClose size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </button>
        </section>
        {/* Sidebar options */}
        {open && (
          <section
            className={`
            ${scroll ? "bg-white" : "backdrop-blur-md"}
            w-full h-64 flex flex-col justify-center items-center top-16 left-0 absolute border-b shadow-sm transition-all duration-500 ease-in-out gap-4
          `}
          >
            <ul
              className={`${inter.className} sm:hidden flex flex-col justify-center items-center gap-4`}
            >
              <li>
                <SmoothLink
                  to="/"
                  className={`${
                    scroll
                      ? "hover:text-(--secondaryRed) active:text-(--secondaryRed) text-black"
                      : "text-black hover:text-(--secondaryRed) active:text-(--secondaryRed)"
                  } text-xl`}
                >
                  Home
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  to="/layanan"
                  className={`${
                    scroll
                      ? "hover:text-(--secondaryRed) active:text-(--secondaryRed) text-black"
                      : "text-black hover:text-(--secondaryRed) active:text-(--secondaryRed)"
                  } text-xl`}
                >
                  Layanan
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  to="/order"
                  className={`${
                    scroll
                      ? "hover:text-(--secondaryRed) active:text-(--secondaryRed) text-black"
                      : "text-black hover:text-(--secondaryRed) active:text-(--secondaryRed)"
                  } text-xl`}
                >
                  Order
                </SmoothLink>
              </li>
              <li>
                <SmoothLink
                  to="/faq"
                  className={`${
                    scroll
                      ? "hover:text-(--secondaryRed) active:text-(--secondaryRed) text-black"
                      : "text-black hover:text-(--secondaryRed) active:text-(--secondaryRed)"
                  } text-xl`}
                >
                  FAQ
                </SmoothLink>
              </li>
            </ul>
            <SignedOut>
              <Button
                asChild
                className={`${poppins.className} ${
                  scroll
                    ? "bg-slate-100 text-(--primaryRed) hover:bg-(--quartenaryRed)"
                    : "bg-(--secondaryRed) text-white hover:bg-(--primaryRed) "
                } px-6 py-2 rounded-md hover:cursor-pointer sm:hidden block `}
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </SignedOut>
            <SignedIn>
            <UserButton showName/>
          </SignedIn>
          </section>
        )}
        <div className="sm:block hidden">
          <SignedIn>
            <UserButton showName/>
          </SignedIn>
        </div>
      </nav>
    </main>
  );
}
