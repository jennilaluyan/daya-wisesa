"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, ArrowRight } from 'lucide-react';

const footerLinks = [
    {
        title: "Jelajahi",
        links: [
            { name: "Produk", href: "/produk" },
            { name: "Promo", href: "/" },
            { name: "Berita", href: "/" },
            { name: "Event", href: "/" },
        ],
    },
    {
        title: "Perusahaan",
        links: [
            { name: "Tentang Kami", href: "/" },
            { name: "Safety Riding", href: "/" },
            { name: "Karir", href: "/" },
        ],
    },
    {
        title: "Dukungan",
        links: [
            { name: "Hubungi Kami", href: "/" },
            { name: "Jaringan", href: "/" },
            { name: "Komunitas", href: "/" },
        ],
    },
];

const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/toranghonda", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/toranghonda/", icon: Instagram },
    { name: "Youtube", href: "https://www.youtube.com/channel/UC5EO_BUBPbO3v0_hJDpYL3g", icon: Youtube },
];

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">
            <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-2 lg:grid-cols-12">

                    {/* Contact Info */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <a href="/" className="mb-6 inline-block text-xl font-bold text-white transition-colors hover:text-red-600">
                            PT. Daya Adicipta Wisesa
                        </a>
                        <p className="max-w-xs text-sm leading-6">
                            Jl. Raya Manado-Bitung KM 10 Kalawat – Minahasa Utara,
                            Sulawesi Utara
                        </p>
                        <div className="mt-6 space-y-3 text-sm">
                            <a href="tel:0431812128" className="flex items-center justify-start gap-3 transition-colors hover:text-red-600">
                                <Phone size={16} />
                                <span>(0431) 811999</span>
                            </a>
                            <a href="mailto:contact@daya-motora.com" className="flex items-center justify-start gap-3 transition-colors hover:text-red-600">
                                <Mail size={16} />
                                <span>it@daya-wisesa.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-3 md:col-span-2 lg:col-span-6">
                        {footerLinks.map((column) => (
                            <div key={column.title}>
                                <h3 className="font-semibold uppercase tracking-wider text-white">
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-sm transition-colors hover:text-red-600">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Subscribe Newsletter */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <h3 className="font-semibold uppercase tracking-wider text-white">
                            Berlangganan Newsletter
                        </h3>
                        <p className="mt-4 text-sm">
                            Dapatkan berita, promo, dan event terbaru langsung ke email Anda.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-6 flex items-center max-w-sm"
                        >
                            <label htmlFor="email-address" className="sr-only">Alamat Email</label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 flex-auto appearance-none rounded-l-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                placeholder="Masukkan alamat email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-r-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
                    <p className="text-center text-sm text-gray-400 sm:text-left">
                        © {new Date().getFullYear()} PT Daya Adicipta Wisesa. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="text-gray-400 transition-colors hover:text-red-600"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
