"use client";

import styles from "./sidebar.module.css";
import { useEffect, useRef } from "react";
import { CloseButton } from "@/components/ui";
import { GanginehIcon } from "@/components/icons";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    onCloseSidebar: () => void;
    fullWidth?: boolean;
    side?: "left" | "right";
}

const Sidebar = (props: SidebarProps) => {
    const side = props.side || "right";

    const container = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            container.current &&
            !container.current.contains(event.target as Node)
        ) {
            props.onCloseSidebar(); // Close sidebar if clicked outside
        }
    };

    useEffect(() => {
        if (props.isOpen) {
            // Add event listener for clicks outside when sidebar is open
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            // Clean up the event listener when sidebar is closed
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            // Cleanup event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props.isOpen]);

    const containerVariants: Variants = {
        initial: {
            x: props.side === "left" ? "-100%" : "100%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "ease",
                duration: 0.25,
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
        exit: {
            x: props.side === "left" ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <AnimatePresence>
            {props.isOpen && (
                <>
                    {!props.fullWidth && (
                        <motion.div
                            className={`${styles.drdSidebarOverlay}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                    <motion.aside
                        ref={container}
                        variants={containerVariants}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        className={`${styles.drdSidebar} ${
                            side === "left" ? "left-0" : "right-0"
                        }  ${
                            props.fullWidth ? "w-full" : "min-w-72 w-[60dvw]"
                        } `}>
                        <div
                            className={`flex
                        ${side === "right" ? "flex-row-reverse" : "flex-row"}
                        items-center justify-between`}>
                            {/* Logo */}
                            <div
                                className={`flex 
                                    ${
                                        side === "right"
                                            ? "flex-row"
                                            : "flex-row-reverse"
                                    } items-center gap-1`}>
                                <span
                                    className="text-4xl text-drd-neutral-900
                                    font-bold font-sans uppercase">
                                    Gangineh
                                </span>
                                <GanginehIcon />
                            </div>
                            <CloseButton
                                onClick={props.onCloseSidebar}
                                className={`bg-drd-primary-100 hover:bg-drd-primary-200
                                transition-all text-drd-primary-600 p-1 rounded-lg`}
                            />
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
