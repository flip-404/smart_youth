"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FirstPhaseForm } from "./_components/FirstPhaseForm";
import { SecondPhaseForm } from "./_components/SecondPhaseForm";
import { ThirdPhaseForm } from "./_components/ThirdPhaseForm";
import { SignUpPhase } from "./_components/SignUpPhase";

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

  const handdlePasswordConditions = (passwordValue: string) => {
    if (!passwordValue) return;

    const hasLetter = /[a-zA-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
    const isValidLength =
      passwordValue.length >= 8 && passwordValue.length <= 15;

    setPasswordConditions({
      hasLetter: hasLetter ? "success" : "error",
      hasNumber: hasNumber ? "success" : "error",
      hasSpecialChar: hasSpecialChar ? "success" : "error",
      isValidLength: isValidLength ? "success" : "error",
    });
  };

  const onValid = async (formData: SignUpForm) => {
    console.log("formData", formData);

    const res = await fetch("/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log("res", res);
  };

  const moveNextPhase = () => {
    setCurrentPhase((prev) => prev + 1);
  };

  const movePrevPhase = () => {
    setCurrentPhase((prev) => prev - 1);
  };

  const changeSelectedJob = (job: SelectedJob) => {
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
            isValid={isValid}
            changeSelectedJob={changeSelectedJob}
            selectedJob={selectedJob}
          />
        );
      case 3:
        return (
          <ThirdPhaseForm
            movePrevPhase={movePrevPhase}
            isValid={isValid}
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
