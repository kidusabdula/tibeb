import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { Poppins, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Tibeb - Ethiopian Cultural Dress",
  description: "Discover traditional Habesha clothing at Tibeb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
        <body className="flex flex-col min-h-screen">
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
