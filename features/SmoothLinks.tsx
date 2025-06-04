"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface SmoothLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({ to, className, children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      router.push(to);
    }, 150); // tunggu scroll selesai
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothLink;
