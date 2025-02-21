import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Playground",
};

interface PlaygroundLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<PlaygroundLayoutProps>) {
    return children;
}

export default RootLayout;
