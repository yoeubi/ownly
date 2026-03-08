import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Ownly - Find Your One and Ownly",
  description:
    "여성 주도 선택 기반 AI 데이팅 플랫폼. 진정한 인연을 찾는 새로운 방법.",
  keywords: ["데이팅", "소개팅", "AI 매칭", "연애", "Ownly"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
