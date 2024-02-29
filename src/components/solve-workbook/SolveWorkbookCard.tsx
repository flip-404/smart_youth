type SolveWorkbookCard = {
  handleModalOpen: () => void;
};

export default function SolveWorkbookCard({
  handleModalOpen,
}: SolveWorkbookCard) {
  return (
    <div className="flex-1 flex flex-col gap-[29px]">
      <div
        onClick={handleModalOpen}
        className="px-[30px] py-[40px] text-[26px] font-[500] bg-[#D9D9D9] rounded-[20px] hover:cursor-pointer"
      >
        요즘 대세 AI 예비 <br /> 개발자에게
        <br /> 물어보는 질문 TOP 10
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-[#CCCCCC] bg-opacity-40 px-[20px] py-[5px] text-[18px] font-[600] rounded-[20px]">
          Front
        </div>
        <div className="text-[#313131] text-[18px] font-[400]">24-01-25</div>
      </div>
    </div>
  );
}
