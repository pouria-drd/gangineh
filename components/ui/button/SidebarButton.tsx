"use client";

import { cn } from "@/utils";
import { SquaresIcon } from "@/components/icons";

interface SidebarButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const SidebarButton = (props: SidebarButtonProps) => {
    return (
        <button
            {...props}
            className={cn(
                `bg-drd-primary-100 transition-all
                bg-opacity-65 hover:bg-opacity-100
                text-drd-primary rounded-lg p-1 z-0`,
                props.className
            )}>
            <SquaresIcon />
        </button>
    );
};

export default SidebarButton;
