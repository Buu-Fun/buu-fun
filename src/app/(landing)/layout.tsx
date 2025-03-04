import "@/app/globals.css";
import { constructMetadata } from "@/lib/construct-metadata";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = constructMetadata({
  icons: "/logo.png",
  twitter: {
    card: "player",
    title: "Buu - AI-Driven 3D Asset & Animation Creator",
    images: ["https://www.buu.fun/images/buu-ai-3d-preview.jpg"],
    description:
      "Turn prompts or images into rigged 3D assets and animations with Buu's AI. Visit buu.fun for creators and designers!",
    players: [
      {
        playerUrl: "https://www.buu.fun/videos/buu-ai-demo-player.html",
        width: 1280,
        height: 720,
        streamUrl: "https://www.buu.fun/videos/buu-ai-demo.mp4",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.buu.fun",
  },
  authors: [{ name: "Buu" }],
  other: {
    video: "https://www.buu.fun/videos/buu-ai-demo.mp4",
    video_type: "video/mp4",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BricolageGrotesque.className} antialiased dark `}>
        {children}
      </body>
    </html>
  );
}
