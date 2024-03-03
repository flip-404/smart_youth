import { svgProps } from "@/types";

export default function FirstStepIcon({ circleFill, pathFill }: svgProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill={circleFill} />
      <path
        d="M20.2227 24H17.9199V13.5059H17.8496L14.8789 15.4043V13.3125L18.0254 11.2734H20.2227V24Z"
        fill={pathFill}
      />
    </svg>
  );
}
