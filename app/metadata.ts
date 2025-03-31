import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BimaDev | Full Stack Developer",
  description:
    "Expert web designer and developer with 7+ years of experience. Specializing in luxury web design, modern web development, and strategic branding solutions for businesses.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "React developer",
    "Next.js expert",
    "BimaDev",
    "frontend developer",
    "full stack developer",
    "Indonesian developer",
  ],
  openGraph: {
    title: "BimaDev | Full Stack Developer",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
    type: "website",
    url: "https://bimadev.xyz",
    images: [
      {
        url: "/logo-color.png",
        width: 1200,
        height: 630,
        alt: "BimaDev - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BimaDev | Full Stack Developer",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
    images: ["/logo-color.png"],
  },
  alternates: {
    canonical: "https://bimadev.xyz",
  },
  authors: [{ name: "BimaDev" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} 