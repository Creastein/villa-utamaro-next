'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');

    const scrollToNext = () => {
        const nextSection = document.getElementById('amenities');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Villa Utamaro"
                    fill
                    priority
                    className="object-cover"
                    quality={75}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <h1 className="mb-6 font-['Noto_Serif_JP'] text-4xl font-light tracking-[0.1em] md:text-5xl lg:text-6xl uppercase">
                        {t('title')}
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed opacity-90 md:text-xl">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.button
                    onClick={scrollToNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-70"
                >
                    <span>{t('scrollDown')}</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
}
