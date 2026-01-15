import {
    Maximize2,
    Bed,
    Wind,
    Sun,
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
    size: string;
    bedType: string;
    view: string;
    viewIcon: any;
    features: string[];
    image: string;
}

export const villaHighlights = {
    en: [
        { icon: Maximize2, label: "Villa Size", value: "350m²" },
        { icon: Bed, label: "Bedrooms", value: "3 Suites" },
        { icon: Wind, label: "Atmosphere", value: "Serene" },
    ],
    id: [
        { icon: Maximize2, label: "Luas Villa", value: "350m²" },
        { icon: Bed, label: "Kamar Tidur", value: "3 Suite" },
        { icon: Wind, label: "Suasana", value: "Tenang" },
    ]
};

export const bedrooms = {
    en: [
        {
            id: 1,
            name: "The Master Suite",
            subtitle: "Commanding Ocean Views",
            description: "A sanctuary of glass and wood floating above the coastline. Wake up to a 180-degree panorama of the Indian Ocean. Features a private wraparound terrace and an en-suite with a soaking tub overlooking the waves.",
            size: "80m²",
            bedType: "Super King",
            view: "Ocean Panorama",
            viewIcon: Waves,
            features: [
                "Private Wraparound Terrace",
                "Ocean-View Soaking Tub",
                "Walk-in Wardrobe",
                "Double Rain Shower",
                "Writer's Desk"
            ],
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=75&w=800"
        },
        {
            id: 2,
            name: "The Garden Suite",
            subtitle: "Immersed in Tropical Flora",
            description: "Designed for grounding and connection. Large sliding doors erase the boundary between the bedroom and our curated Zen garden. Features an outdoor shower experience surrounded by lush greenery.",
            size: "65m²",
            bedType: "King (Convertible)",
            view: "Zen Garden",
            viewIcon: Sun,
            features: [
                "Direct Garden Access",
                "Outdoor Rain Shower",
                "Meditation Corner",
                "Reading Nook",
                "Smart Climate Control"
            ],
            image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=75&w=800"
        },
        {
            id: 3,
            name: "The Horizon Room",
            subtitle: "Where Sky Meets Sea",
            description: "Perched at the villa's highest point, offering intimate views of the surf breaks. A cozy, elevated retreat perfect for watching the sunrise or checking the waves without leaving your bed.",
            size: "60m²",
            bedType: "King",
            view: "Bay & Surf",
            viewIcon: Waves,
            features: [
                "Elevated Bay Views",
                "Private Balcony",
                "Workstation with View",
                "En-suite Bathroom",
                "Blackout Curtains"
            ],
            image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=75&w=800"
        }
    ],
    id: [
        {
            id: 1,
            name: "The Master Suite",
            subtitle: "Pemandangan Laut yang Memukau",
            description: "Tempat perlindungan dari kaca dan kayu yang mengapung di atas garis pantai. Bangun dengan panorama 180 derajat Samudra Hindia. Memiliki teras pribadi yang luas dan kamar mandi dalam dengan bak mandi yang menghadap ke ombak.",
            size: "80m²",
            bedType: "Super King",
            view: "Panorama Laut",
            viewIcon: Waves,
            features: [
                "Teras Pribadi Luas",
                "Bak Mandi Pemandangan Laut",
                "Lemari Pakaian Walk-in",
                "Shower Hujan Ganda",
                "Meja Tulis"
            ],
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=75&w=800"
        },
        {
            id: 2,
            name: "The Garden Suite",
            subtitle: "Tenggelam dalam Flora Tropis",
            description: "Dirancang untuk ketenangan dan koneksi. Pintu geser besar menghapus batas antara kamar tidur dan taman Zen kami yang terawat. Menampilkan pengalaman mandi di luar ruangan yang dikelilingi oleh tanaman hijau subur.",
            size: "65m²",
            bedType: "King (Dapat Diubah)",
            view: "Taman Zen",
            viewIcon: Sun,
            features: [
                "Akses Taman Langsung",
                "Shower Hujan Outdoor",
                "Sudut Meditasi",
                "Pojok Baca",
                "Kontrol Iklim Cerdas"
            ],
            image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=75&w=800"
        },
        {
            id: 3,
            name: "The Horizon Room",
            subtitle: "Langit Bertemu Laut",
            description: "Bertengger di titik tertinggi vila, menawarkan pemandangan intim dari ombak selancar. Tempat persembunyian yang nyaman dan tinggi, sempurna untuk menyaksikan matahari terbit atau memeriksa ombak tanpa meninggalkan tempat tidur Anda.",
            size: "60m²",
            bedType: "King",
            view: "Teluk & Ombak",
            viewIcon: Waves,
            features: [
                "Pemandangan Teluk Tinggi",
                "Balkon Pribadi",
                "Area Kerja dengan Pemandangan",
                "Kamar Mandi Dalam",
                "Tirai Blackout"
            ],
            image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=75&w=800"
        }
    ]
};
