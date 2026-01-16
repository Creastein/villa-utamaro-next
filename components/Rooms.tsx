'use client';

import Image from 'next/image';
import { bedrooms, villaHighlights } from '@/lib/data/rooms';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { slideUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/utils/animations';


export default function Rooms() {
    const t = useTranslations('rooms');
    const params = useParams();
    const locale = params.locale as 'en' | 'id';

    const currentHighlights = villaHighlights[locale];
    const currentBedrooms = bedrooms[locale];

    return (
        <section id="rooms" className="bg-white py-20 md:py-32">
            <div className="mx-auto max-w-[1400px] px-8 lg:px-16">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={slideUp}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-['Noto_Serif_JP'] text-4xl font-light tracking-wide text-[#1A1A1A] md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-stone-600">
                        {t('subtitle')}
                    </p>
                </motion.div>


                <div className="mb-16 flex flex-wrap justify-center gap-8">
                    {currentHighlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <Icon className="h-5 w-5 text-[#C5A358]" strokeWidth={1.5} />
                                <div>
                                    <p className="text-base font-medium text-[#1A1A1A]">{highlight.label}</p>
                                    <p className="text-base text-stone-600">{highlight.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className="space-y-20">
                    {currentBedrooms.map((room, index) => {
                        const ViewIcon = room.viewIcon;
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={room.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-100px' }}
                                variants={isEven ? slideInLeft : slideInRight}
                                className={`flex flex-col gap-8 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative h-[400px] w-full overflow-hidden rounded-lg lg:w-1/2"
                                >
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </motion.div>


                                <motion.div
                                    variants={staggerContainer}
                                    className="flex flex-col justify-center lg:w-1/2"
                                >
                                    <motion.h3
                                        variants={staggerItem}
                                        className="mb-2 font-['Noto_Serif_JP'] text-3xl font-light text-[#1A1A1A]"
                                    >
                                        {room.name}
                                    </motion.h3>
                                    <motion.p
                                        variants={staggerItem}
                                        className="mb-4 text-lg text-[#C5A358]"
                                    >
                                        {room.subtitle}
                                    </motion.p>
                                    <motion.p
                                        variants={staggerItem}
                                        className="mb-6 leading-relaxed text-stone-600"
                                    >
                                        {room.description}
                                    </motion.p>


                                    <motion.div
                                        variants={staggerItem}
                                        className="mb-6 flex flex-wrap gap-6"
                                    >
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-stone-500">
                                                {t('bedType')}
                                            </p>
                                            <p className="font-medium text-[#1A1A1A]">{room.bedType}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ViewIcon className="h-4 w-4 text-[#C5A358]" strokeWidth={1.5} />
                                            <div>
                                                <p className="text-sm uppercase tracking-wider text-stone-500">
                                                    {t('view')}
                                                </p>
                                                <p className="font-medium text-[#1A1A1A]">{room.view}</p>
                                            </div>
                                        </div>
                                    </motion.div>


                                    <motion.div variants={staggerItem}>
                                        <p className="mb-3 text-base font-medium uppercase tracking-wider text-stone-500">
                                            {t('features')}
                                        </p>
                                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                            {room.features.map((feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center text-base text-stone-600"
                                                >
                                                    <span className="mr-2 h-1 w-1 rounded-full bg-[#C5A358]" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
