"use client";

import SignInInput from "@/components/auth/SignInInput";
import ErrorMessage from "../../components/auth/errorMessage";
import { useForm } from "react-hook-form";

export interface SignInForm {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  description?: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignInForm>({ mode: "onBlur" });

  return (
    <div className="pl-[280px] w-full h-basic-section min-w-[1024px]">
      <div className="mt-[100px] flex flex-col items-center justify-center gap-[6px]">
        <h1 className="text-[48px] font-[700]">똑똑한 청년</h1>
        <form className="flex flex-col gap-[48px] flex-1 w-1/2">
          <SignInInput
            name="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            register={register("email", {
              required: "이메일을 입력해 주세요",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "이메일의 형식에 맞게 입력해 주세요",
              },
            })}
            required
          />
          <SignInInput
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            register={register("password", {
              required: "비밀번호를 입력해 주세요",
            })}
            required
          />
        </form>
        <div></div>
      </div>
    </div>
  );
}
