import { ChevronUp } from "@/components/icons";

interface DropdownButtonProps {
    selectedItem: DropdownItem | null;
    label: string;
    isOpen: boolean;
    direction: "up" | "down";
    toggleDropdown: () => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>; // Allow null for the ref
}

const DropdownButton = (props: DropdownButtonProps) => {
    const {
        selectedItem,
        label,
        isOpen,
        direction,
        buttonRef,
        toggleDropdown,
    } = props;

    return (
        <button
            ref={buttonRef}
            onClick={toggleDropdown}
            className="flex items-center justify-between gap-1 w-full
            text-drd-neutral-700 min-h-9 h-9 p-2 text-base
            bg-white border border-drd-neutral-200 rounded-md
            hover:bg-drd-neutral-50 focus:bg-drd-neutral-50">
            <div className="truncate">
                {selectedItem ? (
                    <div className="flex items-center gap-1">
                        {selectedItem.icon && <span>{selectedItem.icon}</span>}
                        <span>{selectedItem.label}</span>
                    </div>
                ) : (
                    <span>{label}</span>
                )}
            </div>

            <ChevronUp
                className={`transition-transform duration-200 w-5 h-5 min-w-5 
                    ${
                        isOpen
                            ? direction === "up"
                                ? "rotate-180"
                                : ""
                            : direction === "up"
                            ? ""
                            : "rotate-180"
                    }
                `}
            />
        </button>
    );
};

export default DropdownButton;
