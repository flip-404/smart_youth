import Input from "@/components/auth/Input";

import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignUpForm } from "./page";
import type { SelectedJob } from "./page";
import cls from "@/utils/cls";
import ErrorMessage from "@/components/ErrorMessage";
import { useEffect, useState } from "react";
import ConditionSign from "@/components/auth/ConditionSign";
import type { PasswordCondition } from "./page";

type FirstPhaseFormProps = {
  register: UseFormRegister<SignUpForm>;
  moveNextPhase: () => void;
  errors: FieldErrors<SignUpForm>;
  isValid: boolean;
  passwordValue: string;
  passwordConditions: PasswordCondition;
  handdlePasswordConditions: (passwordCondition: PasswordCondition) => void;
};

export const FirstPhaseForm = ({
  register,
  moveNextPhase,
  errors,
  isValid = false,
  passwordValue,
  passwordConditions,
  handdlePasswordConditions,
}: FirstPhaseFormProps) => {
  useEffect(() => {
    if (!passwordValue) return;

    const hasLetter = /[a-zA-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
    const isValidLength =
      passwordValue.length >= 8 && passwordValue.length <= 15;

    handdlePasswordConditions({
      hasLetter: hasLetter ? "success" : "error",
      hasNumber: hasNumber ? "success" : "error",
      hasSpecialChar: hasSpecialChar ? "success" : "error",
      isValidLength: isValidLength ? "success" : "error",
    });
  }, [passwordValue, handdlePasswordConditions]);

  return (
    <div className="flex flex-col w-[40.75rem] gap-[1.75rem] items-center">
      <div className="flex flex-col w-full">
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          register={register("email", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "올바른 이메일 주소를 입력하세요",
            },
          })}
          isError={Boolean(errors.email)}
        />
        {errors.email && <ErrorMessage message={errors.email.message!} />}
      </div>
      <div className="flex flex-col w-full gap-[0.5rem]">
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          register={register("password", {
            required: "비밀번호는 필수 입력 사항입니다",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다",
            },
            maxLength: {
              value: 15,
              message: "비밀번호는 최대 15자 이하이어야 합니다",
            },
            validate: {
              hasLetter: (value) =>
                /[a-zA-Z]/.test(value) ||
                "영문자가 하나 이상 포함되어야 합니다",
              hasNumber: (value) =>
                /\d/.test(value) || "숫자가 하나 이상 포함되어야 합니다",
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "특수 문자가 하나 이상 포함되어야 합니다",
            },
          })}
          isError={Boolean(errors.password)}
        />
        <div className="flex gap-[1.25rem]">
          <ConditionSign text="영문" state={passwordConditions.hasLetter} />
          <ConditionSign text="숫자" state={passwordConditions.hasNumber} />
          <ConditionSign
            text="특수문자"
            state={passwordConditions.hasSpecialChar}
          />
          <ConditionSign
            text="8~15자"
            state={passwordConditions.isValidLength}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-[0.5rem]">
        <Input
          type="passwordCheck"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          register={register("passwordCheck", {
            required: "비밀번호를 한번 더 입력해 주세요",
            validate: (passwordCheck) =>
              passwordCheck === passwordValue || "비밀번호가 일치하지 않습니다",
          })}
          isError={Boolean(errors.passwordCheck)}
        />
        {errors.passwordCheck && (
          <ErrorMessage message={errors.passwordCheck.message!} />
        )}
      </div>
      <button
        onClick={isValid ? moveNextPhase : undefined}
        className={cls(
          isValid
            ? "bg-[#3A09FF] text-[#FFFFFF]"
            : "bg-[#E4E7EC] text-[#667085]",
          "w-[30rem] flex justify-center  rounded-[0.25rem] py-[0.75rem] px-[1.5rem] text-[1rem] font-[600] leading-[1.5rem]"
        )}
        disabled={!isValid}
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
  errors: FieldErrors<SignUpForm>;
};

export const SecondPhaseForm = ({
  movePrevPhase,
  moveNextPhase,
  selectedJob,
  changeSelectedJob,
  errors,
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
  errors: FieldErrors<SignUpForm>;
};

export const ThirdPhaseForm = ({
  movePrevPhase,
  moveNextPhase,
  register,
  errors,
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
        <button
          className="w-[19.75rem] h-[3rem] bg-[#E4E7EC] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          type="submit"
        >
          다음
        </button>
      </div>
    </div>
  );
};
