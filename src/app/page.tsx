"use client";

import FirstSection from "@/components/home/FirstSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import { useSession } from "next-auth/react";

export default function Home() {
  const SessionData = useSession();
  console.log("SessionData:", SessionData);

  return (
    <div className="pl-[280px] ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
