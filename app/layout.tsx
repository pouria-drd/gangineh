import "./styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout";

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
            <body className={`antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
