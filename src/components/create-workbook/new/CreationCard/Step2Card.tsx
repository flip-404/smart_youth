"use client";

import { useState } from "react";
import PublicSettingCard from "./PublicSettingCard";
import cls from "@/utils/cls";

type Step2CardProps = {
  handleNextStep: (isPublic: null | string) => void;
};

export default function Step2Card({ handleNextStep }: Step2CardProps) {
  const [isPublic, setIsPublic] = useState<null | string>(null);

  const handdleCardClick = (type: string) => {
    setIsPublic(type);
  };

  return (
    <div className="createcard-shadow h-full flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[24px] gap-[10px]">
      <div className="flex flex-col text-center justify-center gap-[4px]">
        <p className="text-[28px] font-[700] text-[#313131]">
          문제집의 공개 여부를 선택해 주세요
        </p>
        <p className="text-[20px] font-[500] text-[#667085]">
          지식을 나눠주는 도움으로든, 나만의 면접 준비 문제로든 어느 것이라도
          괜찮아요.
        </p>
      </div>

      <div className="flex justify-center w-full gap-[18px]">
        <PublicSettingCard
          isPublic={isPublic}
          handdleCardClick={handdleCardClick}
          type="public"
        />
        <PublicSettingCard
          isPublic={isPublic}
          handdleCardClick={handdleCardClick}
          type="private"
        />
      </div>
      <div>
        <button
          onClick={() => handleNextStep(isPublic)}
          disabled={isPublic === null}
          className={cls(
            isPublic !== null ? "bg-[#303030]" : "bg-[#D0D5DD]",
            "flex text-white text-[24px] font-[600] py-[12px] px-[20px]   rounded-full"
          )}
        >
          다음
        </button>
      </div>
    </div>
  );
}
