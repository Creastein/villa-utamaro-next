'use client';

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/utils/animations';

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
            className="bg-[#1A1A1A] py-12 text-white"
        >
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
                                        className="link-underline text-sm text-stone-400 transition-colors hover:text-[#C5A358]"
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
                                    href="tel:+6281802105341"
                                    className="transition-colors hover:text-[#C5A358]"
                                >
                                    +62 818 0210 5341
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:villautamaro@gmail.com"
                                    className="transition-colors hover:text-[#C5A358]"
                                >
                                    villautamaro@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 font-['Noto_Serif_JP'] text-lg font-medium">{t('follow')}</h3>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                href="https://www.instagram.com/villa_utamaro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 transition-colors hover:border-[#C5A358] hover:text-[#C5A358]"
                            >
                                <Instagram size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                href="mailto:villautamaro@gmail.com"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 transition-colors hover:border-[#C5A358] hover:text-[#C5A358]"
                            >
                                <Mail size={20} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Villa Utamaro. {t('rights')}</p>
                </div>
            </div>
        </motion.footer>
    );
}
