import { useEffect } from "react";
import { SelectedJob } from "../page";
import cls from "@/utils/cls";

type SecondPhaseFormProps = {
  movePrevPhase: () => void;
  moveNextPhase: () => void;
  isValid: boolean;
  selectedJob: SelectedJob;
  changeSelectedJob: (job: SelectedJob) => void;
};

type JobCards = {
  job: SelectedJob;
  id: number;
};

export const SecondPhaseForm = ({
  movePrevPhase,
  moveNextPhase,
  isValid,
  selectedJob,
  changeSelectedJob,
}: SecondPhaseFormProps) => {
  const isJobSelected = selectedJob !== null;
  console.log("selectedJob", selectedJob);
  const jobCards: Array<JobCards> = [
    { job: "frontend", id: 1 },
    { job: "backend", id: 2 },
    { job: "devops", id: 3 },
    { job: "ai", id: 4 },
  ];

  return (
    <div>
      <div className="flex py-[3.6rem] gap-[1.25rem]">
        {jobCards.map((card) => (
          <button
            key={card.id}
            className={cls(
              selectedJob === card.job
                ? "border-[#466BEF]"
                : "border-[transparent]",
              "rounded-[1rem] overflow-hidden signUpJobCard-shadow border-[2px]"
            )}
            onClick={() => changeSelectedJob(card.job)}
          >
            <div className="w-[14.5rem] h-[11rem] bg-[#F1EEFF]"></div>
            <div className="w-[14.5rem] h-[4rem] justify-center items-center flex text-[1.5rem] font-[400] leading-[1.5rem] text-[#101828]">
              {card.job}
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-[1.25rem] justify-center">
        <button
          className="w-[19.75rem] h-[3rem] bg-[#F9FAFB] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          onClick={movePrevPhase}
        >
          이전
        </button>
        <button
          onClick={isJobSelected ? moveNextPhase : undefined}
          className={cls(
            isJobSelected
              ? "bg-[#3A09FF] text-[#FFFFFF]"
              : "bg-[#E4E7EC] text-[#667085]",
            "w-[19.75rem] h-[3rem] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] rounded-[4px]"
          )}
          disabled={!isJobSelected}
        >
          다음
        </button>
      </div>
    </div>
  );
};
