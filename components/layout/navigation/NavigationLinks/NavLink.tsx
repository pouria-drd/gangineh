import Link from "next/link";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    className?: string;
    children?: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <div className={cn("", props.className)}>
            <Link
                href={props.href}
                className={`${
                    props.isActive
                        ? "text-drd-primary"
                        : "text-drd-neutral-600 hover:text-neutral-700"
                } font-sans font-semibold`}>
                {props.children}
            </Link>
            {props.isActive && (
                <motion.span
                    layoutId="drd-navlink"
                    className="mt-0.5 h-0.5 bg-drd-primary w-full block rounded-lg"
                />
            )}
        </div>
    );
};

export default NavLink;
