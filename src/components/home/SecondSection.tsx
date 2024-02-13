import RecentWorkbook from "./RecentWorkbook";
import TrendyWorkbook from "./TrendyWorkbook";

export default function SecondSection() {
  return (
    <div className="w-full h-basic-section pl-85px pr-120px pb-90px flex flex-col">
      <TrendyWorkbook />
      <RecentWorkbook />
    </div>
  );
}
