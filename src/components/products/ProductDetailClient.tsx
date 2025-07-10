"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products'; // Impor tipe data

// --- Komponen Client untuk bagian interaktif ---
const ProductDetailClient = ({ product }: { product: Product }) => {
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const activeColor = product.colors[activeColorIndex];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* --- Galeri Gambar --- */}
            <div className="flex flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                        key={activeColor.imageSrc}
                        src={activeColor.imageSrc}
                        alt={`${product.name} in ${activeColor.name}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-8"
                        unoptimized
                    />
                </div>
                <div className="flex items-center gap-3">
                    {product.colors.map((color, index) => (
                        <button
                            key={color.name}
                            title={color.name}
                            onClick={() => setActiveColorIndex(index)}
                            className="h-16 w-16 rounded-md overflow-hidden border-2 transition-all"
                            style={{ borderColor: activeColorIndex === index ? '#DC2626' : 'transparent' }}
                        >
                            <Image
                                src={color.imageSrc}
                                alt={color.name}
                                width={64}
                                height={64}
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Informasi Produk --- */}
            <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-red-600">{product.category}</span>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{product.name}</h1>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">Harga mulai</p>
                    <p className="text-3xl font-bold text-gray-800">Rp. {product.price}</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Pilihan Varian: <span className="font-normal text-gray-700">{activeColor.name}</span></h2>
                    <div className="mt-4 flex items-center gap-3">
                        {product.colors.map((color, index) => (
                            <button
                                key={color.name}
                                title={color.name}
                                onClick={() => setActiveColorIndex(index)}
                                className="h-8 w-8 rounded-full border-2 transition"
                                style={{
                                    backgroundColor: color.hex,
                                    borderColor: activeColorIndex === index ? '#DC2626' : '#E5E7EB'
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <a href="#" className="inline-block w-full rounded-md bg-red-600 px-8 py-3 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-red-700 sm:w-auto">
                        Hubungi Dealer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailClient;
