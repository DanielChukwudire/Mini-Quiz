import React from "react";
import { Routes, Route } from "react-router-dom";
import VerticalNavbar from "./verticalbar";
import Login from "../AuthPage/Login";

const features = [
  {
    name: "Chat",
    path: "chat",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Chat Room</h2>
        <p>Start chatting with your friends and colleagues in real time.</p>
      </div>
    ),
  },
  {
    name: "Email",
    path: "email",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Inbox</h2>
        <p>Check your latest emails and send new messages.</p>
      </div>
    ),
  },
  {
    name: "Calendar",
    path: "calendar",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Calendar</h2>
        <p>View and manage your events and meetings.</p>
      </div>
    ),
  },
  {
    name: "Ecommerce",
    path: "ecommerce",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Ecommerce</h2>
        <p>Browse and manage your online store products and orders.</p>
      </div>
    ),
  },
  {
    name: "HR Management",
    path: "hr-management",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">HR Management</h2>
        <p>Manage employee records, payroll, and HR tasks.</p>
      </div>
    ),
  },
  {
    name: "Notes",
    path: "notes",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Notes</h2>
        <p>Write and organize your notes for quick access.</p>
      </div>
    ),
  },
  {
    name: "Social",
    path: "social",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Social Feed</h2>
        <p>See updates and posts from your network.</p>
      </div>
    ),
  },
  {
    name: "Friends",
    path: "friends",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Friends</h2>
        <p>Manage your friends list and connect with new people.</p>
      </div>
    ),
  },
  {
    name: "Event",
    path: "event",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Events</h2>
        <p>Discover and join upcoming events.</p>
      </div>
    ),
  },
  {
    name: "Watch Video",
    path: "watch-video",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Watch Video</h2>
        <p>Watch educational and entertaining videos.</p>
      </div>
    ),
  },
  {
    name: "Marketplace",
    path: "marketplace",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Marketplace</h2>
        <p>Buy and sell items in the marketplace.</p>
      </div>
    ),
  },
  {
    name: "Invoices",
    path: "invoices",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Invoices</h2>
        <p>View and manage your invoices and billing information.</p>
      </div>
    ),
  },
];

const FeatureDashboard: React.FC<{
  feature: string;
  content: React.ReactNode;
}> = ({ feature, content }) => (
  <div className="p-8 bg-white rounded-lg shadow-md min-h-[300px]">
    <h2 className="text-2xl font-bold mb-4">{feature} Dashboard</h2>
    {content}
  </div>
);

const VerticalLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <VerticalNavbar />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="" element={<Login hideHorizontalNavbar />} />
            {features.map((f) => (
              <Route
                key={f.path}
                path={f.path}
                element={
                  <FeatureDashboard feature={f.name} content={f.content} />
                }
              />
            ))}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default VerticalLayout;
