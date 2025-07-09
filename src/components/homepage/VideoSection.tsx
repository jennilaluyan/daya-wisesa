"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircle, X } from 'lucide-react';

const videoItems = [
    {
        title: "BeAT Deluxe Smart Key x Kobo Kanaeru",
        thumbnailSrc: "/images/home/video1.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=oiabItkVyrI"
    },
    {
        title: "New Honda CB650R - Minimalist Perfection",
        thumbnailSrc: "/images/home/video2.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=weD1FstWQjw"
    },
    {
        title: "Kebersamaan dalam berbagi",
        thumbnailSrc: "/images/home/video4.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=y7_-gwdOg2Q"
    },
    {
        title: "Vario 160 - Gedeiin Nyali Tampil Lebih Sporty",
        thumbnailSrc: "/images/home/video3.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=_L2dVbCZzTw"
    },
    {
        title: "Mengapa servis motor harus di AHASS??",
        thumbnailSrc: "/images/home/video5.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=Y5iwAZIZ53U"
    }
];

const VideoSection = () => {
    const duplicatedVideos = [...videoItems, ...videoItems, ...videoItems, ...videoItems];
    const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

    const openModal = (url: string) => {
        try {
            const videoId = new URL(url).searchParams.get('v');
            if (videoId) {
                setActiveVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
            } else {
                console.error("YouTube video ID not found in URL:", url);
            }
        } catch (error) {
            console.error("Invalid YouTube URL:", url, error);
        }
    };

    const closeModal = () => {
        setActiveVideoUrl(null);
    };

    useEffect(() => {
        if (activeVideoUrl) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeVideoUrl]);

    return (
        <>
            <section>
                <div className="py-12 lg:py-20">
                    {/* --- Section Header --- */}
                    <div className="mb-12 px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Galeri Video
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                            Tonton video terbaru kami seputar review produk, tips berkendara, dan liputan event eksklusif.
                        </p>
                    </div>

                    {/* --- Infinite Marquee Slider --- */}
                    <div className="group flex overflow-hidden whitespace-nowrap">
                        <div className="flex animate-marquee-slow group-hover:pause">
                            {duplicatedVideos.map((video, index) => (
                                <button
                                    key={`video-${index}`}
                                    onClick={() => openModal(video.youtubeUrl)}
                                    className="group/item relative mx-4 h-56 w-96 flex-shrink-0 overflow-hidden rounded-lg shadow-lg text-left"
                                    aria-label={`Play video: ${video.title}`}
                                >
                                    {/* --- Thumbnail Image --- */}
                                    <Image
                                        src={video.thumbnailSrc}
                                        alt={video.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 ease-in-out group-hover/item:scale-110"
                                        unoptimized
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/384x224/333/FFF?text=${video.title}`;
                                        }}
                                    />
                                    {/* --- Gradient Overlay & Play Icon --- */}
                                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover/item:bg-black/60">
                                        <PlayCircle className="h-16 w-16 text-white/70 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-white" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Modal --- */}
            {activeVideoUrl && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the video player
                    >
                        <iframe
                            src={activeVideoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                        ></iframe>
                        <button
                            onClick={closeModal}
                            className="absolute -top-3 -right-3 z-10 h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="Close video player"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoSection;
