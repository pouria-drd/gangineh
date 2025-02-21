"use client";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Fragment, useState } from "react";

const Navigation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    function handleSidebarOpenStatus(isOpen: boolean) {
        setIsSidebarOpen(isOpen);
    }

    return (
        <Fragment>
            <Navbar onOpenSidebar={() => handleSidebarOpenStatus(true)} />

            <Sidebar
                isOpen={isSidebarOpen}
                onCloseSidebar={() => handleSidebarOpenStatus(false)}
            />
        </Fragment>
    );
};

export default Navigation;
