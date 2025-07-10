// Definisikan tipe data untuk setiap produk
export type Product = {
    slug: string;
    name: string;
    category: "Matic" | "Sport" | "Cub" | "EV" | "BigBike";
    price: string; // Harga awal
    galleryImages?: string[]; // Gambar untuk slider galeri di atas
    description?: string;
    features?: {
        name: string;
        description: string;
        position: { top: string; left: string; };
        image?: string;
    }[];
    featureImage?: string;
    priceList?: {
        type: string;
        price: string;
    }[];
    specifications?: {
        [key: string]: { [key: string]: string };
    };
    colors: {
        name: string;
        hex: string;
        imageSrc: string;
    }[];
    // Data untuk aksesoris terkait
    accessories?: {
        name: string;
        imageSrc: string;
        href: string;
    }[];
};

// --- Data Produk ---
export const allProducts: Product[] = [
    {
        slug: "beat",
        name: "BeAT",
        category: "Matic",
        price: "18,930,000",
        galleryImages: [
            '/images/produk/matic/beat/slider1.jpg',
            '/images/produk/matic/beat/slider2.jpg',
            '/images/produk/matic/beat/slider3.jpg',
        ],
        featureImage: '/images/produk/matic/beat/beat.png',
        features: [
            { name: 'Anti Theft Alarm', description: 'Sistem keamanan Anti Theft Alarm, untuk memberikan keamanan tambahan saat memarkirkan sepeda motor *Tersedia pada tipe CBS dan Deluxe CBS-ISS', position: { top: '17%', left: '68%' }, image: '/images/produk/matic/beat/anti-theft-alarm.jpg' },
            { name: 'Combined Digital Panel Meter', description: 'Semakin stylish dengan panel meter yang canggih dilengkapi lampu indikator ECO untuk kemudahan informasi berkendara', position: { top: '20%', left: '63%' }, image: '/images/produk/matic/beat/digital-panel-meter.jpg' },
            { name: 'Tuas Pengunci Rem', description: 'Mencegah motor loncat saat mesin dihidupkan dan lebih nyaman saat berhenti di tanjakan atau turunan', position: { top: '22%', left: '68%' }, image: '/images/produk/matic/beat/pengunci-rem.jpg' },
            { name: 'Smart Key System', description: 'Teknologi remotre canggih, dimana tidak lagi memerlukan kunci mekanis untuk mengoperasikan kunci stang/menghidupkan mesin. *Tersedia pada tipe Deluxe Smart Key', position: { top: '31%', left: '66%' }, image: '/images/produk/matic/beat/smart-key.jpg' },
            { name: 'Functional Hook', description: 'Membawa barang semakin mudah dengan adanya gantungan di depan.', position: { top: '37%', left: '64%' }, image: '/images/produk/matic/beat/functional-hook.jpg' },
            { name: 'Power Charger', description: 'Up to Date kan terus duniamu dengan power charger. *Daya maksimal 12 W (12V 1A)', position: { top: '43%', left: '67%' }, image: '/images/produk/matic/beat/power-charger.jpg' },
            { name: 'Sistem Pencahayaan LED', description: 'Sistem pencahayaan dengan teknologi LED berdesain modern membuat tampilanmu semakin keren', position: { top: '41%', left: '84%' }, image: '/images/produk/matic/beat/pencahayaan.jpg' },
            { name: 'Standar Samping Otomatis', description: 'Mesin tidak dapat dinyalakan saat standar samping dalam posisi turun sehingga mencegah pengendara lupa menaikkan standar samping', position: { top: '75%', left: '60%' }, image: '/images/produk/matic/beat/standar-otomatis.jpg' },
            { name: 'Bagasi Pas 12L', description: 'Sekali ada tempat buat barang lebih banyak dengan kapasitas bagasi yang lebih besar.', position: { top: '43%', left: '40%' }, image: '/images/produk/matic/beat/bagasi.jpg' }
        ],
        priceList: [
            { type: 'BeAT CBS', price: '18,930,000' },
            { type: 'BeAT Deluxe', price: '19,801,000' },
            { type: 'BeAT Deluxe Smart Key', price: '20,331,000' },
        ],
        specifications: {
            "Mesin": {
                "Tipe Mesin": "4 – Langkah, SOHC, eSP",
                "Diameter x Langkah": "47.0 x 63.1 mm",
                "Volume Langkah": "109,5cc",
                "Perbandingan Kompresi": "10,0 : 1",
                "Daya Maksimum": "6.6 kW (9.0 PS) / 7.500 rpm",
                "Torsi Maksimum": "9.2 N.m (0.94 kgf.m) / 6000 rpm",
                "Kopling": "Otomatis, Sentrifugal, Tipe Kering",
                "Starter": "Elektrik dan Kick Starter (Tipe CBS), Elektrik (Tipe Deluxe & Deluxe Smart Key)",
                "Busi": "NGK MR9C-9N",
                "Sistem Bahan Bakar": "Injeksi (PGM-FI)",
                "Transmisi": "Otomatis, V-Matic",
                "Sistem Pengapian": "Full Transistorized"
            },
            "Rangka & Kaki-Kaki": {
                "Tipe Rangka": "Tulang Punggung – eSAF (enhance Smart Architecture Frame)",
                "Tipe Suspensi Depan": "Teleskopik",
                "Tipe Suspensi Belakang": "Lengan Ayun dengan Peredam Kejut Tunggal",
                "Ukuran Ban Depan": "80/90 - 14 M/C 40P Tubeless",
                "Ukuran Ban Belakang": "90/90 - 14 M/C 46P Tubeless",
                "Rem Depan": "Cakram Hidrolik dengan Piston Tunggal",
                "Rem Belakang": "Tromol",
                "Sistem Pengereman": "Combi Brake System"
            },
            "Dimensi": {
                "Panjang x Lebar x Tinggi": "1876 x 669 x 1080 mm",
                "Jarak Sumbu Roda": "1.255 mm",
                "Jarak Terendah Ke Tanah": "148 mm",
                "Berat Kosong": "88 kg (tipe CBS), 87 kg (tipe Deluxe & Deluxe Smart Key)",
                "Tinggi Tempat Duduk": "742 mm"
            },
            "Kapasitas": {
                "Kapasitas Tangki Bahan Bakar": "4.2 L",
                "Kapasitas Minyak Pelumas": "0.65 Liter (Penggantian Periodik)"
            },
            "Kelistrikan": {
                "Kelistrikan": "MF 12V-3Ah (Tipe CBS)",
                "Sistem Pengapian": "MF 12V-5Ah (Tipe Deluxe & Deluxe Smart Key)"
            }
        },
        colors: [
            {
                name: 'Deluxe Matte Blue',
                hex: '#606b86',
                imageSrc: '/images/produk/matic/beat/matte-blue.png'
            },
            {
                name: 'Deluxe Matte Green',
                hex: '#52695a',
                imageSrc: '/images/produk/matic/beat/matte-green.png'
            },
            {
                name: 'Deluxe Matte Black',
                hex: '#282a2e',
                imageSrc: '/images/produk/matic/beat/matte-black.png'
            },
            {
                name: 'Deluxe Black',
                hex: '#767879',
                imageSrc: '/images/produk/matic/beat/deluxe-black.png'
            },
            {
                name: 'Deluxe Matte Silver',
                hex: '#a8afc1',
                imageSrc: '/images/produk/matic/beat/matte-silver.png'
            },
            {
                name: 'Funk Red Black',
                hex: '#dd413b',
                imageSrc: '/images/produk/matic/beat/funk-red-black.png'
            },
            {
                name: 'Hard Rock Black',
                hex: '#27292b',
                imageSrc: '/images/produk/matic/beat/hard-rock-black.png'
            },
            {
                name: 'Jazz White Black',
                hex: '#eae9ec',
                imageSrc: '/images/produk/matic/beat/jazz-white-black.png'
            }
        ],
        accessories: [
            { name: "Fashion Helmet", imageSrc: "/images/produk/fashion-helmet.png", href: "#" },
            { name: "One Heart Magnetic Tumbler", imageSrc: "/images/produk/tumbler.png", href: "#" },
            { name: "Sporty Jacket", imageSrc: "/images/produk/sporty-jacket.png", href: "#" }
        ]
    },
    {
        slug: "cbr250rr",
        name: "CBR250RR",
        category: "Sport",
        price: "66,985,000",
        galleryImages: [
            '/images/produk/sport/cbr250rr/slide1.jpg',
            '/images/produk/sport/cbr250rr/slide2.jpg',
            '/images/produk/sport/cbr250rr/slide3.jpg',
        ],
        featureImage: '/images/produk/sport/cbr250rr/cbr250rr.png',
        features: [
            {
                name: '3 Step Riding Mode with Throttle By Wire',
                description: 'Pilihan 3 mode berkendara yang disesuaikan dengan sensasi berkendara dengan sistem tuas kabel elektrik yang mengatur keseimbangan kerja mesin dengan sempurna dan tepat sehingga menghasilkan power yang berbeda di setiap mode​',
                position: { top: '30%', left: '73%' },
                image: '/images/produk/sport/cbr250rr/throttle.jpg'
            },
            {
                name: 'New! Big Bike Appearance​',
                description: 'Fairing lebih besar sehingga terlihat seperti motor besar​​',
                position: { top: '35%', left: '60%' },
                image: '/images/produk/sport/cbr250rr/big-bike-appearance.jpg'
            },
            {
                name: 'New! All LED Lighting System with Hazard Lamp​',
                description: 'Berfungsi untuk memberikan tanda kepada pengendara lain jika dalam keadaan bahaya​​',
                position: { top: '30%', left: '13%' },
                image: '/images/produk/sport/cbr250rr/hazard-lamp-back.jpg'
            },
            {
                name: 'New! Powerful Engine with Higher Power​',
                description: 'Mesin lebih bertenaga dikarenakan rasio kompresi yang naik karena ada perubahan di kepala cylinder​',
                position: { top: '64%', left: '53%' },
                image: '/images/produk/sport/cbr250rr/engine.png'
            },
            {
                name: 'Assist/Slipper Clutch​',
                description: 'Teknologi yang memberikan kenyamanan dengan tarikan tuas kopling yang lebih ringan dan mengurangi engine brake impact yang dapat menyebabkan resiko slip ketika deselerasi terutama saat kondisi jalan basah​​',
                position: { top: '63%', left: '56%' },
                image: '/images/produk/sport/cbr250rr/clutch.jpg'
            },
            {
                name: 'Quick Shifter​',
                description: 'Memberikan efek pada saat perpindahan gigi naik atau turun tanpa menarik tuas kopling dan menurunkan gas ketika bermanuver untuk mendapatkan akselerasi yang maksimal​',
                position: { top: '77%', left: '58%' },
                image: '/images/produk/sport/cbr250rr/shifter.jpg'
            },
            {
                name: 'New! Inverted Front Suspension SFF-BP​',
                description: 'Suspensi bagian depan dengan piston besar yang memberikan kenyamanan dan kestabilan dalam bermanuver di tiap tikungan​​',
                position: { top: '58%', left: '81%' },
                image: '/images/produk/sport/cbr250rr/suspension.jpg'
            },
            {
                name: 'All LED Lighting System​',
                description: 'Desain bagian depan yang agresif , dipadukan dengan LED Combination Light, membuat Anda tampil berkarakter​​',
                position: { top: '43%', left: '90%' },
                image: '/images/produk/sport/cbr250rr/hazard-lamp-front.jpg'
            }
        ],
        priceList: [
            { type: 'CBR250RR - STD Black Freedom', price: '66,985,000' },
            { type: 'CBR250RR - STD Mat Gunpowder Black Metallic', price: '71,785,000' },
            { type: 'CBR250RR - SP Mystique Blue', price: '78,921,000' },
            { type: 'CBR250RR - SPQS Bravery Red Black', price: '82,971,000' },
            { type: 'CBR250RR - SPQS Honda Racing Red', price: '83,570,000' },
            { type: 'CBR250RR - SPQS Honda Tricolor', price: '83,570,000' },
        ],
        specifications: {
            "Mesin": {
                "Tipe Mesin": "4-Stroke, 8-Valve, Parallel Twin Cylinder",
                "Kapasitas Mesin": "249.7 cc",
                "Sistem Suplai Bahan Bakar": "PGM-FI",
                "Diameter X Langkah": "62,0 x 41,4 mm",
                "Tipe Transmisi": "Manual, 6 Speed",
                "Rasio Kompresi": "11,5 : 1 (STD), 12,5 : 1 (SP | SPQS)",
                "Daya Maksimum": "28,5 kW (38,7 PS) / 12.500 rpm (STD), 31 kW (42 PS) / 13.000 rpm (SP | SPQS)",
                "Torsi Maksimum": "23,3 Nm (2,4 kgf.m) / 11.000 rpm (STD), 25 Nm (2,5 kgf.m) / 11.000 rpm (SP | SPQS)",
                "Tipe Starter": "Electric",
                "Tipe Kopling": "Multiple Wet Clutch with Coil Spring",
                "Sistem Pendingin Mesin": "Liquid Cooled With Auto Electric Fan",
                "Pola Perpindahan Gigi": "1-N-2-3-4-5-6",
                "Jenis Pelumas": "Wet (Pressing and Spray)",
                "Kapasitas Oli": "1,9 L"
            },
            "Rangka & Kaki-Kaki": {
                "Tipe Rangka": "Diamond (Truss) Frame",
                "Tipe Suspensi Depan": "Inverted Telescopic Front Suspension",
                "Tipe Suspensi Belakang": "Aluminum Swing Arm (5 Adjustable Mono Suspension with Pro-Link System)",
                "Ukuran Ban Depan": "110/70 – 17 54S (Tubeless)",
                "Ukuran Ban Belakang": "140/70 – 17 66S (Tubeless)",
                "Rem Depan": "Hydraulic Disc, Dual Piston",
                "Rem Belakang": "Hydraulic Disc, Single Piston"
            },
            "Dimensi & Berat": {
                "Panjang X Lebar X Tinggi": "2.061 x 724 x 1.114 mm",
                "Tinggi Tempat Duduk": "790 mm",
                "Jarak Sumbu Roda": "1.385 mm",
                "Jarak Terendah Ke Tanah": "148 mm",
                "Curb Weight": "166 kg (STD), 168 kg (SP | SP QS)",
                "Kapasitas Tangki": "14,5 liter"
            },
            "Kapasitas": {
                "Kapasitas Tangki Bahan Bakar": "14,5 L",
                "Kapasitas Minyak Pelumas": "1,9 L"
            },
            "Kelistrikan": {
                "Tipe Baterai atau Aki": "MF-Wet 12V – 7 Ah",
                "Sistem Pengapian": "Full Transistorized",
                "Tipe Busi": "NGK SILMAR8C-9 (Iridium Spark Plug) (STD & SP | SP QS)"
            }
        },
        colors: [
            { name: 'Bravery Red Black', hex: '#A51C30', imageSrc: '/images/produk/sport/cbr250rr/black-freedom.png' },
            { name: 'Mystique Blue', hex: '#363a43', imageSrc: '/images/produk/sport/cbr250rr/mystique-blue.png' },
            { name: 'Mat Gunpowder Black Metallic', hex: '#35363a', imageSrc: '/images/produk/sport/cbr250rr/black-metallic.png' },
            { name: 'Black Freedom', hex: '#000100', imageSrc: '/images/produk/sport/cbr250rr/black-freedom.png' },
            { name: 'Honda Racing Red', hex: '#ad241f', imageSrc: '/images/produk/sport/cbr250rr/racing-red.png' },
            { name: 'Honda Tricolor', hex: '#182297', imageSrc: '/images/produk/sport/cbr250rr/tricolor.png' }
        ],
        accessories: [
            { name: "Fashion Helmet", imageSrc: "/images/produk/fashion-helmet.png", href: "#" },
            { name: "One Heart Magnetic Tumbler", imageSrc: "/images/produk/tumbler.png", href: "#" },
            { name: "Sporty Jacket", imageSrc: "/images/produk/sporty-jacket.png", href: "#" }
        ]
    }
];

export const productCategories = ["Semua", "Matic", "Sport", "Cub", "EV", "BigBike"];
