import TodayProblem from "@/components/solve-workbook/TodayProblem";
import WorkbookListView from "./WorkbookListView";

export default function FirstSection() {
  return (
    <div className="w-full px-[80px] pt-[90px] pb-90px flex flex-col gap-[130px]">
      <TodayProblem />
      <WorkbookListView />
    </div>
  );
}
