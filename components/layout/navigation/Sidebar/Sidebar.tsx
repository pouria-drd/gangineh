"use client";

import styles from "./sidebar.module.css";
import { useClickOutside } from "@/hooks";
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

    // Attach the click-outside hook to the wrapper element
    const sidebarRef = useClickOutside<HTMLDivElement>(props.onCloseSidebar);

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
                        ref={sidebarRef}
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
                                    className="text-3xl text-drd-neutral-900
                                    font-bold font-sans uppercase">
                                    Gangineh
                                </span>
                                <GanginehIcon className="w-7 xs:w-8 sm:w-9" />
                            </div>
                            <CloseButton
                                onClick={props.onCloseSidebar}
                                className={`bg-drd-primary-200 transition-all
                                bg-opacity-65 hover:bg-opacity-100
                                text-drd-primary p-1 rounded-lg`}
                            />
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
