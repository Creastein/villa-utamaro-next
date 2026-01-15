'use client';

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');

    return (
        <footer className="bg-[#1A1A1A] py-12 text-white">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Image
                            src="/images/logo-white.png"
                            alt="Villa Utamaro"
                            width={64}
                            height={64}
                            className="mb-4 h-16 w-auto"
                        />
                        <p className="text-sm leading-relaxed text-stone-400">
                            {t('desc')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-['Noto_Serif_JP'] text-lg font-medium">{t('quickLinks')}</h3>
                        <ul className="space-y-2">
                            {['home', 'amenities', 'rooms', 'gallery', 'location'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link}`}
                                        className="text-sm text-stone-400 transition-colors hover:text-[#C5A358]"
                                    >
                                        {tNav(link)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-['Noto_Serif_JP'] text-lg font-medium">{t('contact')}</h3>
                        <ul className="space-y-2 text-sm text-stone-400">
                            <li>Gerupuk, Central Lombok</li>
                            <li>West Nusa Tenggara, Indonesia</li>
                            <li className="pt-2">
                                <a
                                    href="tel:+628123456789"
                                    className="transition-colors hover:text-[#C5A358]"
                                >
                                    +62 812 3456 789
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@villautamaro.com"
                                    className="transition-colors hover:text-[#C5A358]"
                                >
                                    info@villautamaro.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 font-['Noto_Serif_JP'] text-lg font-medium">{t('follow')}</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/villautamaro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 transition-colors hover:border-[#C5A358] hover:text-[#C5A358]"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="mailto:info@villautamaro.com"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 transition-colors hover:border-[#C5A358] hover:text-[#C5A358]"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Villa Utamaro. {t('rights')}</p>
                </div>
            </div>
        </footer>
    );
}
