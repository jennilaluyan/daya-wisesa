import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allProducts } from '@/data/products';
import type { Product } from '@/data/products';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';
import ProductGallerySlider from '@/components/products/ProductGallerySlider';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import ProductActionButtons from '@/components/products/ProductActionButtons';
import ProductSpecifications from '@/components/products/ProductSpecifications';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductAccessories from '@/components/products/ProductAccessories';

// 1. Tipe Props diubah untuk secara eksplisit menyatakan 'params' adalah Promise.
type Props = {
    params: Promise<{ slug: string }>;
};

// Fungsi untuk mendapatkan data produk berdasarkan slug
function getProductFromSlug(slug: string): Product | undefined {
    return allProducts.find((p) => p.slug === slug);
}

// 2. 'generateMetadata' juga harus 'async' dan menggunakan 'await' pada 'params'.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // 'await' untuk membuka Promise dan mendapatkan isi 'params'
    const { slug } = await params;
    const product = getProductFromSlug(slug);

    if (!product) {
        return {
            title: 'Produk Tidak Ditemukan',
        };
    }

    return {
        title: `PT. Daya Adicipta Wisesa`,
        description: `Lihat detail, spesifikasi, dan harga terbaru untuk Honda ${product.name}.`,
        openGraph: {
            images: [product.colors[0]?.imageSrc || ''],
        },
    };
}

// Fungsi ini sudah benar, tidak perlu diubah
export async function generateStaticParams() {
    return allProducts.map((product) => ({
        slug: product.slug,
    }));
}

// --- Komponen Halaman Detail Produk ---

// 3. Komponen halaman harus 'async'
export default async function ProductPage({ params }: Props) {
    // 4. Gunakan 'await' untuk mendapatkan nilai dari 'params' sebelum digunakan
    const { slug } = await params;
    const product = getProductFromSlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-gray-50">
            <Navbar />
            <main>
                <ProductGallerySlider images={product.galleryImages || []} />
                <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-24">
                    <ProductDetailClient product={product} />
                    <ProductActionButtons />
                    <ProductFeatures product={product} />
                    <ProductSpecifications product={product} />
                    <ProductAccessories product={product} />
                </div>
            </main>
            <Footer />
        </div>
    );
}