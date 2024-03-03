import FirstStepIcon from "./FirstStepIcon";
import FourthStepIcon from "./FourthStepIcon";
import SecondStepIcon from "./SecondStepIcon";
import StepLineIcon from "./StepLineIcon";
import ThirdStepIcon from "./ThirdStepIcon";

type HeaderProps = {
  step: number;
};

export default function Header({ step }: HeaderProps) {
  return (
    <div className="absolute h-[80px] z-[8] bg-white w-full px-[80px] flex gap-[20px] items-center">
      <FirstStepIcon circleFill="#1D2939" pathFill="white" />
      <StepLineIcon stroke={step >= 2 ? "#1D2939" : "#D0D5DD"} />
      <SecondStepIcon
        circleFill={step >= 2 ? "#1D2939" : "#D0D5DD"}
        pathFill={step >= 2 ? "white" : "black"}
      />
      <StepLineIcon stroke={step >= 3 ? "#1D2939" : "#D0D5DD"} />
      <ThirdStepIcon
        circleFill={step >= 3 ? "#1D2939" : "#D0D5DD"}
        pathFill={step >= 3 ? "white" : "black"}
      />
      <StepLineIcon stroke={step >= 4 ? "#1D2939" : "#D0D5DD"} />
      <FourthStepIcon
        circleFill={step >= 4 ? "#1D2939" : "#D0D5DD"}
        pathFill={step >= 4 ? "white" : "black"}
      />
    </div>
  );
}
