import MyWorkbookCard from "./create-workbook/MyWorkbookCard";

export default function MyWorkbook() {
  return (
    <div className="flex flex-col gap-[32px]">
      <p className="text-[32px] font-[700]">
        내가 만든 문제들 <span className="text-[#8D8D8D]">8</span>
      </p>
      <div className="flex flex-wrap gap-[20px]">
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="공통CS"
          isPublic={false}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
      </div>
      <div className="flex flex-wrap gap-[20px]">
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
        <MyWorkbookCard
          title="요즘 대세 AI 예비 개발자에게 물어보는 질문 TOP 10"
          category="백엔드"
          isPublic={true}
        />
      </div>
    </div>
  );
}
