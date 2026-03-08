import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imagePosition: "left" | "right";
  bgColor?: "white" | "warm" | "section";
  children?: ReactNode;
}

export function FeatureSection({
  title,
  subtitle,
  description,
  imagePosition,
  bgColor = "white",
  children,
}: FeatureSectionProps) {
  const bgClasses = {
    white: "bg-white",
    warm: "bg-bg-warm",
    section: "bg-bg-section",
  };

  return (
    <section className={`py-24 lg:py-32 ${bgClasses[bgColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {imagePosition === "right" ? (
            <>
              <div className="order-2 lg:order-1">
                {subtitle && (
                  <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wider">
                    {subtitle}
                  </p>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic text-primary leading-tight">
                  {title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                {children || <ImagePlaceholder />}
              </div>
            </>
          ) : (
            <>
              <div className="order-1">
                {children || <ImagePlaceholder />}
              </div>
              <div className="order-2">
                {subtitle && (
                  <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wider">
                    {subtitle}
                  </p>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic text-primary leading-tight">
                  {title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder() {
  return (
    <div className="relative">
      <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <p className="text-gray-400 text-sm">App Screenshot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
