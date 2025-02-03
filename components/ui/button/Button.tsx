"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { Spinner } from "../spinner";

interface BaseButtonProps {
    isBusy?: boolean;
    fullWidth?: boolean;
    className?: string;
    children?: React.ReactNode;
    btnType?: "primary" | "dark" | "light";
}

// Props for Link when rendering as an anchor (<a>).
interface LinkProps
    extends BaseButtonProps,
        React.AnchorHTMLAttributes<HTMLAnchorElement> {}

// Props for Button when rendering as a <button>.
interface ButtonProps
    extends BaseButtonProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Unified props type, supporting both Link and Button, with an optional `href` for Links.
type Props = (LinkProps | ButtonProps) & { href?: string };

const Button = ({
    isBusy = false, // Default value for loading state is false.
    btnType = "primary", // Default button style is "primary".
    fullWidth = false, // Default is not full-width.
    className, // Additional custom styles.
    children, // Content inside the component.
    href, // If provided, the component renders as a Link.
    ...rest // Spread operator to capture remaining props.
}: Props) => {
    // Styles based on the button type.
    const buttonType = {
        primary: `bg-gradient-to-b from-drd-primary to-drd-primary-600
        disabled:from-drd-primary-400 disabled:to-drd-primary-500
        hover:from-drd-primary-600 hover:to-drd-primary-700 text-drd-primary-50`,

        dark: `bg-gradient-to-b from-zinc-600 to-zinc-800
        disabled:from-zinc-600 disabled:to-zinc-800
        hover:from-zinc-700 hover:to-zinc-800 text-drd-primary-50`,

        light: `bg-zinc-200 hover:bg-zinc-300 disabled:hover:bg-zinc-200 text-zinc-800`,
    };

    if (href) {
        // Render as Link when `href` is provided.
        return (
            <Link
                href={href} // Navigate to the provided `href`.
                className={cn(
                    `${
                        buttonType[btnType]
                    } transition-all disabled:bg-opacity-85 text-base 
                    ${isBusy ? "cursor-wait" : "cursor-pointer"} 
                    text-center text-base
                    flex items-center justify-center
                    transition-all rounded-lg px-6 h-9 min-h-9 min-w-24
                    ${fullWidth ? "w-full" : "w-auto"}`,
                    className // Combine default and custom classes.
                )}
                {...(rest as LinkProps)} // Spread the rest of the props for <a>.
            >
                {isBusy ? (
                    <Spinner borderSize="2" className="w-6 mx-auto" />
                ) : (
                    children
                )}
            </Link>
        );
    }

    // Render as Button when `href` is not provided.
    return (
        <button
            disabled={isBusy} // Disable the button if in a busy state.
            className={cn(
                `${buttonType[btnType]} transition-all text-base 
                ${isBusy ? "cursor-not-allowed" : "cursor-pointer"} 
                text-center text-base
                flex items-center justify-center
                transition-all rounded-lg px-6 h-9 min-h-9 min-w-24
                ${fullWidth ? "w-full" : "w-auto"}`,
                className // Combine default and custom classes.
            )}
            {...(rest as ButtonProps)} // Spread the rest of the props for <button>.
        >
            {isBusy ? (
                <Spinner borderSize="1.75" className="w-[21.5px] mx-auto" />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
