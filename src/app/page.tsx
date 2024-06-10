import FirstSection from "@/components/home/FirstSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log("session:", session);

  return (
    <div className="pl-[280px] ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
