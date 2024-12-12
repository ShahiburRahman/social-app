"use client";
import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Team", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <span className="ml-3 text-xl font-semibold">Your Logo</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                  <span className="ml-3">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-4 lg:ml-64 mt-16">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};