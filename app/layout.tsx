import "./styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout";

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
            <body className={`antialiased min-h-dvh`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
