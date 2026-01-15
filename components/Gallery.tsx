'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/lib/data/gallery';
import { useTranslations } from 'next-intl';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const t = useTranslations('gallery');

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
        }
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    return (
        <>
            <section id="gallery" className="bg-white py-20 md:py-32">
                <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                            {t('title')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-stone-600">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => openLightbox(index)}
                                className="group relative aspect-square overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={image.thumbnail}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-sm font-medium text-white">{image.title}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute right-6 top-6 text-white transition-opacity hover:opacity-70"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-6 text-white transition-opacity hover:opacity-70"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image */}
                    <div
                        className="relative h-[80vh] w-[90vw] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].title}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-xl font-medium">{galleryImages[selectedImage].title}</h3>
                            <p className="text-sm opacity-90">{galleryImages[selectedImage].description}</p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-6 text-white transition-opacity hover:opacity-70"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
                        {selectedImage + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </>
    );
}
