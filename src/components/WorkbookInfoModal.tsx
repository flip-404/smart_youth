import { useRouter } from "next/navigation";
import { CircleBookmarkIcon } from "../../public/svgs";

type WorkbookInfoModalProps = {
  onClose: () => void;
};

export default function WorkbookInfoModal({ onClose }: WorkbookInfoModalProps) {
  const router = useRouter();

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed bg-black bg-opacity-30 top-0 left-0 w-screen h-screen px-[470px] py-[250px] z-[11]"
    >
      <div className="relative flex flex-col w-full bg-white rounded-[24px] gap-[30px]">
        <div className="absolute w-full flex items-center justify-center top-[129.5px] ">
          <div className="bg-white text-[18px] font-[600] py-[6px] px-[22px] rounded-[99px] border border-[#E4E7EC] text-[#667085]">
            프론트
          </div>
        </div>

        <div className="bg-opacity-40 bg-[#9BEDFF] h-[150px] rounded-t-[24px] overflow-hidden"></div>
        <div className="mt-[20px] flex flex-col gap-[16px]">
          <p className="text-center text-[32px] font-[700] text-[#101828]">
            요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10{" "}
          </p>
          <p className="text-center text-[20px] font-[400] text-[#98A2B3]">
            예비 개발자로서 꼭 알아야 하는 질문들입니다.
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="px-[20px] text-[20px] font-[500] border-r">
            김땡땡
          </div>
          <div className="px-[20px] text-[20px] font-[500] border-r">
            24-02-18
          </div>
          <div className="px-[20px] text-[20px] font-[500]">10문제</div>
        </div>
        <div className="flex justify-between px-[64px] pb-[40px]">
          <CircleBookmarkIcon />
          <div className="flex gap-[20px]">
            <button
              onClick={() => router.push("/solve-workbook/detail")}
              className="py-[12px] px-[36px] text-[24px] font-[600] bg-[#E4E7EC] border border-[#98A2B3] rounded-[12px]"
            >
              순서대로 풀기
            </button>
            <button
              onClick={() => router.push("/solve-workbook/detail")}
              className="py-[12px] px-[36px] text-[24px] font-[600] bg-[#E4E7EC] border border-[#98A2B3] rounded-[12px]"
            >
              무작위로 풀기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
