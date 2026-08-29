import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { SessionProvider } from "@/components/providers/session-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { ChangelogModal } from "@/components/changelog-modal";
import { EmailVerificationModal } from "@/components/auth/EmailVerificationModal";
import { NotificationListener } from "@/components/notification-listener";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const baseUrl = "https://croatia-mentor.space";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        uk: `${baseUrl}/ua`,
        ru: `${baseUrl}/ru`,
        "x-default": `${baseUrl}/en`,
      },
    },
    icons: {
      icon: "/logos/logo-variant-1.jpg",
      shortcut: "/logos/logo-variant-1.jpg",
      apple: "/logos/logo-variant-1.jpg",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ua" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
      images: [
        {
          url: "/logos/logo-variant-1.jpg",
          width: 800,
          height: 800,
          alt: "Croatia Mentor Official Logo",
        },
      ],
    },

  };
}

import { GlobalParallaxBackground } from "@/components/GlobalParallaxBackground";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalApplication",
        "name": "Croatia Mentor",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "url": "https://croatia-mentor.space",
        "description": "Interactive platform to learn Croatian language for free with AI tutor, audio vocabulary, grammar exercises, and roleplay simulations.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
      {
        "@type": "Course",
        "name": "Learn Croatian Language Course",
        "description": "Complete interactive course for learning Croatian language from A1 to B2 level.",
        "provider": {
          "@type": "Organization",
          "name": "Croatia Mentor",
          "sameAs": "https://croatia-mentor.space",
        },
        "isAccessibleForFree": true,
      },
    ],
  };

  return (
    <html lang={locale} className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var urlParams = new URLSearchParams(window.location.search);
                var urlTheme = urlParams.get('theme');
                var theme = (urlTheme === 'orange-white' || urlTheme === 'light') ? 'orange-white' :
                            (urlTheme === 'dark' ? 'dark' : (localStorage.getItem('croatia_mentor_theme') || 'dark'));
                if (urlTheme) localStorage.setItem('croatia_mentor_theme', theme);
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'orange-white') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />

      </head>
      <body className="min-h-screen flex flex-col relative">
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <ThemeProvider>
              <GlobalParallaxBackground />
              <NotificationListener />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster position="top-right" richColors />
              <ChangelogModal />
              <EmailVerificationModal />
            </ThemeProvider>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

