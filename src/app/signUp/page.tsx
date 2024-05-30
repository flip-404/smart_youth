"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SignUpLineIcon from "/public/signUp/SignUpLineIcon.svg";
import SignUpPhaseCheckIcon from "/public/auth/SignUpPhaseCheckIcon.svg";
import cls from "@/utils/cls";
import {
  FirstPhaseForm,
  SecondPhaseForm,
  ThirdPhaseForm,
} from "./formsByPhase";

export type PasswordCondition = {
  hasLetter: "default" | "success" | "error";
  hasNumber: "default" | "success" | "error";
  hasSpecialChar: "default" | "success" | "error";
  isValidLength: "default" | "success" | "error";
};

export type SelectedJob = "frontend" | "backend" | "devops" | "ai" | null;

export interface SignUpForm {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  job: SelectedJob;
  description: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpForm>({
    mode: "onBlur",
  });

  const [currentPhase, setCurrentPhase] = useState(1);
  const [selectedJob, setSelectedJob] = useState<SelectedJob>(null);
  const passwordRef = useRef<string>("");
  passwordRef.current = watch("password");
  const [passwordConditions, setPasswordConditions] =
    useState<PasswordCondition>({
      hasLetter: "default",
      hasNumber: "default",
      hasSpecialChar: "default",
      isValidLength: "default",
    });

  const handdlePasswordConditions = (passwordCondition: PasswordCondition) => {
    setPasswordConditions(passwordCondition);
  };

  const onValid = async (formData: SignUpForm) => {
    console.log("parsedData", { ...formData, job: selectedJob });

    const testData = {
      description: "냠냠",
      email: "aka404365@gmail.com",
      job: "frontend",
      nickname: "dddd",
      password: "testtest",
    };

    const res = await fetch("/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });
    console.log("res", res);
  };

  const moveNextPhase = () => {
    setCurrentPhase((prev) => prev + 1);
  };

  const movePrevPhase = () => {
    setCurrentPhase((prev) => prev - 1);
  };

  const changeSelectedJob = (job: "frontend" | "backend" | "devops" | "ai") => {
    setSelectedJob(job);
  };

  const renderSignUpForm = () => {
    switch (currentPhase) {
      case 1:
        return (
          <FirstPhaseForm
            moveNextPhase={moveNextPhase}
            register={register}
            errors={errors}
            isValid={isValid}
            passwordValue={passwordRef.current}
            passwordConditions={passwordConditions}
            handdlePasswordConditions={handdlePasswordConditions}
          />
        );
      case 2:
        return (
          <SecondPhaseForm
            movePrevPhase={movePrevPhase}
            moveNextPhase={moveNextPhase}
            changeSelectedJob={changeSelectedJob}
            selectedJob={selectedJob}
            errors={errors}
          />
        );
      case 3:
        return (
          <ThirdPhaseForm
            movePrevPhase={movePrevPhase}
            moveNextPhase={moveNextPhase}
            register={register}
            errors={errors}
          />
        );
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-screen">
      <h1 className="flex justify-center text-[2.5rem] font-[800] leading-[3.75rem]">
        똑<span className="text-[#839EFF]">디</span>
      </h1>
      <p className="text-[#475467] text-center text-[1.5rem] font-[400] leading-[2.25rem] mt-[0.5rem]">
        회원가입
        <br /> 회원가입 후 더 똑소리나는 스터디를 시작해보세요.
      </p>
      <SignUpPhase phase={currentPhase} />
      <form onSubmit={handleSubmit(onValid)}>{renderSignUpForm()}</form>
    </div>
  );
}

const SignUpPhase = ({ phase }: { phase: number }) => {
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
