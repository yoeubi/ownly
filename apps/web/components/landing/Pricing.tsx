import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "무료",
    priceNote: "",
    description: "Onlee를 체험해 보세요",
    features: [
      { name: "일일 추천 (여성)", value: "3명", included: true },
      { name: "기본 채팅", value: "", included: true },
      { name: "AI 프로필 피드백", value: "", included: true },
      { name: "읽음 확인", value: "", included: false },
      { name: "음성 메시지", value: "", included: false },
      { name: "프로필 우선 노출", value: "", included: false },
    ],
    cta: "무료로 시작하기",
    popular: false,
  },
  {
    name: "Premium",
    price: "₩19,900",
    priceNote: "/월",
    description: "더 많은 기회를 잡으세요",
    features: [
      { name: "일일 추천 (여성)", value: "5명", included: true },
      { name: "기본 채팅", value: "", included: true },
      { name: "AI 프로필 피드백", value: "", included: true },
      { name: "읽음 확인", value: "", included: true },
      { name: "음성 메시지", value: "", included: false },
      { name: "프로필 우선 노출", value: "일부", included: true },
    ],
    cta: "Premium 시작하기",
    popular: true,
  },
  {
    name: "Elite",
    price: "₩39,900",
    priceNote: "/월",
    description: "최고의 매칭 경험",
    features: [
      { name: "일일 추천 (여성)", value: "10명", included: true },
      { name: "기본 채팅", value: "", included: true },
      { name: "AI 프로필 피드백", value: "", included: true },
      { name: "읽음 확인", value: "", included: true },
      { name: "음성 메시지", value: "60초", included: true },
      { name: "프로필 우선 노출", value: "최우선", included: true },
    ],
    cta: "Elite 시작하기",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            요금제
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            당신에게 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-accent shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  가장 인기
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.priceNote}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {feature.name}
                        {feature.value && (
                          <span className="font-medium text-accent ml-1">
                            {feature.value}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
