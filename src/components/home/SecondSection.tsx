import RecentWorkbook from "./RecentWorkbook";
import TrendyWorkbook from "./TrendyWorkbook";

export default function SecondSection() {
  return (
    <div className="min-w-[1024px] w-full px-[80px] pb-90px flex flex-col gap-[80px] ">
      <TrendyWorkbook />
      <RecentWorkbook />
    </div>
  );
}
