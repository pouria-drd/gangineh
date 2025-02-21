"use client";

import { cn } from "@/utils";
import styles from "./input.module.css";

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
                        `${styles.drdInputLabel}
                        ${dir === "rtl" ? "text-right" : "text-left"}
                        ${
                            error
                                ? `${styles.drdInputLabelError}`
                                : `${styles.drdInputLabelNormal}`
                        }
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
                    `peer ${styles.drdInput} 
                    ${
                        error
                            ? `${styles.drdInputError}`
                            : `${styles.drdInputNormal}`
                    }`,
                    className
                )}
            />
            {error && (
                <span className={`${styles.drdInputErrorMessage}`}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
