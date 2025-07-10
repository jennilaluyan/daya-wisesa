"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Product Data ---
const products = [
    {
        name: "Super Cub C125",
        category: "Legendary Cub",
        imageSrc: "/images/home/super-cub.png",
        href: "/"
    },
    {
        name: "Genio",
        category: "Fashionable Scooter",
        imageSrc: "/images/home/genio.png",
        href: "/"
    },
    {
        name: "Forza",
        category: "Premium Sport Scooter",
        imageSrc: "/images/home/forza.png",
        href: "/"
    },
    {
        name: "CB150R",
        category: "Naked Sport Bike",
        imageSrc: "/images/home/cb150r.png",
        href: "/"
    }
];

const getWrappedIndex = (index: number, length: number) => {
    return (index + length) % length;
};

const NewProducts = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => getWrappedIndex(prevIndex + 1, products.length));
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prevIndex) => getWrappedIndex(prevIndex - 1, products.length));
    }, []);

    return (
        <section className="w-full overflow-hidden bg-white text-gray-900">
            <div className="container mx-auto px-6 py-12 lg:py-20">

                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-red-600">
                        Produk Terbaru
                    </h2>
                    <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                        Temukan Gaya Anda
                    </p>
                </div>

                {/* Slider */}
                <div className="relative mt-12 flex h-[35vh] items-center md:h-[45vh] lg:h-[50vh]">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 shadow-md transition hover:bg-white hover:scale-110 focus:outline-none lg:left-8"
                        aria-label="Previous Product"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 shadow-md transition hover:bg-white hover:scale-110 focus:outline-none lg:right-8"
                        aria-label="Next Product"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Slides */}
                    <div className="relative h-full w-full flex justify-center items-center overflow-hidden">
                        {[-1, 0, 1].map((offset) => {
                            const index = getWrappedIndex(activeIndex + offset, products.length);
                            const product = products[index];

                            return (
                                <div
                                    key={product.name}
                                    className={`absolute transition-all duration-500 ease-in-out`}
                                    style={{
                                        transform: `translateX(${offset * 100}%) scale(${offset === 0 ? 1 : 0.75})`,
                                        opacity: offset === 0 ? 1 : 0.5,
                                        zIndex: offset === 0 ? 10 : 5,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={product.imageSrc}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="drop-shadow-xl transition-transform"
                                            unoptimized
                                            priority={offset === 0}
                                            onError={(e) => {
                                                e.currentTarget.src = `https://placehold.co/800x600/e2e8f0/4a5568?text=${product.name}`;
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Product Info */}
                <div className="relative mt-8 text-center">
                    <p className="font-semibold uppercase tracking-wider text-red-600">{products[activeIndex].category}</p>
                    <h3 className="mt-1 text-4xl font-bold lg:text-6xl">{products[activeIndex].name}</h3>
                    <Link
                        href={products[activeIndex].href}
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        <span>Lihat Detail</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewProducts;
