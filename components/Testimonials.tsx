'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem } from '@/lib/utils/animations';


export default function Testimonials() {
    const t = useTranslations('testimonials');
    const params = useParams();
    const locale = params.locale as 'en' | 'id';

    const currentTestimonials = testimonials[locale];

    return (
        <section id="testimonials" className="bg-[#FCFAFA] py-20 md:py-32">
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

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {currentTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -8, rotate: 1, transition: { duration: 0.3 } }}
                            className="rounded-lg border border-stone-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Rating */}
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <Star
                                            size={16}
                                            className="fill-[#C5A358] text-[#C5A358]"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="mb-6 leading-relaxed text-stone-600">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-12 w-12 overflow-hidden rounded-full"
                                >
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div>
                                    <p className="font-medium text-[#1A1A1A]">{testimonial.name}</p>
                                    <p className="text-sm text-stone-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
