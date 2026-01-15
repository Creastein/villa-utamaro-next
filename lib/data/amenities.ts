import { Droplets, Waves, Compass, Bath, Utensils, Tv, Sun, Heart } from "lucide-react";

interface Highlight {
    icon: any;
    title: string;
    description: string;
}

interface AmenityCategory {
    category: string;
    icon: any;
    items: string[];
}

export const highlights = {
    en: [
        {
            icon: Droplets,
            title: "Infinity Pool",
            description: "Swim with breathtaking open ocean views.",
        },
        {
            icon: Waves,
            title: "Surf Access",
            description: "Steps away from world-class Gerupuk surf spots.",
        },
        {
            icon: Compass,
            title: "Zen Design",
            description: "Minimalist architecture blending with nature's harmony.",
        },
    ],
    id: [
        {
            icon: Droplets,
            title: "Infinity Pool",
            description: "Berenang dengan pemandangan laut lepas yang menakjubkan.",
        },
        {
            icon: Waves,
            title: "Surf Access",
            description: "Langkah kaki menuju titik selancar kelas dunia Gerupuk.",
        },
        {
            icon: Compass,
            title: "Zen Design",
            description: "Arsitektur minimalis yang menyatu dengan harmoni alam.",
        },
    ]
};

export const amenities = {
    en: [
        {
            category: "Bath & Bedroom",
            icon: Bath,
            items: [
                "Bathtub",
                "Shower",
                "Toiletries",
                "Hair Dryer",
                "Premium Linens",
                "Wardrobe & Safe",
            ],
        },
        {
            category: "Kitchen & Dining",
            icon: Utensils,
            items: [
                "Full Kitchen",
                "Dining Table",
                "Microwave",
                "Washing Machine",
                "Oven",
                "Toaster",
            ],
        },
        {
            category: "Media & Connectivity",
            icon: Tv,
            items: [
                "Netflix Access",
                "Smart TV 4K",
                "High-Speed Wi-Fi",
                "Dedicated Workspace",
            ],
        },
        {
            category: "Outdoor & Wellness",
            icon: Sun,
            items: [
                "Private Pool (Infinity)",
                "BBQ Facilities",
                "Sun Terrace",
                "Massage Services",
                "Tropical Garden",
            ],
        },
        {
            category: "Activities (Extra)",
            icon: Heart,
            items: [
                "Snorkeling",
                "Diving",
                "Hiking",
                "Cooking Class",
                "Cultural Tour",
            ],
        },
    ],
    id: [
        {
            category: "Kamar Mandi & Kamar Tidur",
            icon: Bath,
            items: [
                "Bathtub",
                "Shower",
                "Peralatan mandi",
                "Pengering rambut",
                "Seprai Premium",
                "Lemari & Brankas",
            ],
        },
        {
            category: "Dapur & Ruang Makan",
            icon: Utensils,
            items: [
                "Dapur Lengkap",
                "Meja Makan",
                "Microwave",
                "Mesin Cuci",
                "Oven",
                "Alat Pemanggang Roti",
            ],
        },
        {
            category: "Media & Konektivitas",
            icon: Tv,
            items: [
                "Netflix Access",
                "Smart TV 4K",
                "High-Speed Wi-Fi",
                "Area Kerja Dedicated",
            ],
        },
        {
            category: "Outdoor & Wellness",
            icon: Sun,
            items: [
                "Private Pool (Infinity)",
                "Fasilitas BBQ",
                "Teras Berjemur",
                "Layanan Pijat",
                "Taman Tropis",
            ],
        },
        {
            category: "Aktivitas (Extra)",
            icon: Heart,
            items: [
                "Snorkeling",
                "Diving",
                "Hiking",
                "Kelas Memasak",
                "Tur Budaya",
            ],
        },
    ]
};
