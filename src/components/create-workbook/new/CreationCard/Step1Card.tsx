"use client";

import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import cls from "@/utils/cls";
import { Step1Form } from "@/types";

type Step1CardProps = {
  handleNextStep: (step1FormData: Step1Form) => void;
};

export default function Step1Card({ handleNextStep }: Step1CardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step1Form>({ mode: "onBlur" });

  const onValid = (formData: Step1Form) => {
    console.log("formData:", formData);
    handleNextStep(formData);
  };

  const onInValid = (err: any) => {
    console.log("err:", err);
  };

  return (
    <div className="createcard-shadow h-full flex flex-col items-center px-[80px] py-[60px] bg-[#FFFFFF] rounded-[24px]">
      <div className="flex h-full w-full flex-col justify-center gap-[20px]">
        <div className="flex flex-col items-center">
          <p className="text-[28px] font-[700] text-[#313131]">
            문제집을 만들어 볼까요?
          </p>
          <p className="text-[20px] font-[500] text-[#667085]">
            나만의 노하우가 담긴 문제집의 제목과 설명을 입력해주세요.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onValid, onInValid)}
          className="flex flex-1 flex-col gap-[32px] px-[54px] py-3"
        >
          <div className="flex flex-col gap-[6px]">
            <div className="flex w-full gap-[26px]">
              <span className="flex items-center text-[24px] font-[700] text-[#667085]">
                제목
              </span>
              <input
                className={cls(
                  "flex-1 flex items-center px-[18px] py-[12px] focus:bg-[#F9FAFF] w-full input--reset placeholder:text-[24px] placeholder:font-[600] placeholder:text-[#667085] text-[24px] font-[600] rounded-[12px] border border-solid border-[#E4E7EC] focus:border focus:border-solid focus:border-[#ABC2FF]",
                  errors.title ? "border-[#FF3364] focus:border-[#FF3364]" : ""
                )}
                type="text"
                placeholder="✓문제집의 제목을 입력해주세요"
                {...register("title", {
                  required: "문제집의 제목을 입력해 주세요",
                  minLength: {
                    value: 8,
                    message: "문제집의 제목은 최소 8자 이상 입력해 주세요",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "문제집 제목은 공백 포함 100자까지 입력할 수 있어요.",
                  },
                })}
                required
              />
            </div>
            {errors.title && (
              <div className="flex pl-[78px]">
                <ErrorMessage message={errors.title.message!} />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-1 justify-start w-full gap-[26px] ">
              <span className="flex items-center text-[24px] font-[700] text-[#667085]">
                설명
              </span>
              <input
                className={cls(
                  "input--reset createcard-shadow px-[14px] py-[4px] flex-1 h-auto placeholder:text-center placeholder:text-[22px] placeholder:font-[600] text-[20px] font-[500] focus:bg-[#F9FAFF] border border-solid border-transparent focus:border focus:border-solid focus:border-[#ABC2FF] rounded-[12px]",
                  errors.description
                    ? "border-[#FF3364] focus:border-[#FF3364]"
                    : ""
                )}
                type="text"
                placeholder="📝 이 곳을 클릭하여 문제집의 설명을 간단히 작성해주세요."
                {...register("description", {
                  required: "문제집의 설명을 입력해 주세요",
                  minLength: {
                    value: 4,
                    message: "문제집의 설명은 최소 4자 이상 입력해 주세요",
                  },
                  maxLength: {
                    value: 375,
                    message:
                      "문제집 설명은 공백 포함 375자까지 입력할 수 있어요.",
                  },
                })}
                required
              />
            </div>
            {errors.description && (
              <div className="flex pl-[78px]">
                <ErrorMessage message={errors.description.message!} />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-[8px]">
            <button
              disabled={!isValid}
              className={cls(
                isValid ? "bg-[#303030]" : "bg-[#D0D5DD]",
                "flex text-white text-[24px] font-[600] py-[12px] px-[20px]   rounded-full"
              )}
            >
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
