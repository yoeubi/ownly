import { Lightbulb, Heart } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    title: "사람들은 자기가 원하는 게 뭔지 모른다",
    description:
      "의식적으로 선호하는 조건(키, 외모, 연봉)과 실제로 행복한 관계를 만드는 요소(가치관, 대화 스타일)는 다릅니다.",
    solution: "AI가 당신보다 더 잘 알고 추천합니다",
    highlight: "10분 질문지로 진짜 호환성을 파악",
  },
  {
    icon: Heart,
    title: "연애는 여자가 선택하는 것",
    description:
      "남성의 무차별 접근은 진정성을 떨어뜨립니다. 여성이 주도권을 가질 때 더 건강한 관계가 형성됩니다.",
    solution: "여성이 먼저 선택하는 구조",
    highlight: "성의 있는 메시지 필수 = 진정성 확보",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Ownly의 핵심 인사이트
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            문제의 본질을 파악하고, 근본적인 해결책을 제시합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <insight.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">
                    "{insight.title}"
                  </h3>
                  <p className="text-gray-600 mb-6">{insight.description}</p>
                  <div className="bg-bg-section rounded-2xl p-5">
                    <p className="text-sm text-gray-500 mb-2">Ownly의 해결책</p>
                    <p className="font-semibold text-primary mb-2">
                      {insight.solution}
                    </p>
                    <p className="text-accent text-sm font-medium">
                      → {insight.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
