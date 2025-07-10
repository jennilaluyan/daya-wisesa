import React from 'react';
import { notFound } from 'next/navigation';
import { allProducts } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductSpecifications from '@/components/products/ProductSpecifications';
import ProductRecommendations from '@/components/products/ProductReccomendations';
import ProductGallerySlider from '@/components/products/ProductGallerySlider';
import ProductActionButtons from '@/components/products/ProductActionButtons';
import ProductAccessories from '@/components/products/ProductAccessories';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';

// --- Tipe untuk props halaman dinamis ---
type ProductDetailPageProps = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
    return allProducts.map((product) => ({
        slug: product.slug,
    }));
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
    const { slug } = params;
    const product = allProducts.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Navbar />
            <main>
                {/* --- Bagian Atas Halaman (Slider) --- */}
                <section>
                    {product.galleryImages && <ProductGallerySlider images={product.galleryImages} />}
                </section>

                <section className="container mx-auto max-w-7xl px-6 py-12 lg:py-16">
                    {/* Info Utama & Pilihan Warna */}
                    <ProductDetailClient product={product} />
                    {/* Tombol Aksi */}
                    <ProductActionButtons />
                </section>

                {/* Bagian Fitur Interaktif */}
                <ProductFeatures product={product} />

                {/* Bagian Daftar Harga & Spesifikasi */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-6">
                        {product.priceList && (
                            <div>
                                <h2 className="text-center text-3xl font-bold text-gray-900">Daftar Harga {product.name}</h2>
                                <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-lg border border-gray-200">
                                    <table className="min-w-full">
                                        <thead className="bg-gray-100 hidden sm:table-header-group">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tipe</th>
                                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {product.priceList.map((item) => (
                                                <tr key={item.type} className="block sm:table-row border-b sm:border-none">
                                                    <td className="px-6 py-4 whitespace-nowrap block sm:table-cell">
                                                        <div className="sm:hidden text-xs font-medium uppercase text-gray-500 mb-1">Tipe</div>
                                                        <div className="text-sm font-medium text-gray-900">{item.type}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap block sm:table-cell sm:text-right">
                                                        <div className="sm:hidden text-xs font-medium uppercase text-gray-500 mb-1">Harga</div>
                                                        <div className="text-sm text-gray-700">Rp. {item.price}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-center text-xs text-gray-500 mt-4">*Harga yang tertera adalah OTR (On The Road) dan dapat berbeda di setiap daerah.</p>
                            </div>
                        )}
                        <ProductSpecifications product={product} />
                    </div>
                </section>

                {/* Bagian Aksesoris */}
                <ProductAccessories product={product} />

                {/* Bagian Rekomendasi Produk */}
                <section className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                    <ProductRecommendations currentProductSlug={product.slug} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;