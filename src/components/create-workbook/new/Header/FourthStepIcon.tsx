import { svgProps } from "@/types";

export default function FourthStepIcon({ circleFill, pathFill }: svgProps) {
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
        d="M12.8262 19.7988L18.3281 11.2734H21.1758V19.7461H22.8457V21.627H21.1758V24H18.9961V21.627H12.8262V19.7988ZM19.0312 19.7461V13.875H18.8906L15.1641 19.6582V19.7461H19.0312Z"
        fill={pathFill}
      />
    </svg>
  );
}
