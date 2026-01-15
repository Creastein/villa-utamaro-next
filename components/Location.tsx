'use client';

import { useTranslations } from 'next-intl';

export default function Location() {
    const t = useTranslations('location');

    return (
        <section id="location" className="bg-[#FCFAFA] py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Map */}
                    <div className="h-[400px] overflow-hidden rounded-lg lg:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3847384474855!2d116.34600531478276!3d-8.916187591245835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf3b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sGerupuk%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Villa Utamaro Location"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center">
                        <h3 className="mb-6 font-['Noto_Serif_JP'] text-3xl font-light text-[#1A1A1A]">
                            {t('getting')}
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('address')}</h4>
                                <p
                                    className="text-stone-600"
                                    dangerouslySetInnerHTML={{ __html: t('addressContent') }}
                                />
                            </div>

                            <div>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('airport')}</h4>
                                <p
                                    className="text-stone-600"
                                    dangerouslySetInnerHTML={{ __html: t('airportDesc') }}
                                />
                            </div>

                            <div>
                                <h4 className="mb-2 font-medium text-[#1A1A1A]">{t('nearby')}</h4>
                                <ul className="space-y-1 text-stone-600">
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Gerupuk Beach - 100m
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Kuta Beach - 15 min drive
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Tanjung Aan Beach - 20 min drive
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                        Selong Belanak Beach - 25 min drive
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <a
                                    href="https://wa.me/628123456789"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-full bg-[#C5A358] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#B39348]"
                                >
                                    {t('cta')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
