import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Utamaro | Luxury Japanese Villa in Lombok",
  description: "Zen Retreat by the Shore",
};

// Root layout should be minimal - the locale layout handles everything
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
