import React from 'react';
import Link from 'next/link';
import { Download, Store, Tag, Bike } from 'lucide-react';

const actionButtons = [
    { name: "Download Brochure", icon: Download, href: "#" },
    { name: "Dealer", icon: Store, href: "#" },
    { name: "Cek Promo", icon: Tag, href: "#" },
    { name: "Test Ride", icon: Bike, href: "#" },
];

const ProductActionButtons = () => {
    return (
        <div className="my-12 lg:my-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {actionButtons.map((button) => (
                    <Link
                        key={button.name}
                        href={button.href}
                        className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-semibold text-gray-800 transition-all hover:border-red-500 hover:bg-white hover:text-red-600"
                    >
                        <button.icon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-red-600" />
                        <span>{button.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductActionButtons;
