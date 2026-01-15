'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={24} />
        </a>
    );
}
