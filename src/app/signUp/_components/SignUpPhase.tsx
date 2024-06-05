import cls from "@/utils/cls";
import SignUpLineIcon from "/public/signUp/SignUpLineIcon.svg";
import SignUpPhaseCheckIcon from "/public/auth/SignUpPhaseCheckIcon.svg";

export const SignUpPhase = ({ phase }: { phase: number }) => {
  return (
    <div className="flex justify-center mt-[2rem]">
      <div className="flex flex-col items-center gap-[4px]">
        <div
          className={cls(
            phase === 1 ? "text-[#ffffff] bg-[#623AFF]" : "",
            phase > 1 ? "bg-[#B09DFF]" : "",
            phase !== 1 && phase <= 1
              ? "border border-[#D0D5DD] text-[600]"
              : "",
            "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full text-[#98A2B3] "
          )}
        >
          {phase > 1 ? <SignUpPhaseCheckIcon /> : "01"}
        </div>

        <div
          className={cls(
            phase === 1 ? "text-[#2F07CC]" : "text-[#667085]",
            " flex justify-center text-[1rem] font-[400] leading-[1.5rem]"
          )}
        >
          계정 정보
        </div>
      </div>
      <SignUpLineIcon />
      <div className="flex flex-col items-center gap-[4px]">
        <div
          className={cls(
            phase === 2 ? "text-[#ffffff] bg-[#623AFF]" : "",
            phase > 2 ? "bg-[#B09DFF]" : "",
            phase !== 2 && phase <= 2
              ? "border border-[#D0D5DD] text-[600]"
              : "",
            "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full text-[#98A2B3] "
          )}
        >
          {phase > 2 ? <SignUpPhaseCheckIcon /> : "02"}
        </div>

        <div
          className={cls(
            phase === 2 ? "text-[#2F07CC]" : "text-[#667085]",
            " flex justify-center text-[1rem] font-[400] leading-[1.5rem]"
          )}
        >
          직무
        </div>
      </div>
      <SignUpLineIcon />
      <div className="flex flex-col items-center gap-[4px]">
        <div
          className={cls(
            phase === 3 ? "text-[#ffffff] bg-[#623AFF]" : "",
            phase > 3 ? "bg-[#B09DFF]" : "",
            phase !== 3 && phase <= 3
              ? "border border-[#D0D5DD] text-[600]"
              : "",
            "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full text-[#98A2B3] "
          )}
        >
          03
        </div>

        <div
          className={cls(
            phase === 3 ? "text-[#2F07CC]" : "text-[#667085]",
            " flex justify-center text-[1rem] font-[400] leading-[1.5rem]"
          )}
        >
          프로필
        </div>
      </div>
    </div>
  );
};
