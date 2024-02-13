import WorkbookListItem from "../WorkbookListItem";

export default function RecentWorkbook() {
  return (
    <>
      <div className="flex justify-between w-full">
        <p className="text-2xl font-semibold">실시간 등록된 문제들</p>
        <p>더보기</p>
      </div>
      <div className="flex flex-col gap-4">
        <WorkbookListItem />
        <WorkbookListItem />
        <WorkbookListItem />
        <WorkbookListItem />
      </div>
    </>
  );
}
