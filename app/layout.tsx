import "./styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@/context/ToastContext";
import { Navigation } from "@/components/layout/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Gangineh",
        template: "Gangineh | %s",
    },

    description: "Gangineh, a place for treasures.",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} 
                font-[family-name:var(--font-geist-mono)]
                flex flex-col
                antialiased min-h-dvh`}>
                <ToastProvider>
                    <Navigation />
                    <main className="flex-grow">{children}</main>
                </ToastProvider>
            </body>
        </html>
        // font-[family-name:var(--font-geist-mono)]
    );
}

export default RootLayout;
