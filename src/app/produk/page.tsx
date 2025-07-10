"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/general/Navbar';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { allProducts, productCategories } from '@/data/products'; // Impor dari file data
import Footer from '@/components/general/Footer';

// --- Komponen Kartu Produk ---
const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
    // Menggunakan gambar pertama dari array warna sebagai gambar utama
    const mainImage = product.featureImage || `https://placehold.co/500x400/e2e8f0/4a5568?text=${product.name}`;

    return (
        <div className="group flex flex-col overflow-hidden rounded-lg bg-gray-50 text-left">
            {/* --- Gambar Produk --- */}
            <div className="relative h-64 w-full">
                <Image
                    src={mainImage}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-8 transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                />
            </div>

            {/* --- Info Produk --- */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Harga mulai</p>
                        <p className="text-xl font-semibold text-gray-800">Rp. {product.price}</p>
                    </div>
                </div>

                {/* --- Tombol Aksi --- */}
                <div className="mt-6">
                    <a
                        href={`/produk/${product.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600"
                    >
                        <span>Selengkapnya</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

// --- Komponen Halaman Produk ---
const ProdukPage = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredProducts = useMemo(() => {
        if (activeCategory === "Semua") {
            return allProducts;
        }
        return allProducts.filter(product => product.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="bg-white">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                {/* --- Filter Kategori --- */}
                <div className="mb-12">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Pilih Motor Favorit Anda
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {productCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={clsx(
                                    "relative pb-2 text-lg font-semibold transition-colors",
                                    activeCategory === category
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-800"
                                )}
                            >
                                {category}
                                {activeCategory === category && (
                                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-red-600" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Grid Produk --- */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProdukPage;
