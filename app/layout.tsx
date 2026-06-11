import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyles } from "@/app/styles/GlobalStyles";
import { site } from "@/lib/site-data";
import { themeInitScript } from "@/lib/preferences";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "optional",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: "ypingmoe",
  description: site.summary,
  openGraph: {
    title: "ypingmoe",
    description: site.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "ypingmoe",
    description: site.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="system" className={robotoMono.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#111111"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
