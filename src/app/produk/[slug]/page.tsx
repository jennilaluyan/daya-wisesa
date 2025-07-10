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
import type { Metadata, ResolvingMetadata } from 'next';

// Generate metadata dynamically for each product page for better SEO.
// We are using an inline type for props here to ensure maximum compatibility.
export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const product = allProducts.find((p) => p.slug === params.slug);

    if (!product) {
        return {
            title: 'Produk Tidak Ditemukan',
            description: 'Halaman yang Anda cari tidak ada.',
        }
    }

    // Optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `${product.name} | PT. Daya Adicipta Wisesa`,
        description: `Detail, spesifikasi, dan harga terbaru untuk ${product.name}.`,
        openGraph: {
            images: [product.colors[0]?.imageSrc || '', ...previousImages],
        },
    }
}


export async function generateStaticParams() {
    return allProducts.map((product) => ({
        slug: product.slug,
    }));
}

// Apply the props type directly to the component's function signature.
// This is the most robust way to avoid type conflicts during the build process on Vercel.
export default async function Page({ params }: { params: { slug: string } }) {
    const product = allProducts.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <section>
                    {product.galleryImages && <ProductGallerySlider images={product.galleryImages} />}
                </section>

                <section className="container mx-auto max-w-7xl px-6 py-12 lg:py-16">
                    <ProductDetailClient product={product} />
                    <ProductActionButtons />
                </section>

                <ProductFeatures product={product} />

                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-6">
                        {product.priceList && (
                            <div>
                                <h2 className="text-center text-3xl font-bold text-gray-900">
                                    Daftar Harga {product.name}
                                </h2>
                                <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-lg border border-gray-200">
                                    <table className="min-w-full">
                                        <thead className="bg-gray-100 hidden sm:table-header-group">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tipe</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {product.priceList.map((item) => (
                                                <tr key={item.type} className="block sm:table-row border-b sm:border-none">
                                                    <td className="px-6 py-4 block sm:table-cell">
                                                        <div className="sm:hidden text-xs font-medium uppercase text-gray-500 mb-1">Tipe</div>
                                                        <div className="text-sm font-medium text-gray-900">{item.type}</div>
                                                    </td>
                                                    <td className="px-6 py-4 block sm:table-cell sm:text-right">
                                                        <div className="sm:hidden text-xs font-medium uppercase text-gray-500 mb-1">Harga</div>
                                                        <div className="text-sm text-gray-700">Rp. {item.price}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    *Harga yang tertera adalah OTR (On The Road) dan dapat berbeda di setiap daerah.
                                </p>
                            </div>
                        )}
                        <ProductSpecifications product={product} />
                    </div>
                </section>

                <ProductAccessories product={product} />

                <section className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                    <ProductRecommendations currentProductSlug={product.slug} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
