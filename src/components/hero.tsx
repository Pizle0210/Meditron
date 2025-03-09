import React, { type ReactNode } from "react";
import { marked } from "marked";
import { FaStar, FaLongArrowAltRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

type HeroProps = {
  description: string;
  title: string;
  imageUrl?: string;
  groupIconsImage: string;
  partnerLogos: string[];
  backgroundSvg: string;
  className?: string;
};

export default function Hero({
  description,
  title,
  imageUrl,
  backgroundSvg,
  className,
  groupIconsImage,
  partnerLogos,
}: HeroProps) {
  return (
    <div className={cn("relative h-full")}>
      {/* Background SVG container */}

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
      <div className="relative z-20 mx-auto px-4">
        <div className="">
          <img src={backgroundSvg} alt="" />
        </div>
        <h1
          className={cn(
            `relative z-30 mx-auto mb-4 text-center text-[clamp(2.2rem,5vw,4.2rem)] leading-[5.2rem] font-extrabold tracking-wide text-wrap text-gray-800 antialiased max-lg:leading-[3rem] lg:max-w-[52rem]`,
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            `relative z-10 mx-auto mb-8 px-16 text-center text-[clamp(.85rem,2vw,1.1rem)] text-wrap text-gray-600 antialiased lg:max-w-[45rem] 2xl:max-w-[54rem]`,
          )}
        >
          {description}
        </p>
        <p className="absolute top-35 hidden w-fit items-center rounded-lg bg-white/90 p-2 px-4 text-[.7rem] font-extrabold tracking-wide text-green-500 shadow-2xl xl:flex">
          <FaStar
            size={25}
            className="mr-3 flex place-content-center rounded-md bg-green-50 p-1"
          />
          Easy Prescription Fulfillment
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center rounded-full bg-black px-7 py-4 font-bold text-white max-lg:py-3"
          >
            Make Enquiries
            <FaLongArrowAltRight size={20} className="ml-3 text-white" />
          </a>
        </div>

        {/* pharmacist image */}
        <div className="absolute top-20 right-0 -z-10 hidden overflow-hidden xl:right-5 xl:block 2xl:right-20">
          <img src={imageUrl} alt="Doctor" className="h-full" />
        </div>
      </div>
    </div>
  );
}
