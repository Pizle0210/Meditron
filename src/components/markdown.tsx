import React, { type ReactNode } from "react";
import { marked } from "marked";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

interface MarkdownProps {
  content: string;
  title: string;
  imageUrl?: string;
  groupIconsImage: string;
  partnerLogos: string[];
  className?: string;
}

function HeroMarkdown({
  content,
  title,
  imageUrl,
  className,
  groupIconsImage,
  partnerLogos,
}: MarkdownProps) {
  const [htmlContent, setHtmlContent] = React.useState<string>("");

  React.useEffect(() => {
    const parseContent = async () => {
      const result = await marked(content);
      setHtmlContent(result);
    };
    parseContent();
  }, [content]);

  return (
    <section className={cn("relative h-full")}>
      {/* Background SVG container */}
      <div className="absolute inset-0 z-0 w-screen overflow-visible">
        <img
          src="/images/Vector 2.svg"
          alt="Vector Background"
          className="w-full"
        />
      </div>
      <div className="absolute inset-0 -top-40 -left-10 z-0 w-screen overflow-visible">
        <svg
          className="absolute top-0 left-0 h-full w-full opacity-3"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle
            cx="500"
            cy="500"
            r="300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M200,200 Q500,100 800,200 T800,500 T500,800 T200,500 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative z-20 mx-auto max-w-5xl px-4">
        <h1
          className={cn(
            `relative z-10 mx-auto mb-4 max-w-[52rem] text-center text-[clamp(2.3rem,5vw,3.75rem)] leading-[5rem] font-extrabold tracking-wide text-wrap text-gray-800 antialiased max-lg:leading-12`,
          )}
        >
          {title}
        </h1>
        <div
          className={cn(
            `relative z-10 mx-auto mb-8 max-w-[60rem] px-16 text-center text-[clamp(.85rem,2vw,1.1rem)] text-wrap text-gray-600 antialiased`,
          )}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* pharmacist image */}
        <div className="absolute top-14 -right-66 z-10 hidden overflow-hidden lg:block">
          <img
            src={imageUrl}
            alt="Doctor"
            className="h-full w-full"
            style={{
              clipPath: "polygon(0, 0, 100% 0, 100% 85%, 0 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroMarkdown;
