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
// We will define the props inline in the component signature to avoid type inference issues.
// type ProductDetailPageProps = {
//     params: { slug: string };
//     searchParams?: { [key: string]: string | string[] | undefined };
// };

// This function generates static paths for each product at build time.
// The 'async' keyword is not needed here as no await operations are performed.
export function generateStaticParams() {
    return allProducts.map((product) => ({
        slug: product.slug,
    }));
}

// The page component for displaying product details.
// Props are typed inline to ensure compatibility with Next.js PageProps.
const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const product = allProducts.find((p) => p.slug === slug);

    // If the product with the given slug is not found, render the 404 page.
    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Navbar />
            <main>
                {/* --- Top Section (Gallery Slider) --- */}
                <section>
                    {product.galleryImages && <ProductGallerySlider images={product.galleryImages} />}
                </section>

                <section className="container mx-auto max-w-7xl px-6 py-12 lg:py-16">
                    {/* Main Info & Color Options */}
                    <ProductDetailClient product={product} />
                    {/* Action Buttons */}
                    <ProductActionButtons />
                </section>

                {/* Interactive Features Section */}
                <ProductFeatures product={product} />

                {/* Price List & Specifications Section */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-6">
                        {product.priceList && (
                            <div className="mb-16">
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

                {/* Accessories Section */}
                <ProductAccessories product={product} />

                {/* Product Recommendations Section */}
                <section className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                    <ProductRecommendations currentProductSlug={product.slug} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
