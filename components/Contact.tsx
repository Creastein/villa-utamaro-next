'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <section id="contact" className="bg-white py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/6281802105341"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => analytics.trackWhatsAppClick('contact')}
                        className="group flex flex-col items-center rounded-lg border border-stone-200 p-8 transition-all duration-300 hover:border-[#C5A358] hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]">
                            <MessageCircle className="text-[#25D366] transition-colors group-hover:text-white" size={32} />
                        </div>
                        <h3 className="mb-2 font-['Noto_Serif_JP'] text-xl font-medium text-[#1A1A1A]">
                            WhatsApp
                        </h3>
                        <p className="text-center text-sm text-stone-600">
                            +62 818 0210 5341
                        </p>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:villautamaro@gmail.com"
                        className="group flex flex-col items-center rounded-lg border border-stone-200 p-8 transition-all duration-300 hover:border-[#C5A358] hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A358]/10 transition-colors group-hover:bg-[#C5A358]">
                            <Mail className="text-[#C5A358] transition-colors group-hover:text-white" size={32} />
                        </div>
                        <h3 className="mb-2 font-['Noto_Serif_JP'] text-xl font-medium text-[#1A1A1A]">
                            Email
                        </h3>
                        <p className="text-center text-sm text-stone-600">
                            villautamaro@gmail.com
                        </p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+6281802105341"
                        className="group flex flex-col items-center rounded-lg border border-stone-200 p-8 transition-all duration-300 hover:border-[#C5A358] hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A358]/10 transition-colors group-hover:bg-[#C5A358]">
                            <Phone className="text-[#C5A358] transition-colors group-hover:text-white" size={32} />
                        </div>
                        <h3 className="mb-2 font-['Noto_Serif_JP'] text-xl font-medium text-[#1A1A1A]">
                            {t('phone')}
                        </h3>
                        <p className="text-center text-sm text-stone-600">
                            +62 818 0210 5341
                        </p>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/villa_utamaro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center rounded-lg border border-stone-200 p-8 transition-all duration-300 hover:border-[#C5A358] hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A358]/10 transition-colors group-hover:bg-[#C5A358]">
                            <Instagram className="text-[#C5A358] transition-colors group-hover:text-white" size={32} />
                        </div>
                        <h3 className="mb-2 font-['Noto_Serif_JP'] text-xl font-medium text-[#1A1A1A]">
                            Instagram
                        </h3>
                        <p className="text-center text-sm text-stone-600">
                            @villa_utamaro
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}
