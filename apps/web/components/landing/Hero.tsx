import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen bg-bg-warm pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary leading-tight">
              <span className="font-display italic">Find your</span>
              <br />
              <span className="font-display italic">one. And</span>
              <br />
              <span className="font-display italic text-accent">Ownly.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-600 max-w-md">
              여성이 선택하고, AI가 매칭하는 새로운 데이팅.
              진정성 있는 인연을 찾는 가장 스마트한 방법.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
                <span className="px-4 text-gray-400 text-sm">ownly.app/</span>
                <input 
                  type="text" 
                  placeholder="yourname"
                  className="py-3 px-2 text-primary outline-none w-32"
                />
              </div>
              <Button size="lg">
                Get Started Free
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[500px]">
              <div className="absolute -top-10 -right-10 w-64 h-80 bg-white rounded-3xl shadow-2xl transform rotate-6 overflow-hidden border border-gray-100">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-primary text-sm">Sketch & Story</p>
                      <p className="text-xs text-gray-500">Journalist • Artist • Foodie</p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <button className="w-full py-2 bg-accent/10 rounded-full text-sm text-primary">New article</button>
                    <button className="w-full py-2 bg-accent/10 rounded-full text-sm text-primary">Buy my prints</button>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 -left-5 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                <div className="w-full h-full bg-gradient-to-br from-accent to-accent-hover p-4 flex flex-col justify-end">
                  <p className="text-white/60 text-xs uppercase tracking-wider">My Journey to</p>
                  <p className="text-white text-3xl font-bold" style={{ fontFamily: 'cursive' }}>Seoul</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-10 w-48 h-48">
                <div className="absolute inset-0 bg-orange-400 rounded-full transform translate-x-8"></div>
                <div className="absolute inset-0 bg-accent rounded-full transform -translate-x-4 translate-y-4"></div>
                <div className="absolute bottom-4 right-0 flex gap-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xs">P</div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-900 text-xs">👻</div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">📷</div>
                </div>
              </div>

              <div className="absolute -top-5 left-1/3 w-20 h-24 bg-gray-800 rounded-lg shadow-lg transform rotate-12">
                <div className="w-full h-full rounded-lg border-4 border-gray-700 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
