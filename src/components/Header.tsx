import Link from "next/link";

export default function Header() {
  return (
    <div className="z-[10] fixed top-0 left-0 flex items-center justify-between w-full bg-white h-[3rem] px-[2rem] border-b border-[#C1C1C1]">
      <Link href="/">
        <span className="text-[1rem] font-[800] leading-[1.875rem] text-[#303030] tracking-[-0.022em]">
          똑
        </span>
        <span className="text-[1rem] font-[800] leading-[1.875rem] text-[#3A09FF] tracking-[-0.022em]">
          디
        </span>
      </Link>
      <div>프론트엔드</div>
    </div>
  );
}
