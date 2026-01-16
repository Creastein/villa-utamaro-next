'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/lib/data/gallery';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem } from '@/lib/utils/animations';


export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('gallery');

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollTabs = (direction: 'left' | 'right') => {
        if (tabsContainerRef.current) {
            const { current } = tabsContainerRef;
            const scrollAmount = direction === 'left' ? -150 : 150;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Filter images based on active category
    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={slideUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                            {t('title')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-stone-600">
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={slideUp}
                        className="relative mb-8 w-full px-8 md:mb-12 md:flex md:justify-center md:px-0"
                    >
                        {/* Tab Nav Buttons - Mobile Only */}
                        <button
                            onClick={() => scrollTabs('left')}
                            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-1.5 shadow-sm backdrop-blur-sm transition-all hover:bg-white md:hidden"
                            aria-label="Scroll tabs left"
                        >
                            <ChevronLeft className="h-4 w-4 text-[#1A1A1A]" />
                        </button>

                        <button
                            onClick={() => scrollTabs('right')}
                            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-1.5 shadow-sm backdrop-blur-sm transition-all hover:bg-white md:hidden"
                            aria-label="Scroll tabs right"
                        >
                            <ChevronRight className="h-4 w-4 text-[#1A1A1A]" />
                        </button>

                        <div
                            ref={tabsContainerRef}
                            className="no-scrollbar w-full overflow-x-auto scroll-smooth md:w-auto md:justify-center md:overflow-visible"
                        >
                            <div className="grid grid-rows-2 grid-flow-col gap-2 w-max px-1 md:flex md:w-auto md:flex-wrap md:justify-center md:rounded-full md:bg-stone-100 md:p-2 md:px-2">
                                {galleryCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`
                                            whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 md:px-6 md:py-2.5 md:text-base
                                            ${activeCategory === category
                                                ? 'bg-[#C5A358] text-white shadow-md'
                                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#1A1A1A] md:bg-transparent'
                                            }
                                        `}
                                    >
                                        {t(`categories.${category}`)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        {/* Scroll Buttons - Visible on desktop */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 md:-left-8 md:p-3 lg:-left-12"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5 text-[#1A1A1A] md:h-6 md:w-6" />
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 md:-right-8 md:p-3 lg:-right-12"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5 text-[#1A1A1A] md:h-6 md:w-6" />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                ref={scrollContainerRef}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={staggerContainer}
                                className="grid grid-rows-2 grid-flow-col auto-cols-[80%] gap-3 overflow-x-auto pb-8 md:gap-4 md:auto-cols-[45%] lg:auto-cols-[25%] scrollbar-hide"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {filteredImages.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
                                            <p className="text-base font-medium text-white">{image.title}</p>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeLightbox}
                            className="absolute right-6 top-6 text-white transition-opacity hover:opacity-70"
                        >
                            <X size={32} />
                        </motion.button>

                        {/* Previous Button */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-6 text-white transition-opacity hover:opacity-70"
                        >
                            <ChevronLeft size={48} />
                        </motion.button>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-[80vh] w-[90vw] max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filteredImages[selectedImage].src}
                                alt={filteredImages[selectedImage].title}
                                fill
                                className="object-contain"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
                            >
                                <h3 className="text-xl font-medium">{filteredImages[selectedImage].title}</h3>
                                <p className="text-sm opacity-90">{filteredImages[selectedImage].description}</p>
                            </motion.div>
                        </motion.div>

                        {/* Next Button */}
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-6 text-white transition-opacity hover:opacity-70"
                        >
                            <ChevronRight size={48} />
                        </motion.button>

                        {/* Counter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white"
                        >
                            {selectedImage + 1} / {filteredImages.length}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
