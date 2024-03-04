"use client";

import cls from "@/utils/cls";
import { useForm } from "react-hook-form";
import { NextArrowIcon } from "../../../../../public/svgs";
import ErrorMessage from "@/components/ErrorMessage";

export default function Step3Card() {
  return (
    <div className="createcard-shadow h-full flex flex-col items-center px-[40px] py-[30px] bg-[#FFFFFF] rounded-[24px] gap-[26px]">
      <div className="w-full flex flex-col items-center gap-[4px]">
        <p className="flex text-[20px] font-[600] text-[#4E5F99]">1번째 질문</p>
        <input
          className="input--reset w-full flex text-center rounded-[12px] text-[32px] font-[700] text-[#101828]  placeholder:text-[32px] placeholder:font-[700] bg-[#FFFFFF] focus:bg-[#F9FAFF] border border-solid border-[#E4E7EC] focus:border-[#839EFF]"
          placeholder="문제의 질문을 입력해 주세요."
        />
      </div>
      <div className="w-full flex flex-1 flex-col gap-[30px]">
        <input
          className="input--reset createcard-shadow flex flex-1 w-full px-[14px] py-[4px] h-auto placeholder:text-center placeholder:text-[26px] placeholder:font-[600] text-[26px] font-[500] focus:bg-[#F9FAFF] border border-solid border-transparent focus:border focus:border-solid focus:border-[#ABC2FF] rounded-[12px]"
          placeholder="📝 이 곳을 클릭하여 내가 생각한 답변을 입력해주세요."
        />
        <div className="flex justify-center">
          <button className="flex bg-[#303030] text-white text-[24px] font-[600] py-[12px] px-[20px]   rounded-full">
            다음 <NextArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
