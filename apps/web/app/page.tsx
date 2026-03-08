import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* User Stories - 여성 */}
      <FeatureSection
        subtitle="For Women"
        title="원하는 사람에게만 다가가세요."
        description="매일 추천되는 프로필 중 진짜 마음에 드는 사람에게만 메시지를 보내세요. 수락 여부를 확인하고, 매칭되면 실제 만남으로 이어갈 수 있습니다."
        imagePosition="right"
        bgColor="white"
      >
        <WomenExperienceImage />
      </FeatureSection>

      {/* User Stories - 남성 */}
      <FeatureSection
        subtitle="For Men"
        title="진짜 관심 있는 사람만 만나세요."
        description="무의미한 Like가 아닌, 당신에게 진심으로 관심 있는 여성의 메시지를 받습니다. AI 프로필 분석으로 더 좋은 매칭 기회를 얻으세요."
        imagePosition="left"
        bgColor="warm"
      >
        <MenExperienceImage />
      </FeatureSection>

      {/* Trust & Safety */}
      <FeatureSection
        subtitle="Trust & Safety"
        title="가짜 없는, 안전한 공간."
        description="휴대폰 인증과 셀카 인증으로 실제 사용자만 활동합니다. 부적절한 행동은 즉시 신고하고 차단할 수 있습니다. 매칭 조작 없는 투명한 정책."
        imagePosition="right"
        bgColor="white"
      >
        <TrustSafetyImage />
      </FeatureSection>

      {/* Growth & Community */}
      <FeatureSection
        subtitle="Community First"
        title="강남, 판교, 홍대에서 시작합니다."
        description="매칭 밀도를 위해 특정 지역에 집중합니다. 대학 커뮤니티, 직장인 커뮤니티와 함께 성장합니다. 친구를 초대하면 Premium 7일 무료."
        imagePosition="left"
        bgColor="section"
      >
        <CommunityImage />
      </FeatureSection>

      {/* Long-term Vision */}
      <FeatureSection
        subtitle="Our Vision"
        title="매칭을 넘어, 관계 형성 플랫폼으로."
        description="Ownly는 단순한 매칭 앱이 아닙니다. 관계 코칭, 커플 커뮤니티, 연애 데이터 기반 추천까지. 의미 있는 관계를 만드는 플랫폼으로 성장합니다."
        imagePosition="right"
        bgColor="white"
      >
        <VisionImage />
      </FeatureSection>

      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

function WomenExperienceImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 max-w-sm mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-accent/30 to-pink-200/30 rounded-4xl transform -rotate-3"></div>
        <div className="relative bg-white rounded-4xl shadow-2xl p-6 h-full flex flex-col">
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border-l-4 border-accent">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-primary text-sm">추천 확인</p>
                <p className="text-xs text-gray-500">매일 적합한 상대를 발견</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border-l-4 border-accent">
              <span className="text-2xl">💌</span>
              <div>
                <p className="font-semibold text-primary text-sm">관심 표현</p>
                <p className="text-xs text-gray-500">진짜 관심 있는 사람에게만</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border-l-4 border-accent">
              <span className="text-2xl">⏳</span>
              <div>
                <p className="font-semibold text-primary text-sm">매칭 대기</p>
                <p className="text-xs text-gray-500">수락 여부 확인</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border-l-4 border-accent">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-primary text-sm">대화 시작</p>
                <p className="text-xs text-gray-500">실제 만남으로 이어지기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenExperienceImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 max-w-sm mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-indigo-100 rounded-4xl transform rotate-3"></div>
        <div className="relative bg-white rounded-4xl shadow-2xl p-6 h-full flex flex-col">
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <span className="text-2xl">📩</span>
              <div>
                <p className="font-semibold text-primary text-sm">관심 수신</p>
                <p className="text-xs text-gray-500">진짜 관심 있는 여성의 메시지</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-primary text-sm">매칭 선택</p>
                <p className="text-xs text-gray-500">원하는 상대와만 대화</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="font-semibold text-primary text-sm">프로필 개선</p>
                <p className="text-xs text-gray-500">AI 분석으로 매칭 기회 상승</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-primary text-sm">채팅</p>
                <p className="text-xs text-gray-500">상대를 더 알아가기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustSafetyImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 max-w-sm mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-100 to-green-100 rounded-4xl transform -rotate-2"></div>
        <div className="relative bg-white rounded-4xl shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">🛡️</span>
            </div>
            <p className="font-semibold text-primary">플랫폼 신뢰</p>
          </div>
          <div className="space-y-4 flex-1">
            <div className="p-4 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">가짜 계정</span>
                <span className="text-emerald-500 text-sm">차단됨 ✓</span>
              </div>
              <p className="text-xs text-gray-500">휴대폰 + 셀카 이중 인증</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">매칭 조작</span>
                <span className="text-emerald-500 text-sm">없음 ✓</span>
              </div>
              <p className="text-xs text-gray-500">투명한 정책 공개</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">과금 유도</span>
                <span className="text-emerald-500 text-sm">없음 ✓</span>
              </div>
              <p className="text-xs text-gray-500">무료 플랜으로 충분히 사용 가능</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">부적절한 행동</span>
                <span className="text-emerald-500 text-sm">즉시 제재 ✓</span>
              </div>
              <p className="text-xs text-gray-500">신고 기능으로 안전한 환경</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 max-w-sm mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-yellow-100 rounded-4xl transform rotate-2"></div>
        <div className="relative bg-white rounded-4xl shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <p className="font-semibold text-primary">초기 집중 지역</p>
            <p className="text-sm text-gray-500">매칭 밀도 확보</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-accent/10 rounded-xl">
              <span className="text-2xl">🏙️</span>
              <p className="text-xs font-medium text-primary mt-1">강남</p>
            </div>
            <div className="text-center p-3 bg-accent/10 rounded-xl">
              <span className="text-2xl">💼</span>
              <p className="text-xs font-medium text-primary mt-1">판교</p>
            </div>
            <div className="text-center p-3 bg-accent/10 rounded-xl">
              <span className="text-2xl">🎨</span>
              <p className="text-xs font-medium text-primary mt-1">홍대</p>
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3 p-3 bg-bg-warm rounded-xl">
              <span className="text-lg">🎓</span>
              <p className="text-sm text-primary">대학 커뮤니티</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-bg-warm rounded-xl">
              <span className="text-lg">👔</span>
              <p className="text-sm text-primary">직장인 커뮤니티</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-bg-warm rounded-xl">
              <span className="text-lg">👩</span>
              <p className="text-sm text-primary">여성 중심 커뮤니티</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-accent/10 rounded-xl text-center">
            <p className="text-sm text-accent font-medium">친구 초대 시 Premium 7일 무료</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionImage() {
  return (
    <div className="relative">
      <div className="aspect-4/5 max-w-sm mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-purple-100 to-pink-100 rounded-4xl transform -rotate-2"></div>
        <div className="relative bg-white rounded-4xl shadow-2xl p-6 h-full flex flex-col">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">🚀</span>
            </div>
            <p className="font-semibold text-primary">관계 형성 플랫폼</p>
          </div>
          <div className="space-y-4 flex-1">
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">💑</span>
                <div>
                  <p className="text-sm font-medium text-primary">관계 코칭 서비스</p>
                  <p className="text-xs text-gray-500">전문가의 연애 조언</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">👥</span>
                <div>
                  <p className="text-sm font-medium text-primary">커플 커뮤니티</p>
                  <p className="text-xs text-gray-500">매칭 이후에도 함께</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <p className="text-sm font-medium text-primary">연애 데이터 기반 추천</p>
                  <p className="text-xs text-gray-500">AI가 학습하는 호환성</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">단순한 매칭을 넘어</p>
            <p className="text-sm text-accent font-medium">의미 있는 관계를 만듭니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}
