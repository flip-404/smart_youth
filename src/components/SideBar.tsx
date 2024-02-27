// import { HomeIcon } from "/svgs";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./home/NavLink";

export default function SideBar() {
  // 각 버튼 공통 컴포넌트로 만들고, 버튼만 CSR로 구현한다.
  // text-weight 아직 설정하지 않았음
  // drop-shadow도 몇인지 설정하지 않ㄹ았음
  return (
    <div className="fixed left-0 h-screen w-280px bg-white sidebar-shadow z-[9]">
      <div className="flex flex-col gap-46px pl-[72px] pt-130px">
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
