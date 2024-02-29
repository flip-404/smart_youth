"use client";

import SolveCard from "@/components/solve-workbook/detail/SolveCard";
import Footer from "@/components/solve-workbook/detail/Footer";
import Header from "@/components/solve-workbook/detail/Header";
import { useState } from "react";

export default function SolvePage() {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const handdleAnsnwerToggle = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };

  return (
    <div className="relative w-full h-basic-section">
      <Header />
      <div className="relative w-full h-basic-section flex flex-col bg-[#F0F0F0] px-[205px] py-[140px]">
        <div
          onClick={handdleAnsnwerToggle}
          className="hover:cursor-pointer absolute z-[100] bg-[#CACACA] w-[80px] top-[200px] right-[125px] rounded-r-[20px] py-[60px] px-[20px] text-[20px] font-[700]"
        >
          {isAnswerOpen ? (
            <>
              문제
              <br />
              풀기
            </>
          ) : (
            <>
              답변
              <br />
              보기
            </>
          )}
        </div>
        <SolveCard isAnswerOpen={isAnswerOpen} />
      </div>
      <Footer />
    </div>
  );
}
