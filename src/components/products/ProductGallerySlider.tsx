"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProductGallerySlider = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full overflow-hidden bg-gray-100">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="relative h-[92vh] w-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Product gallery image ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                            unoptimized
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 w-10 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGallerySlider;
