import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Utamaro | Luxury Japanese Villa in Lombok",
  description: "Zen Retreat by the Shore",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

// Root layout should be minimal - the locale layout handles everything
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
