"use client";

import Input from "@/components/auth/Input";
import ErrorMessage from "../../components/auth/errorMessage";
import { useForm } from "react-hook-form";
import Link from "next/link";
export interface SignInForm {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInForm>({ mode: "onBlur" });

  return (
    <div className="w-full flex justify-center h-screen">
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="flex flex-col items-center gap-[0.5rem]">
          <Link
            href="/"
            className="mt-[3.75rem] text-[#101828] text-[2.5rem] font-[600] leading-[3.75rem]"
          >
            똑<span className="text-[#839EFF]">디</span>
          </Link>
          <p className="text-center text-[#475467] text-[1.5rem] leading-[2.25rem] font-[400]">
            똑디에서 다양한 면접 문제부터 취업 필승을 위한 <br />
            실전 꿀팁까지 한번에 이용해보세요.
          </p>
        </div>
        <form className="flex flex-col w-[40.75rem] gap-[1.75rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <Input
              type="email"
              label="이메일"
              placeholder="ddockdi@email.com"
              register={register("email", {
                required: "이메일을 입력해 주세요",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "이메일의 형식에 맞게 입력해 주세요",
                },
              })}
              isError={Boolean(errors.email)}
              required
            />
            {errors.email && <ErrorMessage message={errors.email.message!} />}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <Input
              type="password"
              label="비밀번호"
              placeholder="ㆍㆍㆍㆍㆍㆍㆍㆍ"
              register={register("password")}
              isError={Boolean(errors.password)}
              required
            />
            {errors.password && (
              <ErrorMessage message={errors.password.message!} />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[0.5rem]">
              <input
                type="checkbox"
                id="keepSigned"
                className="appearance-none w-[20px] h-[20px] bg-[#F9FAFB] border border-[#D0D5DD] rounded-[2px] checked:bg-[#623AFF] checked:border-[#623AFF] bg-no-repeat bg-center bg-[url('/CheckIcon.svg')]"
              />
              <label
                htmlFor="keepSigned"
                className="text-[0.875rem] font-[600] reading-[21px] text-[#667085]"
              >
                로그인 유지
              </label>
            </div>
            <Link
              href={""}
              className="text-[#667085] text-[0.875rem] font-[600] reading-[1.3rem] underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-[1.75rem]">
            <button className="flex justify-center items-center w-[30.25rem] h-[3rem] py-[0.75rem] px-[1.5rem] rounded-[4px] bg-[#3A09FF] text-white text-[1rem] font-[600] reading-[1.5rem]">
              로그인
            </button>
            <div className="flex gap-[1rem]">
              <span className="text-[0.875rem] font-[600] reading-[21px] text-[#667085]">
                아직 똑디의 회원이 아니신가요?
              </span>
              <Link
                href={"/signUp"}
                className="text-[14px] reading-[21px] font-[600] text-[#230699] underline"
              >
                회원가입
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
