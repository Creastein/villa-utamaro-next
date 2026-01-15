'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Testimonials() {
    const t = useTranslations('testimonials');
    const params = useParams();
    const locale = params.locale as 'en' | 'id';

    const currentTestimonials = testimonials[locale];

    return (
        <section id="testimonials" className="bg-[#FCFAFA] py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {currentTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-stone-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Rating */}
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-[#C5A358] text-[#C5A358]"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="mb-6 leading-relaxed text-stone-600">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-[#1A1A1A]">{testimonial.name}</p>
                                    <p className="text-sm text-stone-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
