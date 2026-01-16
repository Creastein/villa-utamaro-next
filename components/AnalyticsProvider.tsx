'use client';

import { useGoogleAnalytics } from '@/lib/analytics';

export default function AnalyticsProvider() {
    useGoogleAnalytics();
    return null;
}
