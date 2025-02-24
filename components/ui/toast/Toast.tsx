"use client";

import { motion } from "framer-motion";
import styles from "./toast.module.css";

interface ToastProps {
    id: string;
    message: string;
    duration: number;
    onDismiss: () => void;
    type: "success" | "error" | "info";
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Toast = (props: ToastProps) => {
    const loaderStyle = {
        "--toastDuration": `${props.duration / 1000}s`,
    } as React.CSSProperties;

    const positionStyle = () => {
        switch (props.position) {
            case "top-left":
                return "top-4 left-1 sm:left-4";

            case "top-right":
                return "top-4 right-1 sm:right-4";

            case "bottom-left":
                return "bottom-4 left-1 sm:left-4";

            case "bottom-right":
                return "bottom-4 right-1 sm:right-4";

            default:
                return "top-4 right-1 sm:right-4";
        }
    };

    return (
        <motion.div
            role="alert"
            key={props.id}
            aria-atomic="true"
            style={loaderStyle}
            aria-live="assertive"
            className={`${styles.toast} ${
                styles[props.type]
            }  ${positionStyle()} 
            ${styles.toastProgress}
            
            `}
            initial={{
                opacity: 0,
                translateX: props.position === "top-right" ? 20 : -20,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{
                opacity: 0,
                translateX: props.position === "top-right" ? 100 : -100,
            }}
            transition={{ duration: 0.3, ease: "backIn" }}>
            <div className="w-full transition-all">
                <span className="text-center text-wrap text-sm w-full">
                    {props.message}
                </span>
            </div>
        </motion.div>
    );
};

export default Toast;
