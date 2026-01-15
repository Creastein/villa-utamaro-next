import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "../globals.css";

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
    title: "Villa Utamaro | Luxury Japanese Villa in Lombok",
    description: "Zen Retreat by the Shore. Villa Utamaro - Harmony between minimalist Japanese architecture and the waves of Lombok. Experience tranquility, luxury, and world-class surfing.",
    keywords: ["villa lombok", "luxury villa", "japanese villa", "surfing lombok", "villa utamaro", "gerupuk", "infinity pool"],
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className={`${notoSerifJP.variable} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
