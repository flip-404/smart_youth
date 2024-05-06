"use client";

import Link from "next/link";
import NavLink from "./home/NavLink/NavLink";
import Image from "next/image";
import HomeIcon from "/public/sidebar/HomeIcon.svg";
import CreateIcon from "/public/sidebar/CreateIcon.svg";
import SolveIcon from "/public/sidebar/SolveIcon.svg";
import MyActivityIcon from "/public/sidebar/MyActivityIcon.svg";
import ProfileIcon from "/public/sidebar/ProfileIcon.svg";

export default function SideBar() {
  return (
    <div className="z-[9] pt-[3rem] fixed left-0 flex flex-col justify-between w-[11.25rem] h-screen bg-white sidebar-shadow items-center">
      <div className="flex flex-col mt-[3rem] gap-[2rem]">
        <NavLink
          href="/"
          imgSrc={<HomeIcon />}
          alt="홈 링크 아이콘"
          label="홈"
        />
        <NavLink
          href="/create-workbook"
          imgSrc={<CreateIcon />}
          alt="문제 만들기 아이콘"
          label="문제 만들기"
        />
        <NavLink
          href="/solve-workbook"
          imgSrc={<SolveIcon />}
          alt="문제 풀기 아이콘"
          label="문제 풀기"
        />
        <NavLink
          href="/my"
          imgSrc={<MyActivityIcon />}
          alt="마이페이지 아이콘"
          label="내 활동"
        />
      </div>
      <div className="flex mb-[4.5rem]">
        <Link href="/signIn" className="flex flex-col gap-[8px]">
          <ProfileIcon />
          <p className="text-[#5C5C5C] text-[1rem] font-[600] leading-[1.5rem]">
            회원가입·로그인
          </p>
        </Link>
      </div>
    </div>
  );
}
