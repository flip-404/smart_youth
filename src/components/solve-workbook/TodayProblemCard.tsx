// import { CircleIcon } from "../../../public/svgs";

export default function TodayProblemCard() {
  return (
    <div className="flex flex-col gap-21px bg-D9D9D9 bg-opacity-40 rounded-2xl px-40px py-30px">
      <div className="flex items-center gap-21px">
        {/* <CircleIcon /> */}
        <p className="text-[28px] font-[600]">
          브라우저 렌더링 원리에 대해서 설명해보세요.
        </p>
      </div>
      <div className="flex items-center gap-21px">
        <input
          type="text"
          placeholder="답변을 입력해주세요."
          className="flex-1 input--reset py-[10px] px-[20px] rounded-[10px] placeholder:text-[24px] placeholder:font-[400] text-[24px] font-[400]"
        />
        <button className="button--reset bg-white py-[10px] px-[50px] rounded-[10px] text-[24px] font-[600]">
          완료
        </button>
      </div>
    </div>
  );
}
