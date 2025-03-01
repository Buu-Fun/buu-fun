import { Metadata } from "next";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

export function constructMetadata({
  MetaHeadTitle,
  title = "",
  description = "",
  OgImage = "/thumbnail.jpg",
  keywords,
  icons = "/logo-small.png",
  noIndex = false,
  publishedTime,
  ...rest
}: {
  title?: string;
  MetaHeadTitle?: string | TemplateString | null;
  description?: string;
  OgImage?: string;
  icons?: string;
  noIndex?: boolean;
  publishedTime?: Date;
} & Partial<Metadata>): Metadata {
  return {
    title: MetaHeadTitle ? MetaHeadTitle : title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [
        {
          alt: title,
          url: OgImage,
        },
      ],
      publishedTime: publishedTime ? publishedTime.toString() : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OgImage],
      
    },
    icons,
    // creator: "global host | www.globalhost.com",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
    ...rest,
  };
}



export const DefaultMetadata = constructMetadata({
    title: "Buu - AI-Powered 3D Asset Creation & Animation",
    MetaHeadTitle: "Buu - AI-Powered 3D Asset Creation & Animation",
    description: "Create 3D assets, auto-rigged models, and animations with Buu. Turn prompts or images into pro 3D designs using AI at buu.fun!",
    keywords: [
      "AI 3D asset creation",
      "auto-rigging",
      "3D animation platform",
      "Buu",
      "AI-generated 3D models",
      "3D design tool",
      "prompt to 3D",
      "image to 3D"
    ],
    icons: "/logo-small.png",
    openGraph: {
      title: "Buu - Create 3D Assets & Animations with AI",
      description: "Explore Buu at buu.fun – the AI platform for generating 3D assets, auto-rigging, and animations from prompts or images. Simplify your 3D workflow!",
      type: "website",
      url: "https://www.buu.fun",
      images: [
        {
          url: "https://www.buu.fun/images/buu-ai-3d-preview.jpg",
          alt: "Buu - AI 3D Preview"
        }
      ],
      videos: [
        {
          url: "https://www.buu.fun/videos/buu-ai-demo.mp4",
          secureUrl: "https://www.buu.fun/videos/buu-ai-demo.mp4",
          type: "video/mp4",
          width: 1280,
          height: 720
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Buu - AI-Driven 3D Asset & Animation Creator",
      description: "Turn prompts or images into rigged 3D assets and animations with Buu's AI. Visit buu.fun for creators and designers!",
      images: ["https://www.buu.fun/images/buu-ai-3d-preview.jpg"],
      player: {
        playerUrl: "https://www.buu.fun/videos/buu-ai-demo-player.html",
        stream: "https://www.buu.fun/videos/buu-ai-demo.mp4",
        streamContentType: "video/mp4",
        width: 1280,
        height: 720
      }
    },
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: "https://www.buu.fun"
    },
    authors: [{ name: "Buu" }],
    viewport: {
      width: "device-width",
      initialScale: 1
    },
    other: {
      video: "https://www.buu.fun/videos/buu-ai-demo.mp4",
      video_type: "video/mp4"
    }
  })