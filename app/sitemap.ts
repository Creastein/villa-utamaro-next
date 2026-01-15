import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://villautamaro.com'
    const locales = ['en', 'id']

    const routes = [
        '',
        '#amenities',
        '#rooms',
        '#gallery',
        '#experience',
        '#testimonials',
        '#location',
    ]

    const sitemap: MetadataRoute.Sitemap = []

    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'monthly' : 'monthly',
                priority: route === '' ? 1 : 0.8,
            })
        })
    })

    return sitemap
}
