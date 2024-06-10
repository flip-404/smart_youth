"use client";

import Link from "next/link";
import NavLink from "./home/NavLink/NavLink";
import HomeIcon from "/public/sidebar/HomeIcon.svg";
import CreateIcon from "/public/sidebar/CreateIcon.svg";
import SolveIcon from "/public/sidebar/SolveIcon.svg";
import FoldIcon from "/public/sidebar/FoldIcon.svg";
import OpenIcon from "/public/sidebar/OpenIcon.svg";
import MyActivityIcon from "/public/sidebar/MyActivityIcon.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function SideBar() {
  const pathName = usePathname();
  const [isFolded, setIsFolded] = useState(false);
  const SessionData = useSession();
  console.log("SessionData:", SessionData);

  const [isVisible, setIsVisible] = useState(
    !(pathName === "/signIn" || pathName === "/signUp")
  );

  useEffect(() => {
    setIsVisible(!(pathName === "/signIn" || pathName === "/signUp"));
  }, [pathName, isVisible]);

  return (
    isVisible && (
      <div className="z-[9] pt-[3rem] fixed left-0 flex flex-col justify-between w-[12.5rem] h-screen bg-white sidebar-shadow items-center">
        {isFolded ? (
          <OpenIcon className="cursor-pointer absolute top-[50%] left-[11.5rem] transform translate-y-[-50%]" />
        ) : (
          <FoldIcon className="cursor-pointer absolute top-[50%] left-[11.5rem] transform translate-y-[-50%]" />
        )}
        <div className="flex flex-col mt-[3rem] gap-[0.75rem] w-full">
          <NavLink
            href="/"
            imgSrc={
              <HomeIcon fill={pathName === "/" ? "#623AFF" : "transparent"} />
            }
            alt="홈 링크 아이콘"
            label="홈"
            isFolded={isFolded}
          />
          <NavLink
            href="/create-workbook"
            imgSrc={
              <CreateIcon
                fill={
                  pathName === "/create-workbook" ? "#623AFF" : "transparent"
                }
              />
            }
            alt="문제 만들기 아이콘"
            label="문제 만들기"
            isFolded={isFolded}
          />
          <NavLink
            href="/solve-workbook"
            imgSrc={
              <SolveIcon
                fill={
                  pathName === "/solve-workbook" ? "#623AFF" : "transparent"
                }
              />
            }
            alt="문제 풀기 아이콘"
            label="문제 풀기"
            isFolded={isFolded}
          />
          <NavLink
            href="/my"
            imgSrc={
              <MyActivityIcon
                fill={pathName === "/my" ? "#623AFF" : "transparent"}
              />
            }
            alt="마이페이지 아이콘"
            label="내 활동"
            isFolded={isFolded}
          />
        </div>
        <div className="flex flex-col mb-[4.5rem] gap-[0.75rem]">
          {SessionData ? (
            <button
              className="rounded-[4px] flex justify-center items-center bg-[#F1EEFF] w-[8.5rem] h-[2rem] text-[#2F07CC] text-[1.1rem] font-[600] reading-[1.3rem]"
              onClick={() => signOut()}
            >
              로그아웃
            </button>
          ) : (
            <>
              <Link
                href="/signIn"
                className="rounded-[4px] flex justify-center items-center bg-[#F9FAFB] w-[8.5rem] h-[2rem] text-[#1D2939] text-[1.1rem] font-[600] reading-[1.3rem]"
              >
                로그인
              </Link>
              <Link
                href="/signUp"
                className="rounded-[4px] flex justify-center items-center bg-[#F1EEFF] w-[8.5rem] h-[2rem] text-[#2F07CC] text-[1.1rem] font-[600] reading-[1.3rem]"
              >
                5초 회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    )
  );
}
