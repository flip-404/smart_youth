import type { UseFormRegisterReturn } from "react-hook-form";

type SignInInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
};

export default function SignInInput({
  label,
  name,
  placeholder = "",
  register,
  required = false,
}: SignInInputProps) {
  return (
    <label htmlFor={name} className="flex flex-1 flex-col gap-[20px]">
      <span className=" text-[24px] font-[700] text-[#667085]">{label}</span>
      <input
        type="text"
        id={name}
        required={required}
        placeholder={placeholder}
        {...register}
        className="outline-none flex-1 py-[8px] px-[4px] rounded-[12px] bg-[#F9FAFF] placeholder:text-[24px] placeholder:font-[600] placeholder:text-[#98A2B3] leading-[36px]"
      />
    </label>
  );
}
