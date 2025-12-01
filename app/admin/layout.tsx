"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Scissors,
  PhoneCall,
  Settings,
  Logs,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Services", href: "/admin/services", icon: Scissors },
    { name: "Calendar", href: "/admin/calendar", icon: Calendar },
    { name: "Agent Logs", href: "/admin/logs", icon: Logs },
    { name: "Calls", href: "/admin/calls", icon: PhoneCall },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0E1628] border-r border-[#1a2333] px-4 py-6 flex flex-col">
        {/* LOGO */}
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="h-10 w-10 bg-[#111b2e] rounded-xl relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-[#00E5FF] opacity-20 blur-xl" />
            <span className="relative text-[#00E5FF] text-xl font-bold">F</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg">ForConnect</span>
            <span className="text-gray-400 text-xs">Admin Panel</span>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-[#1d263b] transition",
                  pathname === item.href && "bg-[#1d263b] border-l-4 border-[#00E5FF]"
                )}
              >
                <item.icon className="h-5 w-5 text-gray-300" />
                <span className="text-gray-200 text-sm">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* THEME SWITCH */}
        <div className="mt-10 px-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-full text-gray-200 hover:bg-white/10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
