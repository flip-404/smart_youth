import Link from "next/link";

export default function Header() {
  return (
    <div className="z-[10] fixed top-0 left-0 flex items-center justify-between w-full bg-white h-80px px-72px border">
      <Link href="/">로고</Link>
      <div>프론트엔드</div>
    </div>
  );
}
