"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
    Home, Info, Tag, Megaphone, CalendarDays, Bike, Network,
    Users, Newspaper, Briefcase, Phone, Search, ChevronDown, X,
} from "lucide-react";
import logoHonda from "@/../public/images/home/logo-honda.png";
import logoDAW from "@/../public/images/home/Logo-DAW.png";

const menuItems = [
    { name: "HOME", href: "/", icon: Home, desktop: false, mobile: true },
    { name: "PRODUK", href: "/produk", icon: Tag, desktop: "main", mobile: true },
    { name: "PROMO", href: "/", icon: Megaphone, desktop: "main", mobile: true },
    { name: "BERITA", href: "/", icon: Newspaper, desktop: "main", mobile: true },
    { name: "EVENT", href: "/", icon: CalendarDays, desktop: "main", mobile: true },
    { name: "HUBUNGI KAMI", href: "/", icon: Phone, desktop: "main", mobile: true },
    { name: "TENTANG KAMI", href: "/", icon: Info, desktop: "lainnya", mobile: true },
    { name: "SAFETY RIDING", href: "/", icon: Bike, desktop: "lainnya", mobile: true },
    { name: "JARINGAN", href: "/", icon: Network, desktop: "lainnya", mobile: true },
    { name: "KOMUNITAS", href: "/", icon: Users, desktop: "lainnya", mobile: true },
    { name: "KARIR", href: "/", icon: Briefcase, desktop: "lainnya", mobile: true },
];

const mainNavItems = menuItems.filter(item => item.desktop === "main");
const otherNavItems = menuItems.filter(item => item.desktop === "lainnya");
const mobileNavItems = menuItems.filter(item => item.mobile);

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [lainnyaOpen, setLainnyaOpen] = useState(false);
    const lainnyaRef = useRef<HTMLLIElement>(null);

    const closeAll = useCallback(() => {
        setMobileOpen(false);
        setSearchOpen(false);
        setLainnyaOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (lainnyaRef.current && !lainnyaRef.current.contains(e.target as Node)) {
                setLainnyaOpen(false);
            }
        };
        if (lainnyaOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [lainnyaOpen]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeAll();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [closeAll]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileOpen, searchOpen]);

    return (
        <>
            <header className="sticky top-0 inset-x-0 z-50 h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6">
                {/* Mobile Burger + Center Logo */}
                <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-start">
                    <button
                        onClick={() => setMobileOpen(prev => !prev)}
                        className="w-5 h-5 relative flex flex-col justify-center items-center md:hidden"
                        aria-label="Toggle menu"
                    >
                        <span className={clsx("absolute w-full h-0.5 bg-gray-800 rounded transition-all", mobileOpen ? "rotate-45" : "-translate-y-1.5")} />
                        <span className={clsx("absolute w-full h-0.5 bg-gray-800 rounded transition-all", mobileOpen && "opacity-0")} />
                        <span className={clsx("absolute w-full h-0.5 bg-gray-800 rounded transition-all", mobileOpen ? "-rotate-45" : "translate-y-1.5")} />
                    </button>

                    {/* Logo DAW */}
                    <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
                        <a href="/" className="block">
                            <Image
                                src={logoDAW}
                                alt="Logo Daya Adicipta Wisesa"
                                className="h-10 w-auto object-contain"
                                priority
                            />
                        </a>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 h-full">
                    <ul className="flex items-center gap-8 text-sm font-semibold text-gray-800 h-full">
                        {mainNavItems.map(({ name, href }) => (
                            <li key={name} className="h-full flex items-center">
                                <a href={href} className="hover:text-red-600 transition">{name}</a>
                            </li>
                        ))}
                        {/* LAINNYA Dropdown */}
                        <li ref={lainnyaRef} className="relative h-full flex items-center group">
                            <button
                                onClick={() => setLainnyaOpen(prev => !prev)}
                                className="flex items-center gap-1.5 hover:text-red-600 transition"
                            >
                                LAINNYA
                                <ChevronDown size={16} className={clsx("transition-transform", lainnyaOpen ? "rotate-180" : "group-hover:rotate-180")} />
                            </button>
                            <div className={clsx(
                                "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-md shadow-lg transition-all z-10",
                                lainnyaOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                            )}>
                                <ul className="p-2">
                                    {otherNavItems.map(({ name, href, icon: Icon }) => (
                                        <li key={name}>
                                            <a href={href} className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-50 transition">
                                                <Icon size={20} />
                                                <span className="text-sm font-medium">{name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>

                {/* Search & Honda Logo*/}
                <div className="flex items-center gap-5 h-full md:-mr-6 -mr-4">
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="p-2 text-black hover:text-red-600 transition"
                        aria-label="Open search"
                    >
                        <Search strokeWidth={3} className="w-6 h-6" />
                    </button>

                    {/* Logo Honda */}
                    <div className="h-full bg-red-600 flex items-center">
                        <Image
                            src={logoHonda}
                            alt="Logo Honda"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </header>

            {/* Search Overlay */}
            <div className={clsx(
                "fixed inset-0 bg-white/95 backdrop-blur-sm z-[60] transition duration-300 flex justify-center",
                searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
                <div className="w-full max-w-2xl px-4 mt-24">
                    <form action="/search" method="GET" className="relative flex items-center">
                        <Search className="w-6 h-6 absolute left-4 text-gray-500 pointer-events-none" strokeWidth={2.5} />
                        <input
                            type="search"
                            name="q"
                            placeholder="Cari produk, berita, promo..."
                            className="w-full h-16 bg-gray-100 rounded-lg pl-14 pr-8 text-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                            autoFocus
                        />
                    </form>
                </div>
                <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black hover:rotate-90 transition"
                    aria-label="Close search"
                >
                    <X size={32} />
                </button>
            </div>

            <div
                className={clsx("fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 md:hidden", mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none")}
                onClick={closeAll}
                aria-hidden="true"
            />

            {/* Mobile Sidebar Menu */}
            <aside className={clsx(
                "fixed top-16 left-0 h-[calc(100vh-4rem)] w-3/4 max-w-sm bg-white z-40 p-6 shadow-lg transition-transform duration-300 md:hidden",
                mobileOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <nav>
                    <ul className="space-y-5">
                        {mobileNavItems.map(({ name, href, icon: Icon }) => (
                            <li key={name}>
                                <a href={href} className="flex items-center gap-3 text-gray-900 hover:text-red-600 font-bold uppercase text-base">
                                    <Icon size={20} strokeWidth={2.5} />
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Navbar;
