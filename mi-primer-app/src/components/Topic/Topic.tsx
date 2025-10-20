import { TopicLink } from "../../types/TopicLink";
import { NavLink } from "react-router";

export function Topic({ topic }: { topic: TopicLink }) {
  return (
    <NavLink
      to={topic.link}
      className={({ isActive }) =>
        `block w-full p-2 rounded-lg h-fit transition-all duration-150 ${
          isActive ? "bg-neutral-200" : "hover:bg-neutral-300"
        }`
      }
    >
      <p className="text-sm text-start">{topic.title}</p>
    </NavLink>
  );
}
