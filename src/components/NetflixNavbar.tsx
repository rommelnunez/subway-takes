"use client";

import { Search, Bell, Home, MonitorPlay, Film, Plus, RotateCw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NetflixSidebar() {
    const navItems = [
        { icon: Search, label: "Search" },
        { icon: Home, label: "Home", active: true },
        { icon: MonitorPlay, label: "Shows" },
        { icon: Film, label: "Movies" },
        { icon: RotateCw, label: "New & Popular" },
        { icon: Plus, label: "My List" },
    ];

    return (
        <nav className="fixed left-0 top-0 w-16 md:w-24 h-full z-50 flex flex-col items-center py-8 bg-gradient-to-r from-black/80 to-transparent md:bg-transparent">
            {/* Mobile/Tablet background might be needed, but reference shows transparency on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent w-full h-full -z-10 md:w-[150%] pointer-events-none" />

            <div className="flex flex-col gap-10 text-gray-400">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href="#"
                        className={cn(
                            "p-2 text-gray-400 hover:text-white transition-colors relative group flex justify-center",
                            item.active && "text-white font-bold"
                        )}
                    >
                        <item.icon className={cn("w-6 h-6", item.active && "stroke-[3px]")} />
                        {/* Tooltip for hover (optional, but good for icon-only nav) */}
                        <span className="absolute left-full ml-4 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-50 pointer-events-none">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="mt-auto flex flex-col gap-8 text-white mb-4">
                <Bell className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                <div className="w-8 h-8 rounded bg-blue-600 cursor-pointer flex items-center justify-center font-bold text-xs">
                    :)
                </div>
            </div>
        </nav>
    );
}
