import { Endorsement } from "./endorsement";

export const TrustedBySection = ({
  partnerLogos,
  endorsementImages,
}: {
  partnerLogos: string[];
  endorsementImages: string[];
}) => (
  <div className="mt-24 flex flex-col space-y-5 lg:space-y-10 text-center">
    <div className="">
      <p className="mb-4 text-[.9rem] font-semibold text-gray-500">
        Trusted by Leading Healthcare Providers:
      </p>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-7">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            className="h-12 object-contain max-sm:w-12"
          />
        ))}
      </div>
    </div>

    {/* Loved by Customers */}
    <Endorsement endorsementImages={endorsementImages} />
  </div>
);
