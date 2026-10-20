import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahtsham Mustafa Awan | Spatial Data Scientist & Web GIS Developer",
  description:
    "Portfolio of Ahtsham Mustafa Awan — Spatial Data Scientist, Web GIS Developer, and Geologist specializing in GeoAI, Deep Learning for Earth Observation, Spatial Hydrology, and Google Earth Engine.",
  keywords: [
    "Ahtsham Mustafa Awan",
    "Spatial Data Scientist",
    "Web GIS Developer",
    "Remote Sensing",
    "GeoAI",
    "Google Earth Engine",
    "Hydrological Modeling",
    "Geology",
    "Pakistan",
  ],
  authors: [{ name: "Ahtsham Mustafa Awan" }],
  openGraph: {
    title: "Ahtsham Mustafa Awan | Spatial Data Scientist & Web GIS Developer",
    description:
      "Transforming the world through geospatial data science, GeoAI, remote sensing, and modern Web GIS.",
    type: "website",
    locale: "en_US",
    images: ["/ahtsham.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtsham Mustafa Awan | Spatial Data Scientist & Web GIS Developer",
    description:
      "Spatial Data Scientist, Web GIS Developer, and Remote Sensing Researcher.",
    images: ["/ahtsham.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
