import cls from "@/utils/cls";
import { CardPublicIcon, CardPrivateIcon } from "../../../../../public/svgs";

type PublicSettingCardProps = {
  type: string;
  handdleCardClick: (type: string) => void;
  isPublic: null | string;
};

export default function PublicSettingCard({
  type,
  handdleCardClick,
  isPublic,
}: PublicSettingCardProps) {
  const featureChips = {
    public: ["답변 수정 가능", "질문 삭제 가능", "질문 수정 불가"],
    private: ["질문 수정 가능", "답변 수정 가능"],
  };

  return (
    <div
      onClick={() => {
        handdleCardClick(type);
      }}
      className={cls(
        isPublic === type ? "step2-card-active" : "step2-card-inactive",
        "flex w-2/5 flex-col justify-between step2-card-shadow rounded-[24px] p-[10px] gap-[4px] hover:cursor-pointer"
      )}
    >
      <div className="flex flex-col gap-[12px]">
        {type === "public" ? <CardPublicIcon /> : <CardPrivateIcon />}
        <div className="flex flex-col">
          <p className="text-[18px] font-[500] text-[#667085]">
            {type === "public" ? "공개" : "비공개"}
          </p>
          <p className="text-[24px] font-[600] text-[#101828]">
            {type === "public"
              ? "문제집을 공유할게요"
              : "이 문제집은 저만 볼게요"}
          </p>
        </div>
      </div>
      <p>
        {type === "public" ? (
          <>
            이미 한 번 공개 한 문제집은 다시 <br />
            비공개로 전환 할 수 없어요.
          </>
        ) : (
          <>
            지금 비공개하더라도 다음에 <br />
            전체 공개로 변경할 수 있어요.
          </>
        )}
      </p>
      <div className="flex gap-[4px]">
        {type === "public"
          ? featureChips.public.map((feature, index) => (
              <div
                key={index}
                className="text-[16px] font-[500] text-[#667085] rounded-full border border-solid border-[#E4E7EC] px-[12px] py-[8px]"
              >
                {feature}
              </div>
            ))
          : featureChips.private.map((feature, index) => (
              <div
                key={index}
                className="text-[16px] font-[500] text-[#667085] rounded-full border border-solid border-[#E4E7EC] px-[12px] py-[8px]"
              >
                {feature}
              </div>
            ))}
      </div>
    </div>
  );
}
