import {
    Maximize2,
    Bed,
    Wind,
    Waves
} from "lucide-react";

interface VillaHighlight {
    icon: any;
    label: string;
    value: string;
}

interface Bedroom {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    bedType: string;
    view: string;
    viewIcon: any;
    features: string[];
    image: string;
}

export const villaHighlights = {
    en: [
        { icon: Maximize2, label: "Villa Size", value: "400m²" },
        { icon: Bed, label: "Bedrooms", value: "4 Rooms" },
        { icon: Wind, label: "Atmosphere", value: "Serene" },
    ],
    id: [
        { icon: Maximize2, label: "Luas Villa", value: "400m²" },
        { icon: Bed, label: "Kamar Tidur", value: "4 Kamar" },
        { icon: Wind, label: "Suasana", value: "Tenang" },
    ]
};

export const bedrooms = {
    en: [
        {
            id: 1,
            name: "Bedroom 1",
            subtitle: "Spacious Master Suite",
            description: "A luxurious bedroom featuring a king bed and 3 single beds, perfect for families. Equipped with modern amenities including air conditioning, ceiling fan, and a mini fridge for your convenience.",
            bedType: "1 King + 3 Single",
            view: "Ocean View",
            viewIcon: Waves,
            features: [
                "King Bed",
                "3 Single Beds",
                "Air Conditioning",
                "Bed Linen",
                "Ceiling Fan",
                "Wardrobe",
                "Clothes Hanger",
                "Blackout Curtains",
                "Safety Deposit Box",
                "Mini Fridge",
                "Mosquito Net"
            ],
            image: "/images/kamar-1.jpg"
        },
        {
            id: 2,
            name: "Bedroom 2",
            subtitle: "Comfortable King Room",
            description: "An elegant bedroom with a king bed and single bed, featuring a beautiful bathtub. Perfect for couples or small families seeking comfort and relaxation.",
            bedType: "1 King + 1 Single",
            view: "Garden View",
            viewIcon: Waves,
            features: [
                "King Bed",
                "Single Bed",
                "Air Conditioning",
                "Bed Linen",
                "Ceiling Fan",
                "Wardrobe",
                "Clothes Hanger",
                "Blackout Curtains",
                "Bathtub"
            ],
            image: "/images/kamar-2.jpg"
        },
        {
            id: 3,
            name: "Bedroom 3",
            subtitle: "Cozy King Suite",
            description: "A peaceful retreat with a king bed and single bed, complete with mosquito netting for a restful night's sleep. Designed for comfort and tranquility.",
            bedType: "1 King + 1 Single",
            view: "Pool View",
            viewIcon: Waves,
            features: [
                "King Bed",
                "Single Bed",
                "Wardrobe",
                "Ceiling Fan",
                "Bed Linen",
                "Air Conditioning",
                "Clothes Hanger",
                "Blackout Curtains",
                "Mosquito Net"
            ],
            image: "/images/kamar-3.jpg"
        },
        {
            id: 4,
            name: "Bedroom 4",
            subtitle: "Simple & Comfortable",
            description: "A simple yet comfortable bedroom equipped with essential amenities for a pleasant stay. Features air conditioning and ample storage space.",
            bedType: "Twin Beds",
            view: "Garden View",
            viewIcon: Waves,
            features: [
                "Air Conditioning",
                "Bed Linen",
                "Wardrobe",
                "Extra Pillows & Blankets",
                "Clothes Hanger",
                "Blackout Curtains",
                "Safety Deposit Box"
            ],
            image: "/images/kamar-4.jpg"
        }
    ],
    id: [
        {
            id: 1,
            name: "Kamar Tidur 1",
            subtitle: "Master Suite Luas",
            description: "Kamar tidur mewah yang menampilkan tempat tidur king dan 3 tempat tidur single, sempurna untuk keluarga. Dilengkapi dengan fasilitas modern termasuk AC, kipas angin langit-langit, dan kulkas mini untuk kenyamanan Anda.",
            bedType: "1 King + 3 Single",
            view: "Pemandangan Laut",
            viewIcon: Waves,
            features: [
                "Tempat Tidur King",
                "3 Tempat Tidur Single",
                "AC",
                "Seprai",
                "Kipas Angin Langit-langit",
                "Tempat Penyimpanan Pakaian",
                "Gantungan Baju",
                "Gorden Peneduh Ruangan",
                "Aman (Safety Box)",
                "Kulkas Mini",
                "Kelambu"
            ],
            image: "/images/kamar-1.jpg"
        },
        {
            id: 2,
            name: "Kamar Tidur 2",
            subtitle: "Kamar King Nyaman",
            description: "Kamar tidur elegan dengan tempat tidur king dan single, dilengkapi dengan bak mandi yang indah. Sempurna untuk pasangan atau keluarga kecil yang mencari kenyamanan dan relaksasi.",
            bedType: "1 King + 1 Single",
            view: "Pemandangan Taman",
            viewIcon: Waves,
            features: [
                "Tempat Tidur King",
                "Tempat Tidur Single",
                "AC",
                "Seprai",
                "Kipas Angin Langit-langit",
                "Tempat Penyimpanan Pakaian",
                "Gantungan Baju",
                "Gorden Peneduh Ruangan",
                "Bak Mandi"
            ],
            image: "/images/kamar-2.jpg"
        },
        {
            id: 3,
            name: "Kamar Tidur 3",
            subtitle: "Suite King yang Nyaman",
            description: "Tempat peristirahatan yang tenang dengan tempat tidur king dan single, lengkap dengan kelambu untuk tidur yang nyenyak. Dirancang untuk kenyamanan dan ketenangan.",
            bedType: "1 King + 1 Single",
            view: "Pemandangan Kolam",
            viewIcon: Waves,
            features: [
                "Tempat Tidur King",
                "Tempat Tidur Single",
                "Tempat Penyimpanan Pakaian",
                "Kipas Angin Langit-langit",
                "Seprai",
                "AC",
                "Gantungan Baju",
                "Gorden Peneduh Ruangan",
                "Kelambu"
            ],
            image: "/images/kamar-3.jpg"
        },
        {
            id: 4,
            name: "Kamar Tidur 4",
            subtitle: "Sederhana & Nyaman",
            description: "Kamar tidur sederhana namun nyaman yang dilengkapi dengan fasilitas penting untuk menginap yang menyenangkan. Dilengkapi dengan AC dan ruang penyimpanan yang luas.",
            bedType: "Tempat Tidur Twin",
            view: "Pemandangan Taman",
            viewIcon: Waves,
            features: [
                "AC",
                "Seprai",
                "Tempat Penyimpanan Pakaian",
                "Bantal dan Selimut Ekstra",
                "Gantungan Baju",
                "Gorden Peneduh Ruangan",
                "Aman (Safety Box)"
            ],
            image: "/images/kamar-4.jpg"
        }
    ]
};
