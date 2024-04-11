import CreateBanner from "./CreateBanner";
import MyWorkbook from "../MyWorkbook";

export default function FirstSection() {
  return (
    <div className="min-w-[1024px] w-full flex flex-col pt-[60px] px-[80px] gap-[80px] pb-[100px]">
      <CreateBanner />
      <MyWorkbook />
    </div>
  );
}
