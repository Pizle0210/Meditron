import React from "react";
import { FaStar, FaLongArrowAltRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { BackgroundSVG } from "./backgroundSvg";
import { TrustedBySection } from "./trustedby";
import { Description } from "./description";
import { PrescriptionTag } from "./prescription-tag";
import { CallToAction } from "./call-to-action";
import { Title } from "./title";
import { highlightWords } from "@/utils/highlightWords";

type HeroProps = {
  description: string;
  title: string;
  imageUrl?: string;
  groupIconImage: string;
  partnerLogos: string[];
  backgroundSvg: string;
  endorsementImages: string[];
  heroImageText: string;
  quoteIcon: string;
  className?: string;
};
export default function Hero({
  description,
  title,
  imageUrl,
  backgroundSvg,
  endorsementImages,
  quoteIcon,
  className,
  groupIconImage,
  partnerLogos,
  heroImageText,
}: HeroProps) {
  const wordsToHighlight = {
    "trusted partner":
      "text-medi-green-600 bg-gradient-to-r from-medi-green-600 to-medi-green-600/60 text-transparent bg-clip-text",
    patients: "text-medi-green-400",
    pharmacies: "text-medi-green-400",
    "healthcare providers": "text-medi-green-400",
  };
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {/* Background SVG */}
      <BackgroundSVG backgroundSvg={backgroundSvg} />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4 text-center">
        <Title className="text-5xl leading-[5rem] max-lg:leading-[4rem] sm:max-w-[90%] md:max-w-[78%] lg:max-w-[78%] lg:text-6xl xl:max-w-[60%]">
          {highlightWords(title, wordsToHighlight)}
        </Title>{" "}
        <Description className="max-lg:max-w-[90%] lg:max-w-[55%] xl:w-[55%] 2xl:w-[60%]">
          {highlightWords(description, wordsToHighlight)}
        </Description>
        <CallToAction />
      </div>
      <PrescriptionTag />

      {/* Pharmacist Image and Group Icons (Positioning Optimized) */}
      <div className="relative flex w-full justify-between">
        <GroupIcons groupIconImage={groupIconImage} />
        {imageUrl && (
          <PharmacistImage
            imageUrl={imageUrl}
            quoteIcon={quoteIcon}
            heroImageText={heroImageText}
          />
        )}
      </div>
      {/* Trusted by Section */}
      <TrustedBySection
        partnerLogos={partnerLogos}
        endorsementImages={endorsementImages}
      />
    </div>
  );
}

const PharmacistImage = ({
  imageUrl,
  heroImageText,
  quoteIcon,
}: {
  imageUrl?: string;
  heroImageText: string;
  quoteIcon: string;
}) => (
  <div className="absolute right-0 -z-10 max-xl:hidden xl:-top-[30vh] xl:right-0 2xl:-top-[27vh] 2xl:right-30">
    <div className="relative">
      <img src={imageUrl} alt="Doctor" className="lg:h-full xl:w-full" />
      <p
        className="absolute right-20 -bottom-17 w-[320px] rounded-lg px-3 py-7 text-xs backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(90deg, rgba(94,209,139,0) 0%, rgba(94,209,139,0.2) 15%, rgba(94,209,139,0.3) 85%, rgba(94,209,139,0) 100%)",
        }}
      >
        {heroImageText}
      </p>
    </div>
    <img src={quoteIcon} alt="quote icon" className="object-contain absolute bottom-6 right-81" />
  </div>
);

const GroupIcons = ({ groupIconImage }: { groupIconImage: string }) => (
  <div className="absolute left-10 -z-10 hidden xl:-top-[17.7vh] xl:left-20 xl:block 2xl:xl:-top-[5vh] 2xl:xl:left-45">
    <img src={groupIconImage} alt="Group Icons" className="" />
  </div>
);
