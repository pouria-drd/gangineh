"use client";

import { useScroll } from "@/hooks";
import { SidebarButton } from "@/components/ui";
import { GanginehIcon } from "@/components/icons";
import { NavigationLinks } from "../NavigationLinks";

interface NavbarProps {
    onOpenSidebar: () => void;
}

const Navbar = (props: NavbarProps) => {
    const [isScrolled] = useScroll(50);

    function handleSidebarButtonClick() {
        props.onOpenSidebar();
    }

    return (
        <nav
            className={`sticky top-0 z-10 ${
                isScrolled
                    ? "bg-drd-primary-50 bg-opacity-90 glass-effect"
                    : "bg-transparent"
            } flex items-center justify-between p-4`}>
            {/* Logo */}
            <GanginehIcon />

            {/* Navigation Links */}
            <NavigationLinks className="hidden sm:flex" />

            <SidebarButton
                className="sm:hidden"
                onClick={handleSidebarButtonClick}
            />
        </nav>
    );
};

export default Navbar;
