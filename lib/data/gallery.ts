export type GalleryCategory =
    | 'all'
    | 'living-room'
    | 'kitchen'
    | 'dining-area'
    | 'bedroom'
    | 'bathroom'
    | 'backyard'
    | 'patio-bbq'
    | 'balcony'
    | 'exterior'
    | 'additional';

export interface GalleryImage {
    src: string;
    thumbnail: string;
    title: string;
    description: string;
    category: Exclude<GalleryCategory, 'all'>;
}

export const galleryCategories: GalleryCategory[] = [
    'all',
    'living-room',
    'kitchen',
    'dining-area',
    'bedroom',
    'bathroom',
    'backyard',
    'patio-bbq',
    'balcony',
    'exterior',
    'additional'
];

export const galleryImages: GalleryImage[] = [
    // Living Room (4 images)
    {
        src: "/images/gallery/living-room-1.jpg",
        thumbnail: "/images/gallery/living-room-1.jpg",
        title: "Living Room",
        description: "Ceiling fan, TV",
        category: "living-room"
    },
    {
        src: "/images/gallery/living-room-2.jpg",
        thumbnail: "/images/gallery/living-room-2.jpg",
        title: "Living Room View",
        description: "Ceiling fan, TV",
        category: "living-room"
    },
    {
        src: "/images/gallery/living-room-3.jpg",
        thumbnail: "/images/gallery/living-room-3.jpg",
        title: "Living Area",
        description: "Ceiling fan, TV",
        category: "living-room"
    },
    {
        src: "/images/gallery/living-room-4.jpg",
        thumbnail: "/images/gallery/living-room-4.jpg",
        title: "Living Space",
        description: "Ceiling fan, TV",
        category: "living-room"
    },

    // Kitchen (3 images)
    {
        src: "/images/gallery/kitchen-1.jpg",
        thumbnail: "/images/gallery/kitchen-1.jpg",
        title: "Full Kitchen",
        description: "Blender, rice cooker, oven, basic cooking utensils, plates and cutlery, freezer, high chair, kettle, microwave, stove, toaster, wine glasses, ceiling fan, cleaning products, dining table, fire extinguisher, first aid kit, hot water, kitchenette",
        category: "kitchen"
    },
    {
        src: "/images/gallery/kitchen-2.jpg",
        thumbnail: "/images/gallery/kitchen-2.jpg",
        title: "Kitchen View",
        description: "Blender, rice cooker, oven, basic cooking utensils, plates and cutlery, freezer, high chair, kettle, microwave, stove, toaster, wine glasses, ceiling fan, cleaning products, dining table, fire extinguisher, first aid kit, hot water, kitchenette",
        category: "kitchen"
    },
    {
        src: "/images/gallery/kitchen-3.jpg",
        thumbnail: "/images/gallery/kitchen-3.jpg",
        title: "Kitchen Area",
        description: "Blender, rice cooker, oven, basic cooking utensils, plates and cutlery, freezer, high chair, kettle, microwave, stove, toaster, wine glasses, ceiling fan, cleaning products, dining table, fire extinguisher, first aid kit, hot water, kitchenette",
        category: "kitchen"
    },

    // Dining Area (2 images)
    {
        src: "/images/gallery/dining-area-1.jpg",
        thumbnail: "/images/gallery/dining-area-1.jpg",
        title: "Dining Area",
        description: "Dining table, wine glasses, blender, basic cooking utensils, plates and cutlery, fire extinguisher, first aid kit, freezer, high chair, hot water, kettle, microwave, oven, toaster",
        category: "dining-area"
    },
    {
        src: "/images/gallery/dining-area-2.jpg",
        thumbnail: "/images/gallery/dining-area-2.jpg",
        title: "Dining Space",
        description: "Dining table, wine glasses, blender, basic cooking utensils, plates and cutlery, fire extinguisher, first aid kit, freezer, high chair, hot water, kettle, microwave, oven, toaster",
        category: "dining-area"
    },

    // Bedrooms (11 images)
    {
        src: "/images/gallery/bedroom-1.jpg",
        thumbnail: "/images/gallery/bedroom-1.jpg",
        title: "Bedroom 1",
        description: "Comfortable bedroom with modern amenities",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-1.1.jpg",
        thumbnail: "/images/gallery/bedroom-1.1.jpg",
        title: "Bedroom 1 View",
        description: "Comfortable bedroom with modern amenities",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-1.2.jpg",
        thumbnail: "/images/gallery/bedroom-1.2.jpg",
        title: "Bedroom 1 Interior",
        description: "Comfortable bedroom with modern amenities",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-1.3.jpg",
        thumbnail: "/images/gallery/bedroom-1.3.jpg",
        title: "Bedroom 1 Detail",
        description: "Comfortable bedroom with modern amenities",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-1.4.jpg",
        thumbnail: "/images/gallery/bedroom-1.4.jpg",
        title: "Bedroom 1 Space",
        description: "Comfortable bedroom with modern amenities",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-2.jpg",
        thumbnail: "/images/gallery/bedroom-2.jpg",
        title: "Bedroom 2",
        description: "Cozy bedroom with ocean views",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-2.2.jpg",
        thumbnail: "/images/gallery/bedroom-2.2.jpg",
        title: "Bedroom 2 View",
        description: "Cozy bedroom with ocean views",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-2.3.jpg",
        thumbnail: "/images/gallery/bedroom-2.3.jpg",
        title: "Bedroom 2 Interior",
        description: "Cozy bedroom with ocean views",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-3.jpg",
        thumbnail: "/images/gallery/bedroom-3.jpg",
        title: "Bedroom 3",
        description: "Spacious bedroom suite",
        category: "bedroom"
    },
    {
        src: "/images/gallery/bedroom-4.jpg",
        thumbnail: "/images/gallery/bedroom-4.jpg",
        title: "Bedroom 4",
        description: "Guest bedroom with comfortable setup",
        category: "bedroom"
    },

    // Bathrooms (6 images)
    {
        src: "/images/gallery/bathroom-1.jpg",
        thumbnail: "/images/gallery/bathroom-1.jpg",
        title: "Bathroom",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },
    {
        src: "/images/gallery/bathroom-2.jpg",
        thumbnail: "/images/gallery/bathroom-2.jpg",
        title: "Bathroom View",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },
    {
        src: "/images/gallery/bathroom-3.jpg",
        thumbnail: "/images/gallery/bathroom-3.jpg",
        title: "Bathroom Facilities",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },
    {
        src: "/images/gallery/bathroom-4.jpg",
        thumbnail: "/images/gallery/bathroom-4.jpg",
        title: "Bathroom Interior",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },
    {
        src: "/images/gallery/bathroom-5.jpg",
        thumbnail: "/images/gallery/bathroom-5.jpg",
        title: "Bathroom Space",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },
    {
        src: "/images/gallery/bathroom-6.jpg",
        thumbnail: "/images/gallery/bathroom-6.jpg",
        title: "Bathroom Detail",
        description: "Hair dryer, hot water, shampoo, body soap",
        category: "bathroom"
    },

    // Backyard (4 images)
    {
        src: "/images/gallery/backyard-1.jpg",
        thumbnail: "/images/gallery/backyard-1.jpg",
        title: "Backyard",
        description: "Tranquil tropical garden surroundings",
        category: "backyard"
    },
    {
        src: "/images/gallery/backyard-2.jpg",
        thumbnail: "/images/gallery/backyard-2.jpg",
        title: "Backyard Garden",
        description: "Lush green backyard area",
        category: "backyard"
    },
    {
        src: "/images/gallery/backyard-3.jpg",
        thumbnail: "/images/gallery/backyard-3.jpg",
        title: "Garden Area",
        description: "Beautiful garden landscape",
        category: "backyard"
    },
    {
        src: "/images/gallery/backyard-4.jpg",
        thumbnail: "/images/gallery/backyard-4.jpg",
        title: "Backyard View",
        description: "Peaceful outdoor space",
        category: "backyard"
    },

    // Patio BBQ (2 images)
    {
        src: "/images/gallery/patio-bbq-1.jpg",
        thumbnail: "/images/gallery/patio-bbq-1.jpg",
        title: "Patio BBQ Area",
        description: "Perfect spot for outdoor dining and BBQ",
        category: "patio-bbq"
    },
    {
        src: "/images/gallery/patio-bbq-2.jpg",
        thumbnail: "/images/gallery/patio-bbq-2.jpg",
        title: "BBQ Patio",
        description: "Outdoor entertaining space",
        category: "patio-bbq"
    },

    // Balcony (2 images)
    {
        src: "/images/gallery/balcony-1.jpg",
        thumbnail: "/images/gallery/balcony-1.jpg",
        title: "Balcony View",
        description: "Panoramic ocean views from the balcony",
        category: "balcony"
    },
    {
        src: "/images/gallery/balcony-2.jpg",
        thumbnail: "/images/gallery/balcony-2.jpg",
        title: "Balcony Area",
        description: "Relaxing balcony space with stunning views",
        category: "balcony"
    },

    // Exterior (2 images)
    {
        src: "/images/gallery/exterior-1.jpg",
        thumbnail: "/images/gallery/exterior-1.jpg",
        title: "Villa Exterior",
        description: "Beautiful villa architecture",
        category: "exterior"
    },
    {
        src: "/images/gallery/exterior-2.jpg",
        thumbnail: "/images/gallery/exterior-2.jpg",
        title: "Exterior View",
        description: "Villa exterior design",
        category: "exterior"
    },

    // Additional Photos (5 images)
    {
        src: "/images/gallery/additional-1.jpg",
        thumbnail: "/images/gallery/additional-1.jpg",
        title: "Villa Detail",
        description: "Additional villa features",
        category: "additional"
    },
    {
        src: "/images/gallery/additional-2.jpg",
        thumbnail: "/images/gallery/additional-2.jpg",
        title: "Villa Feature",
        description: "More villa amenities",
        category: "additional"
    },
    {
        src: "/images/gallery/additional-3.jpg",
        thumbnail: "/images/gallery/additional-3.jpg",
        title: "Additional View",
        description: "Extra villa photos",
        category: "additional"
    },
    {
        src: "/images/gallery/additional-4.jpg",
        thumbnail: "/images/gallery/additional-4.jpg",
        title: "Villa Space",
        description: "More villa spaces",
        category: "additional"
    },
    {
        src: "/images/gallery/additional-5.jpg",
        thumbnail: "/images/gallery/additional-5.jpg",
        title: "Additional Detail",
        description: "Other villa features",
        category: "additional"
    },
];
