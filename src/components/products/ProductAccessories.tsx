import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';

const ProductAccessories = ({ product }: { product: Product }) => {
    if (!product.accessories || product.accessories.length === 0) {
        return null;
    }

    // Tampilkan maksimal 3 item
    const displayedItems = product.accessories.slice(0, 3);

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Aksesoris & Apparel</h2>
                    <a href="#" className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-800">
                        <span>Lihat Semua</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedItems.map((item) => (
                        <div key={item.name} className="group flex flex-col overflow-hidden rounded-lg bg-gray-50 text-left">
                            {/* --- Gambar Aksesoris --- */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="p-8 transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                            </div>

                            {/* --- Info Aksesoris --- */}
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                                </div>

                                {/* --- Tombol Aksi --- */}
                                <div className="mt-6">
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600"
                                    >
                                        <span>Lihat Detail</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductAccessories;
