import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://villautamaro.com'
    const locales = ['en', 'id']

    const routes = [''] // Only main page, no anchors

    const sitemap: MetadataRoute.Sitemap = []

    locales.forEach((locale) => {
        sitemap.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        })
    })

    return sitemap
}
