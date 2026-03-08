import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Feature Section 1: 여성이 선택합니다 */}
      <FeatureSection
        subtitle="Women First"
        title="여성이 선택합니다."
        description="매일 AI가 추천하는 3-10명의 프로필을 확인하고, 마음에 드는 사람에게 Like를 보내세요. 남성은 여성 프로필을 먼저 볼 수 없습니다. 오직 여성만이 선택권을 가집니다."
        imagePosition="right"
        bgColor="white"
      >
        <FeatureImage1 />
      </FeatureSection>

      {/* Feature Section 2: 성의 있는 메시지 */}
      <FeatureSection
        subtitle="Meaningful Messages"
        title="성의 있는 메시지만."
        description="무작위 Like는 불가능합니다. 프로필 기반 질문을 선택하고 20자 이상의 진심 어린 메시지를 작성해야 합니다. 진정성 있는 관심만이 전달됩니다."
        imagePosition="left"
        bgColor="warm"
      >
        <FeatureImage2 />
      </FeatureSection>

      {/* Feature Section 3: AI 호환성 매칭 */}
      <FeatureSection
        subtitle="AI Compatibility"
        title="AI가 호환성을 파악합니다."
        description="10분 질문지로 가치관, 대화 스타일, 라이프스타일을 분석합니다. 겉으로 보이는 조건이 아닌, 실제로 잘 맞는 사람을 찾아드립니다."
        imagePosition="right"
        bgColor="white"
      >
        <FeatureImage3 />
      </FeatureSection>

      {/* Feature Section 4: 공평한 기회 */}
      <FeatureSection
        subtitle="Fair Exposure"
        title="모두에게 공평한 기회."
        description="노출 쿼터제로 상위 10%가 모든 관심을 독식하는 것을 방지합니다. 평범한 사람도 공평하게 노출되어 진정한 인연을 만날 수 있습니다."
        imagePosition="left"
        bgColor="section"
      >
        <FeatureImage4 />
      </FeatureSection>

      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

function FeatureImage1() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-pink-200/30 rounded-[2.5rem] transform rotate-3"></div>
        <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-hover rounded-full"></div>
            <div>
              <p className="font-semibold text-primary">오늘의 추천</p>
              <p className="text-sm text-gray-500">3명의 새로운 인연</p>
            </div>
          </div>
          <div className="space-y-3 flex-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-bg-warm rounded-xl">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-32"></div>
                </div>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent">♡</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureImage2() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-[2.5rem] transform -rotate-3"></div>
        <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-2">메시지 작성</p>
            <p className="font-semibold text-primary">김민지님에게</p>
          </div>
          <div className="bg-accent/10 rounded-xl p-4 mb-4">
            <p className="text-sm text-accent font-medium mb-2">선택한 질문</p>
            <p className="text-primary">"당신의 여행 스타일이 궁금해요"</p>
          </div>
          <div className="flex-1 bg-bg-section rounded-xl p-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              저도 혼자 여행하는 걸 좋아해요! 지난달에 제주도 갔을 때...
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-400">24/20자</span>
              <span className="text-xs text-green-500">✓ 전송 가능</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureImage3() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 rounded-[2.5rem] transform rotate-2"></div>
        <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">🧠</span>
            </div>
            <p className="font-semibold text-primary">AI 호환성 분석</p>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">가치관</span>
                <span className="text-accent font-medium">92%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-accent rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">대화 스타일</span>
                <span className="text-accent font-medium">87%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-accent rounded-full" style={{ width: "87%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">라이프스타일</span>
                <span className="text-accent font-medium">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-accent rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-accent/10 rounded-xl p-3 text-center">
            <p className="text-accent font-semibold">총 호환성 88%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureImage4() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-[2.5rem] transform -rotate-2"></div>
        <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <p className="font-semibold text-primary">노출 쿼터제</p>
            <p className="text-sm text-gray-500">모두에게 공평한 기회</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl ${
                    i < 3 ? "bg-gray-300" : "bg-accent/20"
                  } flex items-center justify-center`}
                >
                  {i < 3 ? (
                    <span className="text-xs text-gray-500">상위</span>
                  ) : (
                    <span className="text-accent">✓</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                상위 10% 독식 <span className="line-through text-gray-400">50%</span>
              </p>
              <p className="text-accent font-semibold">
                → 모두에게 공평한 노출
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
