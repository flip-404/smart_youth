import WorkbookCard from "./WorkbookCard";

export default function MyWorkbook() {
  return (
    <div className="flex flex-col gap-[32px]">
      <p className="text-[32px] font-[700]">
        내가 만든 문제들 <span className="text-[#8D8D8D]">8</span>
      </p>
      <div className="flex flex-wrap gap-[20px]">
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
      </div>
      <div className="flex flex-wrap gap-[20px]">
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
      </div>
    </div>
  );
}
