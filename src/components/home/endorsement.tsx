import { FaStar } from "react-icons/fa";

export const Endorsement = ({
  endorsementImages,
}: {
  endorsementImages: string[];
}) => (
  <div className="flex items-center justify-center space-x-2">
    <div className="flex items-center">
      {endorsementImages.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt="loved by customers"
          className="relative max-sm:w-13"
          style={{ zIndex: index + 1, marginLeft: index === 0 ? 0 : -12 }}
        />
      ))}
    </div>
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} size={20} color="goldenrod" className="max-sm:w-4"/>
        ))}
      </div>
      <p className="text-xs antialiased">loved by 200+ customers</p>
    </div>
  </div>
);
