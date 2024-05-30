import { memo } from "react";
import ConditionCheckIcon from "/public/auth/ConditionCheckIcon.svg";

const ConditionSign = ({
  state = "default",
  text,
}: {
  state: "default" | "success" | "error";
  text: string;
}) => {
  const getColor = (state: "default" | "success" | "error") => {
    switch (state) {
      case "error":
        return "#D92222";
      case "success":
        return "#20B441";
      default:
        return "#98A2B3";
    }
  };

  const color = getColor(state);

  return (
    <div className="flex gap-[0.5rem] items-center">
      <p
        className={`text-[0.875rem] font-[400] leading-[1.3rem] text-[${color}]`}
      >
        {text}
      </p>
      <ConditionCheckIcon stroke={color} />
    </div>
  );
};
export default memo(ConditionSign);
