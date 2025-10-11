import { usePropertieId } from "@/application/useProperties";
import FormProperties from "@/components/FormProperties/FormProperties";
import { useParams } from "react-router-dom";

const NewProperty: React.FC = () => {
  const params = useParams();
  const { data: property, isLoading } = usePropertieId(params?.id || "");

  console.log(property);
  // se tiver o id no params mandar um patch se nao tiver o id e um novo imovel mandar um post
  if (isLoading) {
    return (
      <section className="mt-40 flex h-80 items-center justify-center">
        <div className="flex h-4 items-end space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-primary w-1 animate-[bar_1s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          <style>{`
            @keyframes bar {
              0%,
              100% {
                height: 0.25rem;
                opacity: 0.3;
              }
              50% {
                height: 1rem;
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </section>
    );
  }

  return <FormProperties property={property} />;
};
export default NewProperty;
