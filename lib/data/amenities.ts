import { Droplets, Car, CigaretteOff, Wifi, Bath, Utensils, Tv, Sun, Heart, Plane } from "lucide-react";

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
            title: "Outdoor Pool",
            description: "Private infinity pool with stunning ocean views.",
        },
        {
            icon: Plane,
            title: "Airport Shuttle",
            description: "Convenient airport transfer service available.",
        },
        {
            icon: CigaretteOff,
            title: "Non-smoking Rooms",
            description: "Fresh and clean spacious living environments.",
        },
        {
            icon: Car,
            title: "Free Parking",
            description: "Secure private parking on hotel premises.",
        },
        {
            icon: Wifi,
            title: "Free WiFi",
            description: "High-speed internet access throughout the villa.",
        },
    ],
    id: [
        {
            icon: Droplets,
            title: "Kolam Renang Outdoor",
            description: "Kolam renang infinity pribadi dengan pemandangan laut.",
        },
        {
            icon: Plane,
            title: "Antar-jemput Bandara",
            description: "Layanan transfer bandara tersedia untuk kenyamanan Anda.",
        },
        {
            icon: CigaretteOff,
            title: "Kamar Bebas Rokok",
            description: "Lingkungan hidup yang segar, bersih, dan luas.",
        },
        {
            icon: Car,
            title: "Parkir Gratis",
            description: "Parkir pribadi aman tersedia di lokasi properti.",
        },
        {
            icon: Wifi,
            title: "WiFi Gratis",
            description: "Akses internet berkecepatan tinggi di seluruh area vila.",
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
