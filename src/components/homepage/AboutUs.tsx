"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import dayaWisesaPlace from "@/../public/images/home/about-us.jpg";

const AboutUs = () => {
    return (
        <section className="bg-gray-50 text-gray-800">
            <div className="container mx-auto max-w-7xl px-6 pb-12 pt-20 lg:pb-20 lg:pt-40">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Image Section */}
                    <div className="order-last lg:order-first">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={dayaWisesaPlace}
                                alt="Kantor Pusat Daya Adicipta Wisesa"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-red-600">
                            Tentang Kami
                        </h2>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            PT Daya Adicipta Wisesa
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            PT. Daya Adicipta Wisesa adalah perusahaan yang bergerak di industri otomotif sebagai Main Dealer Sepeda Motor Honda dan suku cadang asli Sepeda Motor Honda untuk wilayah Sulawesi Utara, Gorontalo, dan Maluku Utara.
                        </p>
                        <div className="mt-10">
                            <a
                                href="/#"
                                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Selengkapnya
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
