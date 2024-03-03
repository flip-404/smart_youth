import FirstSection from "@/components/home/FirstSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";

export default function Home() {
  // 똑똑한 청년, 안녕하세요?
  // 오늘도 함께 화이팅해요! weight 설정 필요
  return (
    <div className="pl-[280px]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
