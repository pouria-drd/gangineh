"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { Dropdown } from "@/components/ui";
import { HomeIcon, SettingsIcon, UserIcon } from "@/components/icons";

interface Props {
    className?: string;
}

const DropdownPreview = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState<{
        name: string;
        item: DropdownItem;
    } | null>(null);

    const dropdownItems: DropdownItem[] = [
        {
            label: "Profile",
            icon: <UserIcon className="w-5 h-5" />,
        },
        {
            label: "Settings",
            icon: <SettingsIcon className="w-5 h-5" />,
        },
        {
            label: "Home",
            icon: <HomeIcon className="w-5 h-5" />,
        },
    ];

    return (
        <div className={cn("space-y-12", props.className)}>
            <div className="flex flex-col items-center text-center">
                <h1 className="title-medium">Dropdowns</h1>

                <p className="text-p-medium max-w-xs sm:max-w-md">
                    This is a preview of the dropdowns component.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="title-small">Selected Item:</h2>
                <p className="text-p-small max-w-xs sm:max-w-md">
                    name: {selectedItem?.name}
                    <br />
                    item: {selectedItem?.item.label}
                </p>
            </div>

            <Dropdown
                onChange={(item) =>
                    setSelectedItem({ name: "Dropdown 1", item })
                }
                items={dropdownItems}
                label="Dropdown 1"
            />

            <Dropdown
                onChange={(item) =>
                    setSelectedItem({ name: "Dropdown 2", item })
                }
                items={dropdownItems}
                label="Dropdown 2"
            />
            <Dropdown
                onChange={(item) =>
                    setSelectedItem({ name: "Dropdown 3", item })
                }
                items={dropdownItems}
                label="Dropdown 3"
            />
        </div>
    );
};

export default DropdownPreview;
