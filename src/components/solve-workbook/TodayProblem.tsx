import TodayProblemCard from "./TodayProblemCard";

export default function TodayProblem() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="text-[32px] font-[700]">
        00님, 오늘의 문제에 도전해보세요!
      </p>
      <div className="px-[40px]">
        <TodayProblemCard />
      </div>
    </div>
  );
}
