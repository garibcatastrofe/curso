import { NavLink } from "react-router-dom";
import { SidebarItemProps } from "../../types/Navbar";

export function NavItem({ text, to }: SidebarItemProps) {
  return (
    <NavLink
      to={to ?? ""}
      className={({ isActive }) =>
        `
        relative flex items-center justify-center p-4 gap-2 font-normal cursor-pointer transition-colors group w-fit
        hover:bg-neutral-200/40
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:origin-center after:-translate-x-1/2
        ${isActive ? 'after:w-full' : 'group-hover:after:w-full'}
        `
      }
    >
      <span>{text}</span>
    </NavLink>
  );
}
