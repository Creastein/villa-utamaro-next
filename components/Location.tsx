'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { slideUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function Location() {
    const t = useTranslations('location');

    return (
        <section id="location" className="bg-[#FCFAFA] py-20 md:py-32">
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

                <div className="grid gap-8 lg:grid-cols-2">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={slideInLeft}
                        className="h-[400px] overflow-hidden rounded-lg lg:h-[500px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.472465100876!2d106.6880843!3d-6.3137931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcd01a35feb0c83%3A0xb9e185be8e9c827!2sVilla%20Utamaro!5e0!3m2!1sid!2sid!4v1768520510703!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Villa Utamaro Location"
                        />
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={slideInRight}
                        className="flex flex-col justify-center"
                    >
                        <motion.h3
                            variants={staggerItem}
                            className="mb-6 font-['Noto_Serif_JP'] text-3xl font-light text-[#1A1A1A]"
                        >
                            {t('getting')}
                        </motion.h3>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.div variants={staggerItem}>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('address')}</h4>
                                <p
                                    className="text-lg text-stone-600"
                                    dangerouslySetInnerHTML={{ __html: t('addressContent') }}
                                />
                            </motion.div>

                            <motion.div variants={staggerItem}>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('airport')}</h4>
                                <p
                                    className="text-lg text-stone-600"
                                    dangerouslySetInnerHTML={{ __html: t('airportDesc') }}
                                />
                            </motion.div>

                            <motion.div variants={staggerItem}>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('nearby')}</h4>
                                <ul className="space-y-1 text-stone-600">
                                    <li className="flex items-center text-lg">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Gerupuk Beach - 100m
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Kuta Beach - 15 min drive
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Tanjung Aan Beach - 20 min drive
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Selong Belanak Beach - 25 min drive
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div variants={staggerItem}>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://wa.me/6281802105341"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-full bg-[#C5A358] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#B39348]"
                                >
                                    {t('cta')}
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
