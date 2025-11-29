import { NavLink } from "react-router-dom";
import { Home, Settings, Boxes } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/components", label: "Components", icon: Boxes },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ onNavigate }) {
  return (
    <nav className="h-full p-4 flex flex-col">
      <ul className="space-y-1 flex-1">
        {links.map((l) => {
          const Icon = l.icon;

          return (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => onNavigate && onNavigate()}
                className={({ isActive }) =>
                  `
                    flex items-center gap-3 px-3 py-2 rounded-md
                    transition-all

                    ${isActive ? "bg-slate-200 text-slate-900" : "text-slate-700 hover:bg-slate-100"}
                  `
                }
              >
                {/* ICON ALWAYS VISIBLE */}
                <Icon size={20} />

                {/* LABEL ONLY ON DESKTOP */}
                <span className="hidden md:inline text-sm">{l.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
