export default function FirstSection() {
  return (
    <div className="w-full h-basic-section pb-90px flex flex-col">
      <div className="flex w-full justify-between pt-105px pl-85px pr-130px mb-128px">
        <div>
          <p className="text-2xl font-semibold text-6F6F6F">
            똑똑한 청년, 안녕하세요?
          </p>
          <p className="text-2xl font-semibold text-2D2D2D">
            오늘도 함께 화이팅해요!
          </p>
        </div>
        <div className="flex items-center gap-26px rounded-full bg-white px-25px">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.7075 27.2928L22.4488 21.0353C24.2628 18.8574 25.1674 16.064 24.9743 13.2362C24.7813 10.4084 23.5054 7.76385 21.4122 5.85275C19.319 3.94164 16.5696 2.9111 13.7359 2.9755C10.9023 3.0399 8.20249 4.19429 6.19827 6.19851C4.19404 8.20274 3.03966 10.9025 2.97526 13.7362C2.91086 16.5698 3.9414 19.3193 5.85251 21.4125C7.76361 23.5057 10.4081 24.7815 13.236 24.9746C16.0638 25.1676 18.8572 24.2631 21.035 22.449L27.2925 28.7078C27.3855 28.8007 27.4958 28.8744 27.6171 28.9247C27.7385 28.975 27.8686 29.0008 28 29.0008C28.1314 29.0008 28.2615 28.975 28.3829 28.9247C28.5043 28.8744 28.6146 28.8007 28.7075 28.7078C28.8005 28.6149 28.8742 28.5046 28.9244 28.3832C28.9747 28.2618 29.0006 28.1317 29.0006 28.0003C29.0006 27.8689 28.9747 27.7388 28.9244 27.6174C28.8742 27.496 28.8005 27.3857 28.7075 27.2928ZM5.00004 14.0003C5.00004 12.2203 5.52788 10.4802 6.51681 9.00015C7.50575 7.52011 8.91136 6.36656 10.5559 5.68537C12.2004 5.00418 14.01 4.82595 15.7559 5.17322C17.5017 5.52048 19.1053 6.37765 20.364 7.63632C21.6227 8.895 22.4798 10.4986 22.8271 12.2445C23.1744 13.9903 22.9961 15.7999 22.315 17.4444C21.6338 19.089 20.4802 20.4946 19.0002 21.4835C17.5201 22.4724 15.7801 23.0003 14 23.0003C11.6139 22.9976 9.32626 22.0486 7.639 20.3613C5.95175 18.6741 5.00269 16.3864 5.00004 14.0003Z"
              fill="#CCCCCC"
            />
          </svg>
          <input
            className="input--reset"
            placeholder="2024 상반기 네이버 코딩 테스트 문제"
          ></input>
          <button className="bg-black text-white py-16px px-25px rounded-full button--reset">
            찾아보기
          </button>
        </div>
      </div>
      <div className="flex flex-2 pl-123px pr-130px h-full w-full gap-21px">
        <div className="flex flex-col justify-between flex-1 h-full gap-12px">
          <div className="h-full bg-86A1FF rounded-2xl">서비스 소개</div>
          <div className="h-full bg-86A1FF rounded-2xl">
            실시간으로 업데이트되는 문제은행
          </div>
        </div>
        <div className="flex-1 bg-86A1FF rounded-2xl">
          프론트엔드 신입 기술 면접 최다 출제 문제집
        </div>
      </div>
    </div>
  );
}
