import type { Metadata, Viewport } from "next"; // 👈 Asegúrate de importar Viewport
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/navbar/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { TransitionController } from "@/components/TransitionController";
import { Analytics } from "@vercel/analytics/next";
import BackToTop from "@/components/BackToTop";

// 1. Metadatos (SEO, Open Graph, Twitter, etc.)
export const metadata: Metadata = {
  metadataBase: new URL("https://wakku.xyz"), // Reemplaza con tu dominio real
  title: {
    default: "wakku",
    template: "%s | wakku",
  },
  description:
    "wakku's official site: music and commissions. Know more about wakku and his creative universe.",
  keywords: [
    "wakku",
    "wakku_wav",
    "ItsWalker412",
    "music",
    "musical producer",
    "music producer",
    "commissions",
    "indie music",
    "commissions",
    "indie",
    "Walker",
  ],
  authors: [{ name: "wakku", url: "https://wakku.xyz/en/about" }],
  creator: "wakku",
  publisher: "wakku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    title: "wakku",
    description:
      "wakku's official site: music and commissions. Know more about wakku and his creative universe.",
    siteName: "wakku",
    images: [
      {
        url: "/og-image.png", // Asegúrate de tener esta imagen
        width: 1200,
        height: 630,
        alt: "wakku official site",
      },
    ],
    url: "https://wakku.xyz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wakku_wav",
    creator: "@wakku_wav",
    title: "wakku",
    description:
      "wakku's official site: music and commissions. Know more about wakku and his creative universe.",
    images: ["/liabanner.png"], // Opcional
  },
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
  verification: {
    // google: "tu-código-de-verificación",
  },
  manifest: "/site.webmanifest",
  category: "music",
  generator: "Next.js + wakku",
  applicationName: "wakku official site",
  referrer: "origin-when-cross-origin",
  // 👇 ¡Ya no van aquí! Las siguientes líneas se han eliminado del objeto metadata.
  // colorScheme: ... , themeColor: ... , viewport: ...
};

// 2. Configuración de la Ventana Gráfica (viewport) y el Esquema de Color
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  // colorScheme: 'dark light', // Esta propiedad ya no es necesaria; Next.js la gestiona automáticamente
};

// El resto del layout (el componente RootLayout) se mantiene igual
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const navbarDict = await getDictionary(lang as Locale, "navbar") as any;

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar lang={lang as Locale} dict={navbarDict} />
        <PageTransition>
          <main className="pt-16 min-h-screen">
            {children}
            <BackToTop />
          </main>
        </PageTransition>
        <TransitionController />
      </body>
      <Analytics />
    </html>
  );
};