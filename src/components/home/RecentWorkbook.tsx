import WorkbookListItem from "../WorkbookListItem";

export default function RecentWorkbook() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex justify-between w-full">
        <p className="text-[32px] font-[700]">실시간 등록된 면접 질문들📝</p>
        <p>더보기</p>
      </div>
      <div className="flex flex-col gap-4">
        <WorkbookListItem />
        <WorkbookListItem />
        <WorkbookListItem />
        <WorkbookListItem />
      </div>
    </div>
  );
}
