import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/header/Header";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ThemeScript from "@/components/theme/ThemeScript";
import { createMetadata } from "@/lib/metadata";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = createMetadata();

export const fontBase = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const fontAccent = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={clsx(
        "scroll-smooth font-base",
        fontBase.variable,
        fontAccent.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased flex flex-col">
        <ScrollToTop />
        <ThemeProvider>
          <ProgressBarProvider>
            <div className="min-w-[20rem] max-w-[120rem] pt-header-mobile xl:pt-header-desktop mx-auto w-full bg-surface overflow-clip">
              <Header />
              <ToastContainer />
              <div className="min-h-screen-content">{children}</div>
              <Footer />
            </div>
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
