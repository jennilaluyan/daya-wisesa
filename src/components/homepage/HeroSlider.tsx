"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        desktop: "/images/home/hero-slide1.jpg",
        mobile: "/images/home/hero-mobile-slide1.jpg",
        alt: "A person enjoying a scenic mountain view"
    },
    {
        desktop: "/images/home/hero-slide2.jpg",
        mobile: "/images/home/hero-mobile-slide2.jpg",
        alt: "Modern architecture with a clean design"
    },
    {
        desktop: "/images/home/hero-slide3.jpg",
        mobile: "/images/home/hero-mobile-slide3.jpg",
        alt: "A serene beach at sunset"
    },
    {
        desktop: "/images/home/hero-slide4.jpg",
        mobile: "/images/home/hero-mobile-slide4.jpg",
        alt: "A bustling city street at night"
    },
    {
        desktop: "/images/home/hero-slide5.jpg",
        mobile: "/images/home/hero-mobile-slide5.jpg",
        alt: "A tranquil forest path in autumn"
    },
];

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

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

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % slides.length
        );
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="relative h-[93vh] w-full overflow-hidden bg-black">
            {/* Slides Container */}
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-full w-full flex-shrink-0">
                        <Image
                            src={isMobile ? slide.mobile : slide.desktop}
                            alt={slide.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                            unoptimized
                            onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/1920x1080/333/FFF?text=${isMobile ? 'Mobile' : 'Desktop'}+Slide+${index + 1}`;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Conditional Arrow Navigation for Mobile */}
            {isMobile && (
                <>
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:left-4"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:right-4"
                    >
                        <ChevronRight size={28} />
                    </button>
                </>
            )}

            {/* Bottom Indicators */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-3 md:bottom-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className="group cursor-pointer"
                    >
                        <div
                            className={`transition-all duration-300 ease-in-out group-hover:bg-white
                ${isMobile ? 'h-2.5 w-2.5 rounded-full' : 'h-1 w-12'}
                ${currentIndex === index ? 'bg-white' : 'bg-white/50'}
              `}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
