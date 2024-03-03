"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cls from "@/utils/cls";
import { useState } from "react";
import HomeIcon from "./HomeIcon";
import CreateIcon from "./CreateIcon";
import SolveIcon from "./SolveIcon";
import MyIcon from "./MyIcon";

interface NavLinkProps {
  href: string;
  label: string;
  imgSrc: string;
  alt: string;
}

export default function NavLink({ href, label, imgSrc, alt }: NavLinkProps) {
  const pathname = usePathname();
  const [showText, setShowText] = useState(true);

  const handleTransitionEnd = () => {
    setShowText(!showText);
  };

  const renderIcons = () => {
    switch (href) {
      case "/":
        return (
          <HomeIcon pathFill={href === pathname ? "#1D2939" : "#667085"} />
        );
      case "/create-workbook":
        return (
          <CreateIcon pathFill={href === pathname ? "#1D2939" : "#667085"} />
        );
      case "/solve-workbook":
        return (
          <SolveIcon pathFill={href === pathname ? "#1D2939" : "#667085"} />
        );
      case "/my":
        return <MyIcon pathFill={href === pathname ? "#1D2939" : "#667085"} />;
      default:
        return <></>;
    }
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
      <Link href={href} className="flex items-center gap-[12px]">
        {renderIcons()}
        {pathname !== "/create-workbook/new" && showText && (
          <p
            className={cls(
              pathname === href
                ? "text-sideBar-active font-[800]"
                : "text-sideBar-inactive font-[600]"
            )}
          >
            {label}
          </p>
        )}
      </Link>
    </div>
  );
}
