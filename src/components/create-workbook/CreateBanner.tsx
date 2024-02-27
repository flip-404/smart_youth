import Link from "next/link";

export default function CreateBanner() {
  return (
    <div className="flex flex-col bg-[#F0F0F0] rounded-[24px] pt-[50px] pl-[50px] pb-[40px] gap-[60px]">
      <div className="flex flex-col gap-[17px]">
        <p className="text-[34px] font-[700]">
          유진님, <span className="text-[#5E80FA]">프론트 개발자</span> 면접
          준비를 시작해볼까요?
        </p>
        <p>
          면접관인 실무자 입장에서는 면접자가 어떤 분야의 사람들과 소통하며{" "}
          <br />
          본인의 역량을 100% 활용할 수 있는지 확인할 수 있는 과정입니다.
        </p>
      </div>
      <div className="flex">
        <Link
          href="/create-workbook/new"
          className="bg-[#303030] px-[32px] py-[12px] text-[#FFFFFF] rounded-[99px]"
        >
          + 문제 만들기
        </Link>
      </div>
    </div>
  );
}
