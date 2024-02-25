export default function TodayProblem() {
  return (
    <div className="flex flex-col gap-21px mx-123px mt-90px">
      <p>00님, 오늘의 문제에 도전해보세요!</p>
      <div className="flex flex-col gap-21px bg-D9D9D9 rounded-2xl px-40px py-30px">
        <div className="flex items-center gap-21px">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#ffffff" />
          </svg>
          <p>브라우저 렌더링 원리에 대해서 설명해보세요.</p>
        </div>
        <div className="flex items-center gap-21px">
          <input
            type="text"
            placeholder="답변을 입력해주세요."
            className="input--reset w-3/4 py-13px px-[20px] rounded-[20px]"
          />
          <button className="button--reset bg-white py-13px px-20px rounded-[20px]">
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
