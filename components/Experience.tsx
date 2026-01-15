'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Experience() {
    const t = useTranslations('experience');

    return (
        <section id="experience" className="relative overflow-hidden bg-[#FDFCFB] py-32 md:py-48">
            <div className="mx-auto max-w-[90rem] px-6">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
                    {/* Text Content */}
                    <div className="relative z-10">
                        <div className="mb-12">
                            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-stone-400">
                                {t('eyebrow')}
                            </span>
                            <h2 className="font-['Noto_Serif_JP'] text-5xl leading-[1.1] text-[#1A1A1A] md:text-7xl">
                                {t('title1')}
                                <br />
                                <span className="text-4xl italic text-[#C5A358] md:text-6xl">
                                    {t('title2')}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-16">
                            {/* Butler Service */}
                            <div className="group flex gap-8">
                                <div className="h-24 w-[1px] bg-stone-200 transition-colors duration-500 group-hover:bg-[#C5A358]"></div>
                                <div>
                                    <h4 className="mb-4 font-['Noto_Serif_JP'] text-2xl text-[#1A1A1A]">
                                        {t('butler.title')}
                                    </h4>
                                    <p className="max-w-md text-sm font-light leading-relaxed text-stone-500 md:text-base">
                                        {t('butler.desc')}
                                    </p>
                                </div>
                            </div>

                            {/* Chef Service */}
                            <div className="group flex gap-8">
                                <div className="h-24 w-[1px] bg-stone-200 transition-colors duration-500 group-hover:bg-[#C5A358]"></div>
                                <div>
                                    <h4 className="mb-4 font-['Noto_Serif_JP'] text-2xl text-[#1A1A1A]">
                                        {t('chef.title')}
                                    </h4>
                                    <p className="max-w-md text-sm font-light leading-relaxed text-stone-500 md:text-base">
                                        {t('chef.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16">
                            <a
                                href="https://wa.me/628123456789"
                                className="group inline-flex items-center gap-4 text-[#1A1A1A] transition-colors hover:text-[#C5A358]"
                            >
                                <span className="border-b border-[#1A1A1A] pb-1 text-xs font-bold uppercase tracking-widest transition-colors group-hover:border-[#C5A358]">
                                    {t('cta')}
                                </span>
                                <ArrowRight
                                    size={18}
                                    className="transform transition-transform group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Image Composition */}
                    <div className="relative lg:-mr-20">
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=75&w=800"
                                alt="Chef Service"
                                fill
                                className="object-cover grayscale transition-all duration-[1.5s] hover:grayscale-0"
                            />
                        </div>

                        {/* Floating Quote */}
                        <div className="absolute -bottom-12 -left-12 hidden max-w-xs bg-white p-8 shadow-2xl md:block">
                            <p className="font-['Noto_Serif_JP'] text-xl italic leading-relaxed text-stone-800">
                                "The true meaning of luxury is not just in the design, but in the feeling
                                of being completely cared for."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
