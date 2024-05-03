"use client";

import Link from "next/link";
import cls from "@/utils/cls";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  imgSrc: JSX.Element;
  alt: string;
}

export default function NavLink({ href, label, imgSrc, alt }: NavLinkProps) {
  const pathname = usePathname();
  const [showText, setShowText] = useState(true);

  const handleTransitionEnd = () => {
    setShowText(!showText);
  };

  return (
    <div
      className={cls(
        pathname === "/create-workbook/new"
          ? "flex justify-center items-center w-[80px]"
          : "flex gap-[12px] items-center pl-[72px] w-[280px]",
        "sidebar-transition"
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <Link href={href} className="flex items-center gap-[12px] fill-black">
        {imgSrc}
        {pathname !== "/create-workbook/new" && showText && (
          <p
            className={cls(
              pathname === href
                ? "text-[#101828] text-[1rem] font-[600] leading-[1.5rem]"
                : "text-[#344054] text-[1rem] font-[400] leading-[1.5rem]"
            )}
          >
            {label}
          </p>
        )}
      </Link>
    </div>
  );
}
