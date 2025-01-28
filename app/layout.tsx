import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "گنجینه",
        template: "گنجینه | %s",
    },

    description: "گنجینه، جایی برای گنج‌ها",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="fa-IR">
            <body className={`antialiased r2l`}>{children}</body>
        </html>
    );
}

export default RootLayout;
