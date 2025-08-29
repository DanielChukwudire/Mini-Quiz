import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const icons: Record<string, string> = {
  Login: "🔑",
  Chat: "💬",
  Email: "✉️",
  Calendar: "📅",
  Ecommerce: "🛒",
  "HR Management": "👔",
  Notes: "📝",
  Social: "🌐",
  Friends: "👫",
  Event: "🎉",
  "Watch Video": "🎬",
  Marketplace: "🏪",
  Invoices: "🧾",
};
const features = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Login", path: "" },
  { name: "Chat", path: "chat" },
  { name: "Email", path: "email" },
  { name: "Calendar", path: "calendar" },
  { name: "Ecommerce", path: "ecommerce" },
  { name: "HR Management", path: "hr-management" },
  { name: "Notes", path: "notes" },
  { name: "Social", path: "social" },
  { name: "Friends", path: "friends" },
  { name: "Event", path: "event" },
  { name: "Watch Video", path: "watch-video" },
  { name: "Marketplace", path: "marketplace" },
  { name: "Invoices", path: "invoices" },
];
const VerticalNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="h-screen w-64 bg-white border-r border-blue-100 flex flex-col shadow-xl fixed top-0 left-0 z-50">
      <div className="flex items-center justify-center py-8 mb-2 border-b border-blue-100 bg-gradient-to-r from-blue-700 to-blue-500">
        <span className="text-3xl font-extrabold tracking-wide text-white drop-shadow">
          MyApp
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 px-2">
        <ul className="flex flex-col gap-1">
          {features.map((f) => {
            let isActive = false;
            let navTo = `/vertical-login/${f.path}`;
            if (f.path === "/") {
              navTo = "/";
              isActive = location.pathname === "/";
            } else if (f.path === "/about") {
              navTo = "/about";
              isActive = location.pathname === "/about";
            } else {
              isActive =
                location.pathname.endsWith(`/vertical-login/${f.path}`) ||
                (f.path === "" && location.pathname === "/vertical-login");
            }
            return (
              <li key={f.path}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left text-base font-semibold hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:bg-blue-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-blue-900"
                  }`}
                  onClick={() => navigate(navTo)}
                >
                  <span className="text-xl">{icons[f.name] || "🏠"}</span>
                  <span>{f.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col items-center pb-6">
        <button
          className="w-11/12 py-3 mb-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-lg hover:from-green-500 hover:to-green-700 font-bold text-base transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <span>⬅️</span> Back to Dashboard
        </button>
        <div className="text-xs text-blue-400 mt-2">
          &copy; {new Date().getFullYear()} MyApp
        </div>
      </div>
    </aside>
  );
};

export default VerticalNavbar;
