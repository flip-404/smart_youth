import cls from "@/utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";
import ClosedIcon from "/public/auth/ClosedEyesIcon.svg";
import OpendIcon from "/public/auth/OpendEyesIcon.svg";
import { useState } from "react";

type InputProps = {
  type: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  label?: string;
  required?: boolean;
  isError?: boolean;
};

export default function Input({
  type,
  register,
  placeholder = "",
  label = "",
  required = false,
  isError = false,
}: InputProps) {
  return (
    <label htmlFor={type} className="flex flex-col gap-[0.75rem] w-full">
      {label && (
        <span className="text-[1.25rem] text-[#475467] font-[600] leading-[1.875rem]">
          {label}
          {type === "description" && (
            <p className="text-[0.875rem] font-[400] leading-[1.3rem] text-[#667085]">
              나를 표현하는 문구를 작성해주세요.
            </p>
          )}
        </span>
      )}
      {type === "description" ? (
        <DescriptionInput
          type={type}
          register={register}
          placeholder={placeholder}
          isError={isError}
        />
      ) : (
        <DefaultInput
          type={type}
          required={required}
          placeholder={placeholder}
          register={register}
          isError={isError}
        />
      )}
    </label>
  );
}

type DefaultInputProps = {
  type: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  required?: boolean;
  isError?: boolean;
};

export const DefaultInput = ({
  type,
  register,
  placeholder,
  required,
  isError,
}: DefaultInputProps) => {
  const isPasswordType = type === "password" || type === "passwordCheck";
  const [hideInput, setHideInput] = useState(true);

  return (
    <div className="flex relative">
      <input
        type={isPasswordType && hideInput ? "password" : "text"}
        id={type}
        required={required}
        placeholder={placeholder}
        {...register}
        className={cls(
          "flex-1 border border-[#E4E7EC] rounded-[4px] bg-[#F9FAFF] py-[0.75rem] px-[1rem] placeholder:text-[1rem] placeholder: placeholder:leading-[1.5rem] placeholder:font-[600] placeholder:text-[#98A2B3] outline-none focus:border-[#623AFF] focus:bg-white",
          isError ? "border-[#ED6464]" : ""
        )}
      />
      {isPasswordType &&
        (hideInput ? (
          <ClosedIcon
            onClick={() => {
              setHideInput(false);
            }}
            className="absolute right-[1rem] top-1/2 translate-y-[-50%] cursor-pointer"
          />
        ) : (
          <OpendIcon
            onClick={() => {
              setHideInput(true);
            }}
            className="absolute right-[1rem] top-1/2 translate-y-[-50%] cursor-pointer"
          />
        ))}
    </div>
  );
};

type DescriptionInputProps = {
  type: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  isError?: boolean;
};

export const DescriptionInput = ({
  type,
  register,
  placeholder,
  isError,
}: DescriptionInputProps) => {
  return (
    <div className="flex relative">
      <textarea
        id={type}
        placeholder={placeholder}
        {...register}
        className={cls(
          "h-[6rem] flex-1 border border-[#E4E7EC] rounded-[4px] bg-[#F9FAFF] py-[0.75rem] px-[1rem] placeholder:text-[1rem] placeholder: placeholder:leading-[1.5rem] placeholder:font-[600] placeholder:text-[#98A2B3] outline-none focus:border-[#623AFF] focus:bg-white resize-none",
          isError ? "border-[#ED6464]" : ""
        )}
      />
    </div>
  );
};
