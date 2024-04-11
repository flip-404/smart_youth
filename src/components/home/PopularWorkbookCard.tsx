import { ProblemsIcon } from "../../../public/svgs";
import CategoryChip from "../CategoryChip";

export default function PopularWorkbookCard() {
  return (
    <>
      <div className="flex-1 flex-col">
        <div className="flex flex-col justify-between w-full px-[32px] py-[33px] bg-[#CDD8FF] rounded-[20px] gap-[20px]">
          <p className="font-[600] text-[24px]">
            요즘 대세 AI 개발자에게 묻는 질문 TOP 10
          </p>
          <div className="flex gap-[2px]">
            <ProblemsIcon />
            <p>10문제 </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-[6px]">
            <CategoryChip label="공통CS" />
            <CategoryChip label="AI" />
          </div>
          <div className="flex items-center px-[5px] text-[#595959]">
            6일 전
          </div>
        </div>
      </div>
    </>
  );
}
