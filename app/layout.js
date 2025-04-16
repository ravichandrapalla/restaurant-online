import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/manrope";
import Header from "@/components/ui/Header";
import AuthProvider from "@/components/lib/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}
        >
          <Header />
          <main className="h-[calc(100vh-88px)] w-full">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
