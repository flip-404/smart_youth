"use client";

import NavLink from "./home/NavLink/NavLink";

export default function SideBar() {
  // 여기부터

  return (
    <div className="fixed left-0 h-screen bg-white sidebar-shadow z-[9]">
      <div className="flex flex-col gap-46px pt-130px">
        <NavLink
          href="/"
          imgSrc="/svgs/home_icon.svg"
          alt="홈 링크 아이콘"
          label="홈"
        />
        <NavLink
          href="/create-workbook"
          imgSrc="/svgs/create_icon.svg"
          alt="문제 만들기 아이콘"
          label="문제 만들기"
        />
        <NavLink
          href="/solve-workbook"
          imgSrc="/svgs/solve_icon.svg"
          alt="문제 풀기 아이콘"
          label="문제 풀기"
        />
        <NavLink
          href="/my"
          imgSrc="/svgs/my_icon.svg"
          alt="마이페이지 아이콘"
          label="My"
        />
      </div>
    </div>
  );
}
