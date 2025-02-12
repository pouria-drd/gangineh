"use client";

import { useState } from "react";
import { useScroll } from "@/hooks";
import { Button } from "@/components/ui";
import { GanginehIcon } from "@/components/icons";
import { NavigationLinks } from "../NavigationLinks";

const Navbar = () => {
    const [isScrolled] = useScroll(50);
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <nav
            className={`${
                isScrolled ? "bg-drd-primary-50" : "bg-transparent"
            } sticky top-0 z-10 flex items-center justify-between p-4`}>
            {/* Logo */}
            <GanginehIcon />

            {/* Navigation Links */}
            <NavigationLinks className="hidden sm:flex" />

            {/* <div className="flex items-center gap-4">
                <NavigationLinks />

                <Button
                    btnType="dark"
                    outline={!isAuthenticated}
                    onClick={() => setIsAuthenticated(!isAuthenticated)}>
                    {isAuthenticated ? "Logout" : "Login"}
                </Button>
            </div> */}
        </nav>
    );
};

export default Navbar;
