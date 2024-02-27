import WorkbookCard from "../WorkbookCard";

export default function TrendyWorkbook() {
  return (
    <div className="flex flex-col gap-[55px]">
      <div className="flex justify-between w-full mt-28 gap-[55px]">
        <p className="text-[32px] font-[700]">
          <span className="text-[#839EFF]">유진 청년님!</span> 가장 인기있는
          면접 질문 트렌드를 모아왔어요🔥
        </p>
      </div>
      <div className="flex gap-[20px]">
        <WorkbookCard />
        <WorkbookCard />
        <WorkbookCard />
      </div>
    </div>
  );
}
