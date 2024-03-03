import { svgProps } from "@/types";

export default function StepLineIcon({ stroke }: svgProps) {
  return (
    <svg
      width="42"
      height="2"
      viewBox="0 0 42 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1H41" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
