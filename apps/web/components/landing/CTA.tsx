import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 via-bg-warm to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
          지금 시작하세요
        </h2>
        <p className="mt-6 text-xl text-gray-600">
          마지막 첫 만남을 위해
        </p>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Ownly에서 진정한 인연을 찾아보세요. 여성이 선택하고, AI가 매칭하는
          새로운 방식의 데이팅을 경험하세요.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 text-base px-8">
            <Apple className="w-5 h-5" />
            App Store에서 다운로드
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8">
            <Play className="w-5 h-5" />
            Google Play에서 다운로드
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>안전한 본인 인증</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💕</span>
            <span>진정성 있는 매칭</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span>AI 기반 추천</span>
          </div>
        </div>
      </div>
    </section>
  );
}
