"use client";

import React, { useState } from 'react';
import type { Product } from '@/data/products';
import clsx from 'clsx';

const ProductSpecifications = ({ product }: { product: Product }) => {
    if (!product.specifications) return null;

    const specCategories = Object.keys(product.specifications);
    const [activeTab, setActiveTab] = useState(specCategories[0]);

    return (
        <div className="mt-16 border-t border-gray-200 pt-16 lg:mt-24 lg:pt-24">
            <h2 className="text-center text-3xl font-bold text-gray-900">Spesifikasi Motor {product.name}</h2>
            <div className="mt-8 max-w-4xl mx-auto">
                {/* --- Tombol Tab --- */}
                <div className="mb-8 border-b border-gray-200">
                    <nav className="-mb-px flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Tabs">
                        {specCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={clsx(
                                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors',
                                    activeTab === category
                                        ? 'border-red-600 text-red-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* --- Konten Tab --- */}
                <div>
                    <ul className="divide-y divide-gray-200">
                        {Object.entries(product.specifications[activeTab]).map(([key, value]) => (
                            <li key={key} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:items-center">
                                <span className="font-semibold text-gray-800">{key}</span>
                                <span className="text-gray-600 sm:text-right">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecifications;
