"use client";

import Input from "@/components/auth/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SelectedJob = "frontend" | "backend" | "devops" | "ai" | null;

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
    formState: { errors },
  } = useForm<SignUpForm>({ mode: "onBlur" });

  const [currentPhase, setCurrentPhase] = useState(1);
  const [selectedJob, setSelectedJob] = useState<SelectedJob>(null);

  const onValid = async (formData: SignUpForm) => {
    console.log("formData", formData);
    console.log("selectedJob", selectedJob);

    console.log("parsedData", { ...formData, job: selectedJob });
  };

  const renderSignUpForm = () => {
    console.log("currentPhase", currentPhase);

    switch (currentPhase) {
      case 1:
        return (
          <div className="flex flex-col w-[40.75rem] gap-[1.75rem]">
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
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              register={register("password")}
            />
            <Input
              type="passwordCheck"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요"
              register={register("passwordCheck")}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex">
            <button
              className="p-10 bg-gray-50 border border-cyan-800 rounded-xl "
              onClick={() => setSelectedJob("frontend")}
            >
              프론트엔드
            </button>
            <button
              className="p-10 bg-gray-50 border border-cyan-800 rounded-xl"
              onClick={() => setSelectedJob("backend")}
            >
              백엔드
            </button>
            <button
              className="p-10 bg-gray-50 border border-cyan-800 rounded-xl"
              onClick={() => setSelectedJob("devops")}
            >
              공통CS
            </button>
            <button
              className="p-10 bg-gray-50 border border-cyan-800 rounded-xl"
              onClick={() => setSelectedJob("ai")}
            >
              AI
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col w-[40.75rem] gap-[1.75rem]">
            {" "}
            <Input
              type="nickname"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              register={register("nickname")}
            />
            <Input
              type="description"
              label="상태 메시지 (선택)"
              placeholder="20자 이내로 작성해주세요"
              register={register("description")}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <button type="submit">회원가입</button>
          </div>
        );
    }

    return <></>;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onValid)}>{renderSignUpForm()}</form>

      <button
        className="bg-black text-white"
        onClick={() => {
          if (currentPhase < 4) setCurrentPhase((prev) => prev + 1);
        }}
      >
        임시 다음 버튼
      </button>
    </div>
  );
}
