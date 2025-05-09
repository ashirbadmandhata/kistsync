import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import AppWrapper from "@/components/AppWrapper"; // <-- import here
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EntryIQ",
  description: "Advanced College Event Ticketing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ConvexClientProvider>
          <ClerkProvider>
            <AppWrapper>
              <Header />
              <SyncUserWithConvex />
              <main className="flex-grow">{children}</main>
              <Footer />
              <Toaster />
            </AppWrapper>
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
