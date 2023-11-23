import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avidia UI AI",
  description: "Noobsverse AI UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
         {/* Favicon */}
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://au-spot.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Noobsverse.png"
  />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
