import { Title } from "./title";
import { Description } from "./description";
import { highlightWords } from "@/lib/highlightWords";
import ServiceCard from "../shared/section-card";

type ServicesProps = {
  title: string;
  description: string;
  vector: string;
  services: {
    title: string;
    description: string;
    image: string;
  }[];
};

export default function OurServices({
  title,
  description,
  vector,
  services = [],
}: ServicesProps) {
  const wordsToHighlight = {
    medi: "text-medi-green-600 text-lg font-semibold",
  };

  return (
    <div className="relative w-full">
      <div className="mx-auto flex flex-col items-center">
        <Title className="text-medi-black-500 text-[clamp(1.5rem,4vw,3.2rem)] font-bold lg:pt-10">
          {title}
        </Title>
        <Description className="w-[80%] xl:w-[72%] 2xl:w-[51%] lg:w-[65%] text-gray-500 font-semibold text-center">
          {highlightWords(description, wordsToHighlight)}
        </Description>
      </div>

      {/* Services */}
      <div className="mt-12 px-5 lg:px-16">
        {/* Large screens */}
        <div className="hidden lg:block">
          {/* Top row */}
          <div className="mb-8 flex justify-center gap-8">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="flex w-[calc(50%-1rem)]">
                <ServiceCard service={service} className="flex-1" />
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex justify-center gap-8">
            {services.slice(2, 5).map((service, index) => (
              <div key={index + 2} className="flex w-[calc(33.333%-1rem)]">
                <ServiceCard service={service} className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Medium screens */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="mb-8 flex w-[calc(50%-1rem)]">
                <ServiceCard service={service} className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Small screens */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex w-full">
                <ServiceCard service={service} className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vector positioning */}
      {vector && (
        <img
          src={vector}
          alt="Decorative vector"
          className="absolute right-5 -z-10 hidden w-50 lg:-top-25 lg:block xl:-top-25"
        />
      )}
    </div>
  );
}
