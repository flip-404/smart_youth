"use client";

import { useState } from "react";

export default function SupportDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const handdleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-[20px] animate">
      <div
        onClick={handdleClick}
        className="flex justify-between bg-slate-300 px-30px py-25px items-center hover:cursor-pointer"
      >
        <p>[똑똑한 청년들]은 어떤 서비스 인가요?</p>
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9266 20.7032C13.1675 22.0885 11.1777 22.0885 10.4186 20.7032L0.815454 3.17689C0.0851535 1.84405 1.04962 0.215845 2.56942 0.215845L21.7758 0.215847C23.2956 0.215847 24.2601 1.84406 23.5298 3.17689L13.9266 20.7032Z"
            fill="#8A8A8A"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          [똑똑한 청년들]은 개발직무 취업 준비중이신 청년분들의 면접을 준비를
          도와주는 서비스 입니다. [똑똑한 청년들]은 개발직무 취업 준비중이신
          청년분들의 면접을 준비를 도와주는 서비스 입니다. [똑똑한 청년들]은
          개발직무 취업 준비중이신 청년분들의 면접을 준비를 도와주는 서비스
          입니다.[똑똑한 청년들]은 개발직무 취업 준비중이신 청년분들의 면접을
          준비를 도와주는 서비스 입니다.[똑똑한 청년들]은 개발직무 취업
          준비중이신 청년분들의 면접을 준비를 도와주는 서비스 입니다.[똑똑한
          청년들]은 개발직무 취업 준비중이신 청년분들의 면접을 준비를 도와주는
          서비스 입니다.[똑똑한 청년들]은 개발직무 취업 준비중이신 청년분들의
          면접을 준비를 도와주는 서비스 입니다.
        </div>
      )}
    </div>
  );
}
