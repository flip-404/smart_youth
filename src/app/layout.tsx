import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import cls from "@/utils/cls";
import SideBar from "@/components/SideBar";
import Providers from "@/components/Providers";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./libs/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "똑디 | 스마트한 면접 도우미",
  description: "면접 도우미",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="bg-white overflow-hidden">
      <body className={cls(inter.className)}>
        <Header />
        <SideBar />
        <Providers session={session}>
          <div className="bg-white pt-[3rem]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
