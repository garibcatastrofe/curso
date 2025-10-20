import { TopicLink } from "../../types/TopicLink";
import { Topic } from "./Topic";

export function TopicGrid({ infoArray }: { infoArray: TopicLink[] }) {
  return (
    <div className="flex flex-col gap-2 p-3">
      {infoArray.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </div>
  );
}
