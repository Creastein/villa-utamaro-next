'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data/faq';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations('faq');
    const params = useParams();
    const locale = params.locale as 'en' | 'id';

    const currentFaqs = faqs[locale];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4">
                    {currentFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-stone-200 bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-stone-50"
                            >
                                <h3 className="pr-8 font-medium text-[#1A1A1A]">{faq.question}</h3>
                                <ChevronDown
                                    size={20}
                                    className={`flex-shrink-0 text-[#C5A358] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="border-t border-stone-200 p-6 pt-4 text-stone-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
