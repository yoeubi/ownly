import { Brain, BarChart3, MessageSquareText, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI 호환성 매칭",
    description:
      "10분 질문지로 가치관과 대화 스타일을 파악. 협업 필터링 + 콘텐츠 기반 하이브리드 알고리즘이 진정한 호환성을 찾아드립니다.",
  },
  {
    icon: BarChart3,
    title: "노출 쿼터제",
    description:
      "상위 10% 독식을 방지합니다. 모든 남성에게 공평한 기회를 제공하여 평범한 사람도 매칭받을 수 있습니다.",
  },
  {
    icon: MessageSquareText,
    title: "성의 있는 메시지",
    description:
      "프로필 기반 질문 선택 + 20자 이상 메시지 필수. 무작위 Like는 불가능하며 진정성 있는 관심만 전달됩니다.",
  },
  {
    icon: Sparkles,
    title: "프로필 피드백",
    description:
      "AI가 사진 품질, 프로필 완성도를 분석하고 개선점을 제안합니다. 더 매력적인 프로필을 만들어 드립니다.",
  },
  {
    icon: Shield,
    title: "안전 시스템",
    description:
      "휴대폰 본인 인증, AI 기반 실시간 셀카 인증, 신고 및 차단 시스템. 부적절한 행동은 즉시 제재됩니다.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            핵심 기능
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ownly만의 차별화된 기능으로 더 나은 매칭 경험을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
