import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import "../globals.css";

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-noto-serif-jp",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = 'https://villautamaro.com';

    const metadata = {
        en: {
            title: 'Villa Utamaro | Luxury Japanese Villa in Lombok',
            description: 'Zen Retreat by the Shore. Villa Utamaro - Harmony between minimalist Japanese architecture and the waves of Lombok. Experience tranquility, luxury, and world-class surfing.',
            keywords: 'villa lombok, luxury villa, japanese villa, surfing lombok, villa utamaro, gerupuk, infinity pool, bali villa, luxury accommodation indonesia',
        },
        id: {
            title: 'Villa Utamaro | Villa Jepang Mewah di Lombok',
            description: 'Retret Zen di Tepi Pantai. Villa Utamaro - Harmoni antara arsitektur minimalis Jepang dan ombak Lombok. Rasakan ketenangan, kemewahan, dan surfing kelas dunia.',
            keywords: 'villa lombok, villa mewah, villa jepang, surfing lombok, villa utamaro, gerupuk, kolam infinity, villa bali, akomodasi mewah indonesia',
        },
    };

    const currentLocale = locale as 'en' | 'id';
    const meta = metadata[currentLocale] || metadata.en;

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        authors: [{ name: 'Villa Utamaro' }],
        creator: 'Villa Utamaro',
        publisher: 'Villa Utamaro',
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'id': '/id',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: `${baseUrl}/${locale}`,
            title: meta.title,
            description: meta.description,
            siteName: 'Villa Utamaro',
            images: [
                {
                    url: `${baseUrl}/images/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Villa Utamaro - Luxury Japanese Villa in Lombok',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [`${baseUrl}/images/og-image.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

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

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: 'Villa Utamaro',
        description: locale === 'en'
            ? 'Luxury Japanese villa in Lombok with ocean views, infinity pool, and world-class surfing access'
            : 'Villa mewah bergaya Jepang di Lombok dengan pemandangan laut, kolam infinity, dan akses surfing kelas dunia',
        image: 'https://villautamaro.com/images/og-image.jpg',
        '@id': 'https://villautamaro.com',
        url: `https://villautamaro.com/${locale}`,
        telephone: '+62-818-0210-5341',
        email: 'villautamaro@gmail.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jalan Pantai Lombok Tengah',
            addressLocality: 'Gerupuk',
            addressRegion: 'Central Lombok',
            postalCode: '83573',
            addressCountry: 'ID',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -8.8961,
            longitude: 116.3411,
        },
        priceRange: '$$$',
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Infinity Pool' },
            { '@type': 'LocationFeatureSpecification', name: 'Ocean View' },
            { '@type': 'LocationFeatureSpecification', name: 'Private Chef' },
            { '@type': 'LocationFeatureSpecification', name: 'Butler Service' },
            { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
        ],
        numberOfRooms: 3,
        petsAllowed: false,
        starRating: {
            '@type': 'Rating',
            ratingValue: '5',
        },
    };

    return (
        <html lang={locale} className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className={`${notoSerifJP.variable} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <AnalyticsProvider />
                    {children}
                </NextIntlClientProvider>
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                )}
            </body>
        </html>
    );
}
