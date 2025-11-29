

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/nav/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
export default function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Mobile top bar (ALWAYS outside flex!) */}
      <div className="md:hidden">
        <MobileNav onOpen={() => setIsMobileOpen(true)} />
      </div>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-64 border-r bg-white">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl p-4">
            <Sidebar onNavigate={() => setIsMobileOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
