import Input from "@/components/auth/Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignUpForm } from "../page";
import ErrorMessage from "@/components/ErrorMessage";
import cls from "@/utils/cls";

type ThirdPhaseFormProps = {
  movePrevPhase: () => void;
  isValid: boolean;
  register: UseFormRegister<SignUpForm>;
  errors: FieldErrors<SignUpForm>;
};

export const ThirdPhaseForm = ({
  movePrevPhase,
  isValid,
  register,
  errors,
}: ThirdPhaseFormProps) => {
  return (
    <div className="flex flex-col gap-[6rem]">
      <div className="flex flex-col w-[40.75rem] gap-[1.75rem]">
        <div>
          {" "}
          <Input
            type="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            register={register("nickname", {
              required: "닉네임은 필수 입력 사항입니다",
              maxLength: {
                value: 20,
                message: "닉네임은 최대 10자 이하이어야 합니다",
              },
            })}
          />
          {errors.nickname && (
            <ErrorMessage message={errors.nickname.message!} />
          )}
        </div>
        <div>
          {" "}
          <Input
            type="description"
            label="상태 메시지 (선택)"
            placeholder="100자 이내로 작성해주세요"
            register={register("description", {
              maxLength: {
                value: 100,
                message: "상태 메시지는 최대 100자 이하이어야 합니다",
              },
            })}
          />
          {errors.description && (
            <ErrorMessage message={errors.description.message!} />
          )}
        </div>
      </div>
      <div className="flex gap-[1.25rem] justify-center">
        <button
          className="w-[19.75rem] h-[3rem] bg-[#F9FAFB] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] text-[#667085] rounded-[4px]"
          onClick={movePrevPhase}
        >
          이전
        </button>
        <button
          className={cls(
            isValid
              ? "bg-[#3A09FF] text-[#FFFFFF]"
              : "bg-[#E4E7EC] text-[#667085]",
            "w-[19.75rem] h-[3rem] flex justify-center items-center text-[1rem] font-[600] leading-[1.5rem] rounded-[4px]"
          )}
          disabled={!isValid}
          type="submit"
        >
          회원가입 완료
        </button>
      </div>
    </div>
  );
};
