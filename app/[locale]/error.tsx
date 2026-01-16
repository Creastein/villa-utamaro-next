'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const params = useParams();
    const locale = (params?.locale as string) || 'en';

    useEffect(() => {
        // Log the error to console in development
        console.error('Error boundary caught:', error);
    }, [error]);

    const content = {
        en: {
            title: 'Something went wrong',
            description: 'We apologize for the inconvenience. An unexpected error has occurred.',
            tryAgain: 'Try Again',
            backHome: 'Back to Home',
        },
        id: {
            title: 'Terjadi kesalahan',
            description: 'Mohon maaf atas ketidaknyamanannya. Terjadi kesalahan yang tidak terduga.',
            tryAgain: 'Coba Lagi',
            backHome: 'Kembali ke Beranda',
        },
    };

    const t = content[locale as 'en' | 'id'] || content.en;

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FCFAFA] px-4">
            <div className="max-w-md text-center">
                {/* Error Icon */}
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-red-50 p-4">
                        <AlertTriangle className="text-red-600" size={48} />
                    </div>
                </div>

                {/* Title */}
                <h1 className="mb-4 font-['Noto_Serif_JP'] text-3xl font-light text-[#1A1A1A] md:text-4xl">
                    {t.title}
                </h1>

                {/* Description */}
                <p className="mb-8 text-stone-600">
                    {t.description}
                </p>

                {/* Error Details (Development only) */}
                {process.env.NODE_ENV === 'development' && error.message && (
                    <div className="mb-6 rounded-lg bg-red-50 p-4 text-left">
                        <p className="font-mono text-xs text-red-800">{error.message}</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A358] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#B39348]"
                    >
                        <RotateCcw size={18} />
                        {t.tryAgain}
                    </button>

                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C5A358] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#C5A358] transition-all duration-300 hover:bg-[#C5A358] hover:text-white"
                    >
                        <Home size={18} />
                        {t.backHome}
                    </Link>
                </div>

                {/* Decorative Element */}
                <div className="mt-12">
                    <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#C5A358] to-transparent opacity-30" />
                </div>
            </div>
        </div>
    );
}
