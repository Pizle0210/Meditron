import { FaLongArrowAltRight } from "react-icons/fa";

export const CallToAction = () => (
  <div className="mt-3 lg:mt-8 flex items-center justify-center">
    <a
      href="#"
      className="flex items-center rounded-full bg-black px-7 py-4 text-lg font-bold text-white max-lg:py-3"
    >
      Make Enquiries
      <FaLongArrowAltRight size={20} className="ml-3 text-white" />
    </a>
  </div>
);
