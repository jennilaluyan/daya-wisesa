import React from 'react';
import Image from 'next/image';
import { allProducts, Product } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const ProductRecommendations = ({ currentProductSlug }: { currentProductSlug: string }) => {
    // Rekomendasikan 3 produk lain secara acak, kecuali produk yang sedang dilihat
    const recommendations = allProducts
        .filter(p => p.slug !== currentProductSlug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    if (recommendations.length === 0) return null;

    return (
        <div className="mt-16 border-t border-gray-200 py-16 lg:py-24">
            <h2 className="text-center text-3xl font-bold text-gray-900">Rekomendasi Lainnya</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((product) => (
                    <div key={product.slug} className="group flex flex-col overflow-hidden rounded-lg bg-gray-50 text-left">
                        <div className="relative h-64 w-full">
                            <Image
                                src={product.colors[0]?.imageSrc || ''}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="p-8 transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Harga mulai</p>
                                    <p className="text-xl font-semibold text-gray-800">Rp. {product.price}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a href={`/produk/${product.slug}`} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600">
                                    <span>Selengkapnya</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductRecommendations;
