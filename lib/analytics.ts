'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        gtag?: (
            command: 'config' | 'event' | 'set',
            targetId: string,
            config?: Record<string, any>
        ) => void;
    }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export function useGoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_MEASUREMENT_ID || !window.gtag) return;

        const url = pathname + searchParams.toString();
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }, [pathname, searchParams]);
}

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    window.gtag('event', eventName, eventParams);
};

// Pre-defined event trackers
export const analytics = {
    // Track WhatsApp clicks
    trackWhatsAppClick: (location: 'floating' | 'location' | 'navbar') => {
        trackEvent('whatsapp_click', {
            button_location: location,
        });
    },

    // Track language change
    trackLanguageChange: (newLanguage: string) => {
        trackEvent('language_change', {
            language: newLanguage,
        });
    },

    // Track booking interest
    trackBookingClick: (source: string) => {
        trackEvent('booking_interest', {
            source: source,
        });
    },

    // Track gallery image view
    trackGalleryView: (imageTitle: string) => {
        trackEvent('gallery_view', {
            image_title: imageTitle,
        });
    },

    // Track section scroll
    trackSectionView: (section: string) => {
        trackEvent('section_view', {
            section_name: section,
        });
    },
};
