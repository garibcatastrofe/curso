import { TopicLink } from "../types/TopicLink";
import { useLocation } from "react-router-dom";
import { GeneralTopic as GTopic } from "../components/Topic/GeneralTopic";

export function GeneralTopic({ topic }: { topic: TopicLink }) {
  const location = useLocation();

  return (
    <div className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto">
      {location.pathname === "/temario/temario" ? (
        <div className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto p-10">
          <div className="w-2/3">
            <h3 className="mb-3 text-6xl font-extralight text-start">
              Temario
            </h3>
            <p className="text-2xl font-extralight text-start">
              Te sugerimos hacer un estudio riguroso de cada uno de estos temas,
              leer documentación y crear tanto contenido como te sea posible.
            </p>
            <p className="text-2xl font-medium text-start">
              Recuerda: la práctica hace al maestro
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden p-10 scrollbar-custom">
          <h3 className="text-6xl font-extralight text-start ">{topic.title}</h3>
          {topic.topicsArray.map((t, i) => (
            <GTopic
              key={i}
              name={t.name}
              description={t.description}
              urlImage={t.urlImage}
            />
          ))}
        </div>
      )}
    </div>
  );
}
