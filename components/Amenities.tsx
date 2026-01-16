'use client';

import { amenities, highlights } from '@/lib/data/amenities';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Amenities() {
    const t = useTranslations('amenities');
    const params = useParams();
    const locale = params.locale as 'en' | 'id';

    const currentHighlights = highlights[locale];
    const currentAmenities = amenities[locale];

    return (
        <section id="amenities" className="bg-[#FCFAFA] py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                {/* Section Title */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Amenities Layout */}
                <div className="flex flex-wrap justify-center gap-8">
                    {currentAmenities.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="w-full rounded-lg border border-stone-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon className="h-6 w-6 text-[#C5A358]" strokeWidth={1.5} />
                                    <h3 className="font-['Noto_Serif_JP'] text-lg font-medium text-[#1A1A1A]">
                                        {category.category}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-center text-sm text-stone-600"
                                        >
                                            <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Highlights (Popular Amenities) */}
                <div className="mt-20">
                    {/* Popular Amenities Heading */}
                    <div className="mb-12 text-center">
                        <h3 className="font-['Noto_Serif_JP'] text-3xl font-light tracking-wide text-[#1A1A1A] md:text-4xl">
                            {t('popularAmenities')}
                        </h3>
                    </div>

                    {/* Grid with centered last row */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {currentHighlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <div key={index} className="w-full text-center md:w-[calc(33.333%-2rem)]">
                                    <div className="mb-4 flex justify-center">
                                        <Icon className="h-12 w-12 text-[#C5A358]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mb-2 font-['Noto_Serif_JP'] text-xl font-medium text-[#1A1A1A]">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-stone-600">
                                        {highlight.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
