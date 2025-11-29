import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import ComponentsShowcase from "@/pages/ComponentsShowcase";
import Settings from "@/pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<ComponentsShowcase />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
