import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { highlightWords } from "@/utils/highlightWords";

type HealthInsurerSolutionProps = {
  title: string;
  description: string;
  leftVector: string;
  rightVector: string;
  image: string;
};

export default function HealthInsurerSolution({
  title,
  description,
  leftVector,
  rightVector,
  image,
}: HealthInsurerSolutionProps) {
  const wordsToHighlight = {
    "health insurers": "text-medi-green-500 italic tracking-wide",
  };

  // Split the description by double newlines to create paragraphs
  const paragraphs = description.split(/\n\n+/);

  return (
    <div className="bg-medi-green-200/50 relative w-full">
      <div className="px-6 py-14 lg:px-22">
        <h1 className="text-medi-black-500 mx-auto mb-5 text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-normal lg:mt-14 lg:mb-12 lg:text-start">
          {highlightWords(title, wordsToHighlight)}
        </h1>
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 lg:flex-row lg:gap-14">
          {/* Image container with improved styling */}
          <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
            <div className="sm:aspect-[4/2] relative aspect-[4/2] h-full w-full lg:aspect-[4/3]">
              <img
                src={image}
                alt="Pharmacist reviewing a record of health insurer solutions"
                className="h-full w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-between">
            <div className="mb-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-xl leading-8 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="bg-medi-black-400 hover:bg-medi-black-700 flex w-full place-content-center items-center gap-3 rounded-full px-6 py-2 text-white transition-colors duration-300 lg:py-3">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Vector positioning */}
      {leftVector && (
        <img
          src={leftVector}
          alt="Decorative vector"
          className="absolute bottom-0 left-0 -z-10 hidden w-60 lg:block"
        />
      )}
      {rightVector && (
        <img
          src={rightVector}
          alt="Decorative vector"
          className="absolute right-0 -z-10 hidden w-60 lg:top-45 lg:block xl:top-28"
        />
      )}
    </div>
  );
}
