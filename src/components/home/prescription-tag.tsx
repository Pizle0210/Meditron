import { FaStar } from "react-icons/fa";

export const PrescriptionTag = () => (
  <p className="absolute top-35 left-7 tracking-wider hidden w-fit items-center rounded-lg bg-white/90 p-2 px-4 text-[.85rem] font-extrabold text-green-500 shadow-2xl xl:flex">
    <FaStar
      size={25}
      className="mr-3 flex place-content-center rounded-md bg-green-50 p-1"
    />
    Easy Prescription Fulfillment
  </p>
);
