import cls from "@/utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";
import ClosedIcon from "/public/auth/ClosedEyesIcon.svg";

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
    <label htmlFor={type} className="flex flex-col gap-[0.75rem]">
      {label && (
        <span className="text-[1.25rem] text-[#475467] font-[600] leading-[1.875rem]">
          {label}
        </span>
      )}

      <div className="flex relative">
        <input
          type="text"
          id={type}
          required={required}
          placeholder={placeholder}
          {...register}
          className={cls(
            "flex-1 border border-[#E4E7EC] rounded-[4px] bg-[#F9FAFF] py-[0.75rem] px-[1rem] placeholder:text-[1rem] placeholder: placeholder:leading-[1.5rem] placeholder:font-[600] placeholder:text-[#98A2B3] outline-none focus:border-[#623AFF] focus:bg-white",
            isError ? "border-[#ED6464]" : ""
          )}
        />
        {type === "password" && (
          <ClosedIcon className="absolute right-[1rem] top-1/2 translate-y-[-50%]" />
        )}
      </div>
    </label>
  );
}
