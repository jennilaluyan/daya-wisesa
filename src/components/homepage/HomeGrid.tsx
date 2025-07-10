"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Tag,
    Newspaper,
    CalendarDays,
    Bike,
    Network,
    Users,
    ArrowRight,
} from 'lucide-react';
import clsx from 'clsx';

const gridItems = [
    {
        title: "Promo Terbaru",
        description: "Penawaran dan promo spesial untuk Anda.",
        href: "/",
        icon: Tag,
        imageSrc: "/images/home/promo.jpg",
        gridClass: "lg:col-span-2"
    },
    {
        title: "Berita & Artikel",
        description: "Informasi terkini dari dunia Honda.",
        href: "/",
        icon: Newspaper,
        imageSrc: "/images/home/berita.jpeg",
        gridClass: "lg:col-span-1"
    },
    {
        title: "Event Mendatang",
        description: "Jangan lewatkan acara seru kami.",
        href: "/",
        icon: CalendarDays,
        imageSrc: "/images/home/event.jpg",
        gridClass: "lg:col-span-1"
    },
    {
        title: "Safety Riding",
        description: "Tips berkendara aman dan nyaman.",
        href: "/",
        icon: Bike,
        imageSrc: "/images/home/safety-riding.jpg",
        gridClass: "lg:col-span-1"
    },
    {
        title: "Jaringan",
        description: "Temukan dealer terdekat di kota Anda.",
        href: "/",
        icon: Network,
        imageSrc: "/images/home/jaringan.png",
        gridClass: "lg:col-span-1"
    },
    {
        title: "Komunitas Honda",
        description: "Bergabung dengan ribuan bikers lainnya.",
        href: "/",
        icon: Users,
        imageSrc: "/images/home/promo.jpg",
        gridClass: "lg:col-span-3"
    },
];

// The Bento Grid Component
const HomeGrid = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto max-w-7xl px-3 sm:px-6 py-12 lg:py-20">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Selalu Terhubung Dengan Kami
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                        Dapatkan informasi terbaru seputar produk, layanan, promo, dan event eksklusif dari Daya Adicipta Wisesa.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {gridItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={clsx(
                                "group relative flex flex-col justify-end overflow-hidden rounded-lg p-6 text-white shadow-md transition-all duration-300 hover:shadow-xl",
                                "min-h-[250px] lg:min-h-[300px]",
                                item.gridClass
                            )}
                        >
                            {/* Background Image */}
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="relative z-20">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-600/80">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span>Lihat Selengkapnya</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeGrid;
