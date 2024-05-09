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
  isFolded: boolean;
}

export default function NavLink({
  href,
  label,
  imgSrc,
  alt,
  isFolded,
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <div
      className={cls(
        pathname === href
          ? "border-[#2F07CC] border-r-4 rounded-t-[2px] rounded-b-[2px]"
          : "",
        "flex items-center w-full pl-[2rem] pt-[0.75rem] pb-[0.75rem]"
      )}
    >
      <Link
        href={href}
        className={cls("flex items-center gap-[12px] fill-black")}
      >
        {imgSrc}
        {!isFolded && (
          <p
            className={cls(
              pathname === href
                ? "text-[#2F07CC] text-[1rem] font-[600] leading-[1.5rem]"
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
