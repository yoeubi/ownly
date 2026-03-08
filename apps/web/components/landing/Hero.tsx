import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-warm pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Find Your One
              <br />
              <span className="text-accent">and Ownly</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              여성 주도 선택 기반 AI 데이팅 플랫폼.
              <br />
              진정한 인연을 찾는 새로운 방법.
            </p>
            <p className="mt-4 text-gray-600">
              여성이 선택하고, AI가 매칭합니다.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              100만+ 다운로드 · 4.8★ 평점
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-[580px] bg-gradient-to-br from-accent/20 to-accent/5 rounded-[3rem] shadow-2xl flex items-center justify-center">
              <div className="absolute inset-2 bg-white rounded-[2.5rem] shadow-inner flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">💕</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    앱 스크린샷이
                    <br />
                    여기에 표시됩니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
