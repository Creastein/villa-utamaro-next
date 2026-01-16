'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home } from 'lucide-react';

export default function NotFound() {
    const params = useParams();
    const locale = (params?.locale as string) || 'en';

    const content = {
        en: {
            title: 'Page Not Found',
            subtitle: '404',
            description: 'The page you are looking for does not exist or has been moved.',
            button: 'Back to Home',
        },
        id: {
            title: 'Halaman Tidak Ditemukan',
            subtitle: '404',
            description: 'Halaman yang Anda cari tidak ada atau telah dipindahkan.',
            button: 'Kembali ke Beranda',
        },
    };

    const t = content[locale as 'en' | 'id'] || content.en;

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FCFAFA] px-4">
            <div className="text-center">
                {/* 404 Number */}
                <h1 className="mb-4 font-['Noto_Serif_JP'] text-[120px] font-light leading-none text-[#C5A358] md:text-[180px]">
                    {t.subtitle}
                </h1>

                {/* Title */}
                <h2 className="mb-4 font-['Noto_Serif_JP'] text-3xl font-light text-[#1A1A1A] md:text-4xl">
                    {t.title}
                </h2>

                {/* Description */}
                <p className="mx-auto mb-8 max-w-md text-stone-600">
                    {t.description}
                </p>

                {/* Back to Home Button */}
                <Link
                    href={`/${locale}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C5A358] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#B39348]"
                >
                    <Home size={18} />
                    {t.button}
                </Link>

                {/* Decorative Element */}
                <div className="mt-12">
                    <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#C5A358] to-transparent opacity-30" />
                </div>
            </div>
        </div>
    );
}
