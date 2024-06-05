import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PasswordCondition, SignUpForm } from "../page";
import Input from "@/components/auth/Input";
import ErrorMessage from "@/components/ErrorMessage";
import cls from "@/utils/cls";
import ConditionSign from "./ConditionSign";

type FirstPhaseFormProps = {
  register: UseFormRegister<SignUpForm>;
  moveNextPhase: () => void;
  errors: FieldErrors<SignUpForm>;
  isValid: boolean;
  passwordValue: string;
  passwordConditions: PasswordCondition;
  handdlePasswordConditions: (passwordValue: string) => void;
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
            onChange: (e) => handdlePasswordConditions(e.target.value),
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
