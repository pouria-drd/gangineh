"use client";

import { cn } from "@/utils";
import DropdownItem from "./DropdownItem";
import { useClickOutside } from "@/hooks";
import DropdownButton from "./DropdownButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";

interface DropdownProps {
    label: string;
    className?: string;
    items: DropdownItem[];
    onChange?: (item: DropdownItem) => void;
}

const Dropdown = (props: DropdownProps) => {
    // State to control the dropdown visibility
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // State to store the selected item
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

    // Ref for the dropdown button
    const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    // Ref for the dropdown container to check its position
    const dropdownButtonRef = useRef<HTMLButtonElement>(null);

    // State for dropdown position (up or down)
    const [direction, setDirection] = useState<"up" | "down">("down");

    // Memoize the toggle function to avoid unnecessary re-renders
    const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

    // Memoize the item click handler to avoid redefining functions
    const handleItemClick = useCallback((item: DropdownItem) => {
        item.onClick?.();
        setIsOpen(false);
        setSelectedItem(item);
        props.onChange?.(item);
    }, []);

    // Determine if the dropdown should open upward or downward
    useEffect(() => {
        if (dropdownButtonRef.current) {
            const { bottom } =
                dropdownButtonRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - bottom;
            setDirection(spaceBelow < 200 ? "up" : "down");
        }
    }, [isOpen]);

    return (
        <div
            ref={dropdownRef}
            className={cn(`relative min-w-32`, props.className)}>
            <DropdownButton
                isOpen={isOpen}
                label={props.label}
                direction={direction}
                selectedItem={selectedItem}
                buttonRef={dropdownButtonRef}
                toggleDropdown={toggleDropdown}
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: direction === "up" ? 10 : -10,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: direction === "up" ? 10 : -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute left-0 z-10 origin-top-left
                            bg-white border w-full border-drd-neutral-200
                            rounded-md shadow-lg ${
                                direction === "up"
                                    ? "bottom-full mb-2"
                                    : "top-full mt-2"
                            }`}>
                        <div className="flex flex-col items-center gap-1.5 px-1 py-1.5 w-full">
                            {props.items.map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    item={item}
                                    onClick={handleItemClick}
                                    isSelected={
                                        selectedItem?.label === item.label
                                    }
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
