import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import cls from "@/utils/cls";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "똑똑한 청년들",
  description: "면접 도우미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cls(inter.className)}>
        <Header />
        <SideBar />
        <div className="bg-white pt-80px">{children}</div>
      </body>
    </html>
  );
}
