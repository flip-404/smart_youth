"use client";

import CreateCard from "@/components/create-workbook/new/CreateCard";
import Step1Card from "@/components/create-workbook/new/CreationCard/Step1Card";
import Step2Card from "@/components/create-workbook/new/CreationCard/Step2Card";
import Step3Card from "@/components/create-workbook/new/CreationCard/Step3Card";
import Step4Card from "@/components/create-workbook/new/CreationCard/Step4Card";
import Footer from "@/components/create-workbook/new/Footer";
import Header from "@/components/create-workbook/new/Header/Header";
import { Step1Form } from "@/types";
import { useState } from "react";

type Problem = {
  seq: number;
  question: string;
  answer: string;
};

type NewWorkbook = {
  title: string;
  description: string;
  problems: Problem[];
  author: string;
  problemsCount: number;
  createDate: string;
  isPublic: boolean;
};

export default function CreateNew() {
  const [creationStep, setCreationStep] = useState(1);
  const [newWorkbook, setNewWorkbook] = useState<NewWorkbook>({
    title: "테스트 제목",
    description: "테스트 제목",
    problems: [],
    author: "김땡떙",
    problemsCount: 15,
    createDate: "3일전",
    isPublic: true,
  });

  const handleNextStepFrom1 = (formData: Step1Form) => {
    setCreationStep(2);
  };

  const handleNextStepFrom2 = (isPublic: null | string) => {
    if (isPublic === null) return;
    setCreationStep(3);
  };

  const handleNextStepFrom3 = () => {
    setCreationStep(4);
  };

  const handleNextStepFrom4 = (formData: Step1Form) => {};

  const renderCreationCardbyStep = () => {
    switch (creationStep) {
      case 1:
        return <Step1Card handleNextStep={handleNextStepFrom1} />;
      case 2:
        return <Step2Card handleNextStep={handleNextStepFrom2} />;
      case 3:
        return <Step3Card handleNextStep={handleNextStepFrom3} />;
      case 4:
        return <Step4Card />;
      default:
        return null;
    }
  };
  80;

  return (
    <div className="pl-[80px] relative w-full h-basic-section overflow-hidden">
      <Header step={creationStep} />
      <div className="min-w-[1224px] h-basic-section relative w-full flex flex-col bg-[#F0F0F0] px-[205px] py-[140px]">
        {renderCreationCardbyStep()}
      </div>
      <Footer />
    </div>
  );
}
