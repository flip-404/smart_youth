import Input from "@/components/auth/Input";
import ConditionCheckIcon from "/public/auth/ConditionCheckIcon.svg";
import type { UseFormRegister } from "react-hook-form";
import { SignUpForm } from "./page";
import type { SelectedJob } from "./page";
import cls from "@/utils/cls";

type FirstPhaseFormProps = {
  register: UseFormRegister<SignUpForm>;
  moveNextPhase: () => void;
};

export const FirstPhaseForm = ({
  register,
  moveNextPhase,
}: FirstPhaseFormProps) => {
  return (
    <div className="flex flex-col w-[40.75rem] gap-[1.75rem] items-center">
      <Input
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        register={register("email", {
          required: "이메일을 입력해 주세요",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "이메일의 형식에 맞게 입력해 주세요",
          },
        })}
      />
      <div className="flex flex-col w-full gap-[0.5rem]">
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          register={register("password")}
        />
        <div className="flex gap-[1.25rem]">
          <ConditionSign text="영문" state="default" />
          <ConditionSign text="숫자" state="default" />
          <ConditionSign text="특수문자" state="default" />
          <ConditionSign text="8~15자" state="default" />
        </div>
      </div>

      <Input
        type="passwordCheck"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        register={register("passwordCheck")}
      />
      <button
        className="w-[30rem] flex justify-center bg-[#E4E7EC] rounded-[0.25rem] py-[0.75rem] px-[1.5rem] text-[1rem] font-[600] leading-[1.5rem]"
        onClick={moveNextPhase}
      >
        다음
      </button>
    </div>
  );
};

type SecondPhaseFormProps = {
  movePrevPhase: () => void;
  moveNextPhase: () => void;
  selectedJob: SelectedJob;
  changeSelectedJob: (job: "frontend" | "backend" | "devops" | "ai") => void;
};

export const SecondPhaseForm = ({
  movePrevPhase,
  moveNextPhase,
  selectedJob,
  changeSelectedJob,
}: SecondPhaseFormProps) => {
  return (
    <div>
      {" "}
      <div className="flex py-[3.6rem] gap-[1.25rem]">
        <button
          className={cls(
            selectedJob === "frontend"
              ? "border-[#466BEF]"
              : "border-[transparent]",
            "rounded-[1rem] overflow-hidden signUpJobCard-shadow border-[2px]"
          )}
          onClick={() => changeSelectedJob("frontend")}
        >
          <div className="w-[14.5rem] h-[11rem] bg-[#F1EEFF]"></div>
          <div className="w-[14.5rem] h-[4rem] justify-center items-center flex text-[1.5rem] font-[400] leading-[1.5rem] text-[#101828]">
            프론트엔드
          </div>
        </button>
        <button
          className={cls(
            selectedJob === "backend"
              ? "border-[#466BEF]"
              : "border-[transparent]",
            "rounded-[1rem] overflow-hidden signUpJobCard-shadow border-[2px]"
          )}
          onClick={() => changeSelectedJob("backend")}
        >
          <div className="w-[14.5rem] h-[11rem] bg-[#F1EEFF]"></div>
          <div className="w-[14.5rem] h-[4rem] justify-center items-center flex text-[1.5rem] font-[400] leading-[1.5rem] text-[#101828]">
            백엔드
          </div>
        </button>
        <button
          className={cls(
            selectedJob === "devops"
              ? "border-[#466BEF]"
              : "border-[transparent]",
            "rounded-[1rem] overflow-hidden signUpJobCard-shadow border-[2px]"
          )}
          onClick={() => changeSelectedJob("devops")}
        >
          <div className="w-[14.5rem] h-[11rem] bg-[#F1EEFF]"></div>
          <div className="w-[14.5rem] h-[4rem] justify-center items-center flex text-[1.5rem] font-[400] leading-[1.5rem] text-[#101828]">
            DevOps
          </div>
        </button>
        <button
          className={cls(
            selectedJob === "ai" ? "border-[#466BEF]" : "border-[transparent]",
            "rounded-[1rem] overflow-hidden signUpJobCard-shadow border-[2px]"
          )}
          onClick={() => changeSelectedJob("ai")}
        >
          <div className="w-[14.5rem] h-[11rem] bg-[#F1EEFF]"></div>
          <div className="w-[14.5rem] h-[4rem] justify-center items-center flex text-[1.5rem] font-[400] leading-[1.5rem] text-[#101828]">
            AI
          </div>
        </button>
      </div>
      <div className="flex gap-[1.25rem] justify-center">
        <button
          className="w-[19.75rem] h-[3rem] bg-[#F9FAFB] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          onClick={movePrevPhase}
        >
          이전
        </button>
        <button
          className="w-[19.75rem] h-[3rem] bg-[#E4E7EC] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          onClick={moveNextPhase}
        >
          다음
        </button>
      </div>
    </div>
  );
};

type ThirdPhaseFormProps = {
  movePrevPhase: () => void;
  moveNextPhase: () => void;
  register: UseFormRegister<SignUpForm>;
};

export const ThirdPhaseForm = ({
  movePrevPhase,
  moveNextPhase,
  register,
}: ThirdPhaseFormProps) => {
  return (
    <div className="flex flex-col gap-[6rem]">
      <div className="flex flex-col w-[40.75rem] gap-[1.75rem]">
        <Input
          type="nickname"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          register={register("nickname")}
        />
        <Input
          type="description"
          label="상태 메시지 (선택)"
          placeholder="100자 이내로 작성해주세요"
          register={register("description")}
        />
      </div>
      <div className="flex gap-[1.25rem] justify-center">
        <button
          className="w-[19.75rem] h-[3rem] bg-[#F9FAFB] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          onClick={movePrevPhase}
        >
          이전
        </button>
        <button className="w-[19.75rem] h-[3rem] bg-[#E4E7EC] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]">
          다음
        </button>
      </div>
    </div>
  );
};

const ConditionSign = ({
  state = "default",
  text,
}: {
  state: string;
  text: string;
}) => {
  return (
    <div className="flex gap-[0.5rem] items-center">
      <p className="text-[0.875rem] font-[400] leading-[1.3rem] text-[#667085]">
        {text}
      </p>
      <ConditionCheckIcon stroke="#98A2B3" />
    </div>
  );
};
