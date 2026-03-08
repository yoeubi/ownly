import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary">
          Find your one.
          <br />
          <span className="text-accent">And Ownly.</span>
        </h2>
        <p className="mt-8 text-xl text-gray-600">
          진정한 인연을 찾는 새로운 방법을 경험하세요
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
            <span className="px-4 text-gray-400 text-sm">ownly.app/</span>
            <input
              type="text"
              placeholder="yourname"
              className="py-3 px-2 text-primary outline-none w-32"
            />
          </div>
          <Button size="lg">Get Started Free</Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>안전한 인증</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💕</span>
            <span>진정성 있는 매칭</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🤖</span>
            <span>AI 추천</span>
          </div>
        </div>
      </div>
    </section>
  );
}
