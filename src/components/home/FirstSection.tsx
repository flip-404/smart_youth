import Link from "next/link";

export default function FirstSection() {
  return (
    <div className="min-w-[1024px] w-full px-[80px] pb-[88px] gap-[65px] flex flex-col bg-[#F9FAFE] ">
      <div className="flex w-full justify-between pt-[60px] pb-[32px]">
        <div className="flex-1">
          <p className="text-[32px] font-[400] text-6F6F6F">
            <span className="text-[#839EFF]">똑똑한 유진 청년</span>,
            안녕하세요?
          </p>
          <p className="text-[48px] font-[700] text-2D2D2D">
            오늘도 함께 화이팅해요!
          </p>
        </div>
        <div className="flex flex-1 items-center">
          <div className="flex items-center flex-1 mt-[52px] p-[12px] gap-26px rounded-full bg-white">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7078 27.7925L22.449 21.535C24.2631 19.3572 25.1676 16.5638 24.9746 13.736C24.7815 10.9081 23.5057 8.26361 21.4125 6.35251C19.3193 4.4414 16.5698 3.41086 13.7362 3.47526C10.9025 3.53966 8.20274 4.69404 6.19851 6.69827C4.19429 8.70249 3.0399 11.4023 2.9755 14.2359C2.9111 17.0696 3.94164 19.819 5.85275 21.9122C7.76385 24.0054 10.4084 25.2813 13.2362 25.4743C16.064 25.6674 18.8574 24.7628 21.0353 22.9488L27.2928 29.2075C27.3857 29.3005 27.496 29.3742 27.6174 29.4244C27.7388 29.4747 27.8689 29.5006 28.0003 29.5006C28.1317 29.5006 28.2618 29.4747 28.3832 29.4244C28.5046 29.3742 28.6149 29.3005 28.7078 29.2075C28.8007 29.1146 28.8744 29.0043 28.9247 28.8829C28.975 28.7615 29.0008 28.6314 29.0008 28.5C29.0008 28.3686 28.975 28.2385 28.9247 28.1171C28.8744 27.9958 28.8007 27.8855 28.7078 27.7925ZM5.00029 14.5C5.00029 12.72 5.52813 10.98 6.51706 9.49991C7.50599 8.01987 8.9116 6.86631 10.5561 6.18513C12.2007 5.50394 14.0103 5.32571 15.7561 5.67297C17.5019 6.02024 19.1056 6.87741 20.3642 8.13608C21.6229 9.39475 22.4801 10.9984 22.8274 12.7442C23.1746 14.4901 22.9964 16.2997 22.3152 17.9442C21.634 19.5887 20.4805 20.9943 19.0004 21.9833C17.5204 22.9722 15.7803 23.5 14.0003 23.5C11.6141 23.4974 9.3265 22.5483 7.63925 20.8611C5.95199 19.1738 5.00293 16.8862 5.00029 14.5Z"
                fill="#ABC2FF"
              />
            </svg>
            <input
              className="input--reset flex-1"
              placeholder="2024 상반기 네이버 코딩 테스트 문제"
            ></input>
            <button className="bg-black text-white py-[16px] px-[25px] rounded-full button--reset">
              찾아보기
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-2 h-full w-full gap-[16px]">
        <div className="flex flex-col justify-between flex-1 h-full gap-[12px]">
          <div className="pt-[37px] pl-[34px] pr-[45px] pb-[24px] flex-1 bg-[#E4DFFE] rounded-[24px]">
            <p className="text-[24px] font-[600] text-[#BA8AEB]">
              서비스 소개 | 면접 준비의 시작!
            </p>
            <p className="text-[32px] font-[600]">
              면접 문제를 만들어야하는 이유
            </p>
            <p className="text-[32px] font-[600]">행동 유도 멘트 필요</p>
            <div className="flex justify-end">
              <Link
                className="py-[13px] px-[41px] bg-[#303030] text-[22px] font-[600] text-[#FFFFFF] rounded-[99px]"
                href="/create-workbook"
              >
                문제 만들기
              </Link>
            </div>
          </div>
          <div className="pt-[37px] pl-[34px] pr-[45px] pb-[24px] flex-1 bg-[#9BEDFF] rounded-[24px]">
            <p className="text-[24px] font-[600] text-[#517D7D]">
              서비스 소개 | 면접 준비의 시작!
            </p>
            <p className="text-[32px] font-[600]">실시간으로 업데이트되는</p>
            <p className="text-[32px] font-[600]">문제들 풀어볼까요?</p>
            <div className="flex justify-end">
              <Link
                className="py-[13px] px-[41px] bg-[#303030] text-[22px] font-[600] text-[#FFFFFF] rounded-[99px]"
                href="/solve-workbook"
              >
                면접 질문 풀기
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-[#839EFF] rounded-[24px] pl-[68px] py-[40px]">
          <div className="flex flex-col text-[#FFFFFF]">
            <p className="text-[32px] font-[500]">프론트엔드 신입 기술면접</p>
            <p className="text-[42px] font-[700]">최다 출제 문제집</p>
          </div>
          <div className="flex items-end gap-0 text-[42px] font-[500] text-[#FFFFFF]">
            +20문제
          </div>
        </div>
      </div>
    </div>
  );
}
