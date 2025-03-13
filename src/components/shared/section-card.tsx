import { cn } from "@/lib/utils";
import { Title } from "../home/title";
import { Description } from "../home/description";

type ServiceProps = {
  service: {
    title: string;
    description: string;
    image: string;
  };
  className: string;
};

export default function ServiceCard({ service, className }: ServiceProps) {
  return (
    <div
      className={cn(`space-y-5 rounded-lg items-center bg-white lg:p-5 py-5 p-5 shadow-md`, className)}
    >
      {service.image && (
        <div className="flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="mb-4 h-16 w-16"
          />
        </div>
      )}
      <Title className="mb-2 font-bold text-xl ">{service.title}</Title>
      <Description className="text-gray-600">{service.description}</Description>
    </div>
  );
}
