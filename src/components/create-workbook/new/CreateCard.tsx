export default function CreateCard() {
  return (
    <div className="flex flex-col gap-[40px] items-center w-full h-full bg-white rounded-[24px] createcard-shadow pt-[40px] pb-[30px] px-[40px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <p className="text-[14px] text-[#7B7B7B] font-[700]">문제 1</p>
        <input
          className="flex text-center text-[26px] font-[700] w-3/4"
          placeholder="문제 제목을 입력하세요."
        />
      </div>
      <div className="flex flex-1 flex-col gap-[25px] items-center w-full">
        <div className="relative flex-1 w-full p-[28px] border-solid border-2 border-black rounded-[20px]">
          <textarea
            className="w-full h-full text-[18px] outline-none resize-none"
            placeholder="내가 생각한 답변을 입력하세요."
          />
          <svg
            className="absolute bottom-[28px] right-[28px]"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#F5F5F5" />
            <path
              d="M29.9999 31.9999C29.0683 31.9999 28.2798 31.6772 27.6345 31.0319C26.9892 30.3866 26.6666 29.5982 26.6666 28.6666V20.6666C26.6666 19.735 26.9892 18.9465 27.6345 18.3012C28.2798 17.6559 29.0683 17.3333 29.9999 17.3333C30.9315 17.3333 31.7199 17.6559 32.3653 18.3012C33.0105 18.9465 33.3332 19.735 33.3332 20.6666V28.6666C33.3332 29.5982 33.0105 30.3866 32.3653 31.0319C31.7199 31.6772 30.9315 31.9999 29.9999 31.9999ZM28.9999 41.6665V37.2716C26.7999 37.0204 24.9721 36.0768 23.5166 34.4409C22.061 32.805 21.3333 30.8802 21.3333 28.6666H23.3332C23.3332 30.511 23.9832 32.0832 25.2832 33.3832C26.5832 34.6832 28.1554 35.3332 29.9999 35.3332C31.8443 35.3332 33.4166 34.6832 34.7166 33.3832C36.0166 32.0832 36.6666 30.511 36.6666 28.6666H38.6665C38.6665 30.8802 37.9387 32.805 36.4832 34.4409C35.0276 36.0768 33.1999 37.0204 30.9999 37.2716V41.6665H28.9999ZM29.9999 29.9999C30.3777 29.9999 30.6943 29.8721 30.9499 29.6166C31.2054 29.361 31.3332 29.0443 31.3332 28.6666V20.6666C31.3332 20.2888 31.2054 19.9721 30.9499 19.7166C30.6943 19.461 30.3777 19.3332 29.9999 19.3332C29.6221 19.3332 29.3054 19.461 29.0499 19.7166C28.7943 19.9721 28.6666 20.2888 28.6666 20.6666V28.6666C28.6666 29.0443 28.7943 29.361 29.0499 29.6166C29.3054 29.8721 29.6221 29.9999 29.9999 29.9999Z"
              fill="#969696"
            />
          </svg>
        </div>

        <button className="bg-[#626262] text-white rounded-[99px] px-[32px] py-[12px]">
          + 문제 추가하기
        </button>
      </div>
    </div>
  );
}
