import MakeWorkbookBanner from "./MakeWorkbookBanner";
import Support from "./Support";

export default function ThirdSection() {
  return (
    <div className="w-full pb-[100px]  pt-68px flex flex-col gap-46px">
      <MakeWorkbookBanner />
      <Support />
    </div>
  );
}
