'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { analytics } from '@/lib/analytics';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const t = useTranslations('nav');
    const params = useParams();
    const pathname = usePathname();
    const locale = params.locale as string;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: t('home') },
        { href: '#amenities', label: t('amenities') },
        { href: '#rooms', label: t('rooms') },
        { href: '#gallery', label: t('gallery') },
        { href: '#testimonials', label: t('testimonials') },
        { href: '#contact', label: t('contact') },
        { href: '#location', label: t('location') },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 z-50 w-full transition-all duration-700 ${isScrolled
                    ? 'bg-white/90 py-3 shadow-md backdrop-blur-sm md:py-4'
                    : 'bg-transparent py-4 md:py-6'
                    }`}
            >
                <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 lg:px-16">
                    {/* Logo */}
                    <Link href="/#home">
                        <Image
                            src="/images/logo.png"
                            alt="Villa Utamaro"
                            width={64}
                            height={64}
                            className={`h-16 w-auto object-contain transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'
                                }`}
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden items-center space-x-12 lg:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`group relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-[#C5A358] active:scale-95 ${isScrolled ? 'text-stone-900' : 'text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#C5A358] transition-all duration-300 ease-out group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-4 lg:flex">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-stone-100 ${isScrolled ? 'text-stone-900' : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                <Globe size={16} />
                                {locale.toUpperCase()}
                            </button>

                            {isLangMenuOpen && (
                                <div className="absolute right-0 top-full mt-2 w-40 rounded-lg border border-stone-200 bg-white shadow-lg">
                                    {languages.map((lang) => (
                                        <Link
                                            key={lang.code}
                                            href={pathname}
                                            locale={lang.code as 'en' | 'id'}
                                            onClick={() => setIsLangMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-stone-50 ${locale === lang.code ? 'bg-stone-100 font-medium' : ''
                                                }`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            {lang.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Book Now */}
                        <a
                            href="https://wa.me/6281802105341"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.trackBookingClick('navbar')}
                            className={`rounded-full px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 ${isScrolled
                                ? 'bg-stone-900 text-white hover:bg-stone-800'
                                : 'bg-white text-stone-900 hover:bg-stone-100'
                                }`}
                        >
                            {t('book')}
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 transition-colors lg:hidden ${isScrolled ? 'text-stone-900' : 'text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-white transition-all duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                    }`}
            >
                <div className="flex flex-col space-y-8 text-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-2xl font-light tracking-[0.2em] text-stone-900"
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Mobile Language Switcher */}
                    <div className="flex justify-center gap-4 pt-4">
                        {languages.map((lang) => (
                            <Link
                                key={lang.code}
                                href={pathname}
                                locale={lang.code as 'en' | 'id'}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm transition-colors ${locale === lang.code
                                    ? 'bg-stone-900 text-white'
                                    : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                {lang.name}
                            </Link>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/6281802105341"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => analytics.trackBookingClick('mobile_menu')}
                        className="mt-4 rounded-full bg-stone-900 px-12 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-xl"
                    >
                        {t('book')}
                    </a>
                </div>
            </div>
        </>
    );
}
