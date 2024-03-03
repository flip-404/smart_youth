import { PrivateIcon, PublicIcon } from "../../../public/svgs";

type MyWorkbookCardProps = {
  title: string;
  category: string;
  isPublic: boolean;
};

export default function MyWorkbookCard({
  title,
  category,
  isPublic,
}: MyWorkbookCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-[29px]">
      <div className="flex flex-col px-[20px] py-[23px] text-[24px] font-[500] bg-[#F2F4F7] rounded-[20px] gap-[19px]">
        <p>{title}</p>
        <div className="flex">
          <p className="text-[18px] font-[600] px-[16px] py-[2px] bg-[#D0D5DD] rounded-[20px]">
            {category}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[6px] items-center text-[18px] font-[600]">
          {isPublic ? (
            <>
              <PublicIcon /> 전체공개
            </>
          ) : (
            <>
              <PrivateIcon /> 비공개
            </>
          )}
        </div>
        <div className="text-[#313131] text-[18px] font-[500]">수정하기</div>
      </div>
    </div>
  );
}
