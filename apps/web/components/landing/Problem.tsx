import { Card, CardContent } from "@/components/ui/card";
import { ThumbsDown, Zap, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: ThumbsDown,
    title: "남성: 무차별 Like 남발",
    description:
      "46%의 프로필에 Like를 누르는 남성들. 절박함이 진정성을 떨어뜨립니다.",
    stat: "46%",
    statLabel: "무차별 Like 비율",
  },
  {
    icon: Zap,
    title: "여성: Like 폭탄 90개+",
    description:
      "하루 90개 이상의 Like를 받는 여성들. 감당 불가한 피로감과 진정성에 대한 의심.",
    stat: "90+",
    statLabel: "일일 Like 수",
  },
  {
    icon: TrendingUp,
    title: "상위 10% 독식",
    description:
      "상위 10% 남성이 여성 Like의 50%를 독식. 대다수 남성은 좌절하고 이탈합니다.",
    stat: "50%",
    statLabel: "상위 10%가 차지",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            현재 데이팅 앱의 문제점
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            구조적인 불균형이 모두를 불행하게 만들고 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow bg-bg-section"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-6">{problem.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-3xl font-bold text-accent">
                    {problem.stat}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    {problem.statLabel}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
