import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-medium mb-4">
          강남 · 판교 · 홍대에서 시작합니다
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
          Find your One.
          <br />
          <span className="text-accent">And Ownly.</span>
        </h2>
        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
          진짜 관심 있는 사람에게만 다가가고,
          <br />
          진짜 관심 있는 사람만 만나세요.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            무료로 시작하기
          </Button>
          <Button variant="outline" size="lg">
            앱 다운로드
          </Button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-3">친구 초대 혜택</p>
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">7일</p>
              <p className="text-xs text-gray-500">Premium 무료</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">+1</p>
              <p className="text-xs text-gray-500">추가 추천 슬롯</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            <span>휴대폰 인증</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            <span>셀카 인증</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            <span>투명한 정책</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            <span>안전한 환경</span>
          </div>
        </div>
      </div>
    </section>
  );
}
