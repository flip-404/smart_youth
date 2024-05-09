"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState(
    !(pathName === "/signIn" || pathName === "/signUp")
  );

  useEffect(() => {
    setIsVisible(!(pathName === "/signIn" || pathName === "/signUp"));
  }, [pathName, isVisible]);

  return (
    isVisible && (
      <div className="z-[10] fixed top-0 left-0 flex items-center justify-between w-full bg-white h-[3rem] px-[2rem] border-b border-[#C1C1C1]">
        <Link href="/">
          <span className="text-[1rem] font-[800] leading-[1.875rem] text-[#303030] tracking-[-0.022em]">
            똑
          </span>
          <span className="text-[1rem] font-[800] leading-[1.875rem] text-[#3A09FF] tracking-[-0.022em]">
            디
          </span>
        </Link>
        <div className="flex gap-[0.5rem] items-center">
          <div className="flex items-center bg-[#F2F4F7] rounded-[0.75rem] py-[1px] px-[12px] w-[11.25rem] h-[1.5rem] text-[0.75rem] text-[#98A2B3] font-[400] reading-[18px]">
            ex. 2024 코딩테스트 문제
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_133_2328)">
              <path
                d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8037 15.8035L21.0003 21"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_133_2328">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    )
  );
}
