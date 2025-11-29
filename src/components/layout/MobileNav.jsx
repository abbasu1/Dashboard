import { Menu } from "lucide-react";

export default function MobileNav({ onOpen }) {
  return (
    <header className="md:hidden w-full border-b bg-white p-3 flex items-center justify-between">
      <button
        onClick={onOpen}
        className="p-2 rounded-md hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="text-lg font-semibold">Dashboard</div>

      {/* Placeholder (keeps layout balanced) */}
      <div className="w-6"></div>
    </header>
  );
}
