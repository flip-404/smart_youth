import WorkbookCard from "../WorkbookCard";

export default function TrendyWorkbook() {
  return (
    <>
      <div className="flex justify-between w-full mt-28">
        <p className="text-2xl font-semibold">
          작년 하반기 면접 질문 트렌드를 모아왔어요🔥
        </p>
        <p>더보기</p>
      </div>
      <div className="flex gap-2 mt-10 overflow-x-scroll">
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
      </div>
    </>
  );
}
