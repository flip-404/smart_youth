export default function Step4Card() {
  return (
    <div className="step4-card-shadow flex flex-col justify-center px-[100px] items-center w-full h-full bg-white rounded-[24px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[8px] items-center">
          <div className="flex">
            <div className="flex  rounded-[99px] bg-[#F2F4F7]">
              <div className="bg-transparent flex justify-center items-center px-[22px] py-[4px] rounded-[99px] text-[18px] font-[700] text-[#98A2B3] border border-solid border-transparent">
                비공개
              </div>
              <div className="bg-[#646464] flex justify-center items-center px-[22px] py-[4px] rounded-[99px] text-[18px] font-[700] text-white border border-solid border-[#E4E7EC]">
                전체공개
              </div>
            </div>
          </div>
          <p className="text-[28px] font-[700]">
            모든 준비가 끝났습니다, 이대로 문제집을 발행할까요?&nbsp;
            <span className="text-[#839EFF]">✓</span>
          </p>
        </div>
        <div className="flex gap-[40px] justify-center border-b border-solid border-[#E4E7EC] py-[10px]">
          <div className="flex gap-[30px] items-center">
            <p className="text-[18px] font-[700] text-[#667085]">작성자</p>
            <p className="text-[18px] font-[700] text-[#1D2939]">김개발</p>
          </div>
          <div className="flex gap-[30px] items-center">
            <p className="text-[18px] font-[700] text-[#667085]">작성일</p>
            <p className="text-[18px] font-[700] text-[#1D2939]">24-03-01</p>
          </div>
          <div className="flex gap-[30px] items-center">
            <p className="text-[18px] font-[700] text-[#667085]">문제수</p>
            <p className="text-[18px] font-[700] text-[#1D2939]">10문제</p>
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex w-full gap-[26px]">
            <span className="flex items-center text-[22px] font-[700] text-[#667085]">
              제목
            </span>
            <p className="flex-1 flex items-center px-[18px] py-[12px] w-full text-[22px] font-[600]">
              면접 50번 본 개발자가 알려주는 신입 기술 면접문제
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-1 justify-start w-full gap-[26px] ">
            <span className="flex items-center text-[22px] font-[700] text-[#667085]">
              설명
            </span>
            <p className="px-[14px] py-[4px] flex-1 h-auto text-[18px] font-[500] text-[#344054]">
              AI 개발자라면 관련 면접 문제들로 예비 개발자로서 꼭 알아야 하는
              면접 질문들입니다. AI 개발자라면 관련 면접 문제들로 예비
              개발자로서 꼭 알아야 하는 면접 질문들입니다. AI 개발자라면 관련
              면접 문제들로 예비 개발자로서 꼭 알아야 하는 면접 질문들입니다.
            </p>
          </div>
        </div>
      </div>
      <button className="px-[40px] py-[12px] bg-[#303030] text-white text-[24px] font-[600] rounded-[99px]">
        문제집 발행하기
      </button>
    </div>
  );
}
