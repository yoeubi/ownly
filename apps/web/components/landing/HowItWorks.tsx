const womenSteps = [
  {
    step: "01",
    title: "AI 추천 확인",
    description: "매일 AI가 추천하는 3-10명의 프로필을 확인하세요",
  },
  {
    step: "02",
    title: "Like + 메시지",
    description: "마음에 드는 사람에게 성의 있는 메시지와 함께 Like",
  },
  {
    step: "03",
    title: "매칭 & 대화",
    description: "상대가 수락하면 매칭 성립! 대화를 시작하세요",
  },
];

const menSteps = [
  {
    step: "01",
    title: "프로필 작성",
    description: "매력적인 프로필과 10분 질문지로 당신을 표현",
  },
  {
    step: "02",
    title: "메시지 수신",
    description: "진짜 관심 있는 여성의 성의 있는 메시지를 받아보세요",
  },
  {
    step: "03",
    title: "수락/거절",
    description: "24시간 내에 결정하고 매칭을 성립시키세요",
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
