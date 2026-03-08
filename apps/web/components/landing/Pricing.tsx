import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "무료",
    description: "Ownly를 체험해 보세요",
    features: [
      "일일 추천 3명 (여성)",
      "기본 채팅",
      "AI 프로필 피드백",
    ],
    cta: "무료로 시작",
    popular: false,
  },
  {
    name: "Premium",
    price: "₩19,900",
    period: "/월",
    description: "더 많은 기회를 잡으세요",
    features: [
      "일일 추천 5명 (여성)",
      "기본 채팅",
      "AI 프로필 피드백",
      "읽음 확인",
      "프로필 우선 노출 (일부)",
    ],
    cta: "Premium 시작",
    popular: true,
  },
  {
    name: "Elite",
    price: "₩39,900",
    period: "/월",
    description: "최고의 매칭 경험",
    features: [
      "일일 추천 10명 (여성)",
      "기본 채팅",
      "AI 프로필 피드백",
      "읽음 확인",
      "음성 메시지 (60초)",
      "프로필 최우선 노출",
    ],
    cta: "Elite 시작",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display italic text-primary">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            당신에게 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.popular
                  ? "bg-accent text-white scale-105 shadow-2xl"
                  : "bg-bg-section text-primary"
              }`}
            >
              {plan.popular && (
                <span className="bg-white text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.popular ? "text-white/70" : "text-gray-500"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${plan.popular ? "text-white/70" : "text-gray-600"}`}>
                {plan.description}
              </p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-accent"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full mt-8"
                variant={plan.popular ? "outlineLight" : "default"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
