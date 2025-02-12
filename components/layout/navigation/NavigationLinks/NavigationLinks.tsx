"use client";

import NavLink from "./NavLink";
import { cn, isLinkActive } from "@/utils";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
    className?: string;
}

const NavigationLinks = (props: NavigationLinksProps) => {
    const pathname = usePathname();

    return (
        <div className={cn("flex gap-4", props.className)}>
            <NavLink href="/" isActive={isLinkActive(pathname, "/")}>
                Home
            </NavLink>

            <NavLink
                href="/playground"
                isActive={isLinkActive(pathname, "/playground")}>
                Playground
            </NavLink>
        </div>
    );
};

export default NavigationLinks;
