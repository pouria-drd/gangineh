"use client";

import { cn } from "@/utils";

interface NormalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    uniqueId: string;
    error?: string;
    dir?: "ltr" | "rtl"; // Add 'dir' prop to handle direction
}

const Input = (props: NormalInputProps) => {
    const {
        uniqueId,
        label,
        error,
        className,
        dir = "ltr",
        ...inputProps
    } = props;

    return (
        <div
            className={`flex flex-col gap-1 w-full relative ${
                dir === "rtl" ? "text-right" : "text-left"
            }`}>
            {label && (
                <label
                    htmlFor={uniqueId}
                    className={cn(
                        `text-xs font-medium 
                        ${dir === "rtl" ? "text-right pr-1" : "text-left pl-1"}
                        ${error ? "text-red-600" : "text-drd-neutral-700 "}
                        `
                    )}>
                    {label}
                </label>
            )}

            <input
                {...inputProps} // Spread the other props but exclude uniqueId
                id={uniqueId} // Explicitly set the id to uniqueId
                dir={dir} // Set the text direction of the input
                className={cn(
                    `outline-none transition-all peer
                    text-drd-neutral-800 text-sm
                    placeholder:text-xs placeholder:text-drd-neutral-400
                    border border-drd-primary-100
                    rounded-md px-2 w-full h-10 min-h-10
                    ${
                        error
                            ? "bg-red-50 border border-red-400 focus:border-red-600 selection:bg-red-200"
                            : "bg-drd-primary-50 selection:bg-drd-primary-200 focus:border-drd-primary"
                    }`,
                    className
                )}
            />

            {error && (
                <span className="text-xs text-red-600 w-full pr-2">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
