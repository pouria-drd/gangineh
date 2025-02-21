import { memo } from "react";

interface DropdownItemProps {
    item: DropdownItem; // Type for your dropdown item object
    isSelected: boolean; // Optional isSelected prop
    onClick: (item: DropdownItem) => void; // Function to handle item click
}

// Memoize the DropdownItem to prevent unnecessary re-renders
const DropdownItem = memo((props: DropdownItemProps) => {
    return (
        <button
            onClick={() => props.onClick(props.item)}
            className={`flex items-center gap-2 w-full p-1.5
                text-sm truncate hover:bg-drd-primary-50
                hover:text-drd-primary rounded-lg
                 ${
                     props.isSelected
                         ? "bg-drd-primary-50 text-drd-primary"
                         : "text-drd-neutral-600"
                 }`}>
            {props.item.icon && <span>{props.item.icon}</span>}
            {props.item.label}
        </button>
    );
});

export default DropdownItem;
