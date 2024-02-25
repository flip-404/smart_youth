"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cls from "@/utils/cls";

interface NavLinkProps {
  href: string;
  label: string;
  imgSrc: string;
  alt: string;
}

export default function NavLink({ href, label, imgSrc, alt }: NavLinkProps) {
  const pathname = usePathname();
  //   이미지 태그는 속성을 바꾸는게 불가능
  // svg만 색상을 바꾸는 것이 가능한데, 나중에 알아보기

  return (
    <Link
      href={href}
      className={cls(
        pathname === href
          ? "text-sideBar-active font-[800]"
          : "text-sideBar-inactive font-[600]",
        "flex gap-[12px] items-center"
      )}
    >
      <Image src={imgSrc} width={24} height={24} alt={alt} />
      {label}
    </Link>
  );
}
