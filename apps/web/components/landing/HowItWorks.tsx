const womenSteps = [
  {
    step: "01",
    title: "10분 질문지 작성",
    description: "가치관, 대화 스타일, 라이프스타일을 알려주세요. AI가 당신에게 맞는 사람을 찾아드립니다.",
  },
  {
    step: "02",
    title: "매일 오전 9시, 추천 확인",
    description: "AI가 호환성 순으로 정렬한 3-10명의 프로필을 확인하세요. 필터로 선호 조건을 설정할 수 있습니다.",
  },
  {
    step: "03",
    title: "프로필 기반 질문 + 메시지",
    description: "'당신의 취미 중 ___가 흥미로워요' 같은 질문을 선택하고, 20자 이상의 진심 어린 메시지를 작성하세요.",
  },
  {
    step: "04",
    title: "매칭 & 대화",
    description: "상대가 24시간 내 수락하면 매칭 성립! 의미 있는 대화를 시작하세요.",
  },
];

const menSteps = [
  {
    step: "01",
    title: "프로필 & 질문지 작성",
    description: "사진 3-5장, 자기소개, 10분 질문지를 작성하세요. AI가 프로필 개선 피드백도 제공합니다.",
  },
  {
    step: "02",
    title: "관심 있는 여성의 메시지 수신",
    description: "무차별 Like가 아닌, 당신에게 진짜 관심 있는 여성의 성의 있는 메시지를 받습니다.",
  },
  {
    step: "03",
    title: "여성 프로필 확인 & 수락",
    description: "이때 처음으로 여성 프로필을 볼 수 있습니다. 24시간 내 수락/거절을 결정하세요.",
  },
  {
    step: "04",
    title: "매칭 & 대화",
    description: "수락 시 매칭 성립! 거절해도 상대에게 표시되지 않아 부담 없습니다.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display italic text-primary">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            여성과 남성 각각에게 최적화된 경험
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-2xl">
                👩
              </span>
              <h3 className="text-2xl font-bold text-primary">여성</h3>
            </div>
            <div className="space-y-6">
              {womenSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-mono text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                👨
              </span>
              <h3 className="text-2xl font-bold text-primary">남성</h3>
            </div>
            <div className="space-y-6">
              {menSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-mono text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
