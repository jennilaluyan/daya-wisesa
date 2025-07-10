"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { X } from 'lucide-react';

// --- Custom Hook for Media Query ---
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
    return matches;
};

const ProductFeatures = ({ product }: { product: Product }) => {
    const [activeFeature, setActiveFeature] = useState<{ name: string; description: string; image?: string; } | null>(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Jangan render komponen ini jika tidak ada data fitur
    if (!product.featureImage || !product.features || product.features.length === 0) {
        return null;
    }

    const handleFeatureClick = (feature: typeof activeFeature) => {
        setActiveFeature(feature);
    };

    const handleCloseModal = () => {
        setActiveFeature(null);
    };

    return (
        <div className="border-t border-gray-200 py-16 lg:py-24">
            <h2 className="text-center text-3xl font-bold text-gray-900">Fitur Unggulan</h2>
            <div className="relative mt-8 max-w-4xl mx-auto">
                <Image
                    src={product.featureImage}
                    alt={`Fitur ${product.name}`}
                    width={1000}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    unoptimized
                />
                {/* --- Feature Dots --- */}
                {product.features.map((feature, index) => (
                    <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ top: feature.position.top, left: feature.position.left }}
                        onMouseEnter={!isMobile ? () => setActiveFeature(feature) : undefined}
                        onMouseLeave={!isMobile ? () => setActiveFeature(null) : undefined}
                        onClick={isMobile ? () => handleFeatureClick(feature) : undefined}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute h-6 w-6 rounded-full bg-red-500 opacity-75 animate-ping"></div>
                            <div className="relative h-4 w-4 rounded-full bg-red-600 border-2 border-white cursor-pointer"></div>

                            {/* --- DESKTOP Tooltip --- */}
                            {!isMobile && activeFeature && activeFeature.name === feature.name && (
                                <div className="absolute bottom-full mb-3 w-64 overflow-hidden rounded-lg bg-white shadow-2xl z-10 pointer-events-none animate-fade-in">
                                    {feature.image && (
                                        <div className="relative h-32 w-full bg-gray-100">
                                            <Image src={feature.image} alt={feature.name} fill style={{ objectFit: 'cover' }} unoptimized />
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <h4 className="font-bold text-gray-900">{feature.name}</h4>
                                        <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MOBILE Modal --- */}
            {isMobile && activeFeature && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in"
                    onClick={handleCloseModal}
                >
                    <div
                        className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {activeFeature.image && (
                            <div className="relative h-48 w-full bg-gray-100">
                                <Image src={activeFeature.image} alt={activeFeature.name} fill style={{ objectFit: 'cover' }} unoptimized />
                            </div>
                        )}
                        <div className="p-6 relative">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-3 right-3 h-7 w-7 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300"
                                aria-label="Tutup"
                            >
                                <X size={18} />
                            </button>
                            <h4 className="font-bold text-gray-900 text-lg pr-8">{activeFeature.name}</h4>
                            <p className="mt-2 text-sm text-gray-600">{activeFeature.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <p className="text-center text-sm text-gray-500 mt-4">
                {isMobile ? 'Klik pada titik untuk melihat detail fitur.' : 'Arahkan kursor pada titik untuk melihat detail fitur.'}
            </p>
        </div>
    );
};

export default ProductFeatures;
