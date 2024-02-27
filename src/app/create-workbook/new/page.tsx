import CreateCard from "@/components/create-workbook/new/CreateCard";
import Header from "@/components/create-workbook/new/Header";

export default function CreateNew() {
  // pt-[60px] px-[80px] gap-[80px] pb-[100px]

  return (
    <>
      <Header />
      <div className="relative w-full h-basic-section flex flex-col bg-[#F0F0F0] px-[205px] py-[140px]">
        <CreateCard />
      </div>
    </>
  );
}
