import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen bg-bg-warm pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium mb-4 tracking-wide">
              여성이 선택하는 데이팅 앱
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary leading-tight">
              <span className="font-display italic">Find your</span>
              <br />
              <span className="font-display italic">One and</span>
              <br />
              <span className="font-display italic text-accent">Ownly.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-600 max-w-md leading-relaxed">
              진짜 관심 있는 사람에게만 다가가고, 진짜 관심 있는 사람만 만나세요.
              가짜 없는 안전한 공간에서 의미 있는 관계를 시작하세요.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                무료로 시작하기
              </Button>
              <Button variant="outline" size="lg">
                자세히 알아보기
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>휴대폰 + 셀카 인증</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>강남 · 판교 · 홍대</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>친구 초대 혜택</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[500px]">
              <div className="absolute -top-10 -right-10 w-64 h-80 bg-white rounded-3xl shadow-2xl transform rotate-6 overflow-hidden border border-gray-100">
                <div className="p-4 h-full flex flex-col">
                  <div className="text-center mb-4">
                    <p className="text-xs text-gray-400">여성 사용자</p>
                    <p className="font-semibold text-primary">오늘의 추천</p>
                  </div>
                  <div className="space-y-3 flex-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-accent/5 rounded-xl">
                        <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-100 rounded w-16 mb-1"></div>
                          <div className="h-1.5 bg-gray-50 rounded w-24"></div>
                        </div>
                        <span className="text-accent text-sm">♡</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-auto py-2 bg-accent text-white rounded-full text-sm">
                    메시지 보내기
                  </button>
                </div>
              </div>

              <div className="absolute top-24 -left-5 w-56 h-64 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 bg-white border border-gray-100">
                <div className="p-4 h-full flex flex-col">
                  <div className="text-center mb-3">
                    <p className="text-xs text-gray-400">남성 사용자</p>
                    <p className="font-semibold text-primary">새 메시지</p>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-xl mb-3">
                    <p className="text-xs text-accent font-medium mb-1">진짜 관심 있는 분이에요</p>
                    <p className="text-xs text-gray-600">"당신의 여행 사진이 멋져요..."</p>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 py-2 bg-gray-100 rounded-full text-xs text-gray-500">거절</button>
                    <button className="flex-1 py-2 bg-accent text-white rounded-full text-xs">수락</button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-5 w-44 h-24 bg-white rounded-2xl shadow-xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🛡️</span>
                  <p className="text-xs font-medium text-primary">안전한 매칭</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">인증완료</span>
                  <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">신뢰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
