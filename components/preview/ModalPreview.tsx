"use client";

import { cn } from "@/utils";
import { Button, Modal } from "../ui";
import useModal from "@/hooks/useModal";

interface ModalPreviewProps {
    className?: string;
}

const ModalPreview = (props: ModalPreviewProps) => {
    const [isOpen, openModal, closeModal, modalRef] = useModal();

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-12",
                props.className
            )}>
            <div className="flex flex-col items-center text-center">
                <h1 className="title-medium">Modal System</h1>

                <p className="text-p-medium max-w-xs sm:max-w-md">
                    This is a preview of the modal system component. The modal
                    system contains a separate overlay and a reusable custom
                    hook.
                </p>
            </div>

            {/* Open Modal Button */}
            <Button onClick={openModal} btnType="dark">
                Open Modal
            </Button>

            {/* Modal Component */}
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                title="Example Modal"
                modalRef={modalRef}
                className="gap-4">
                <p className="text-drd-neutral-600">
                    This is a modular modal system with a separate overlay and a
                    reusable custom hook.
                </p>

                <Button onClick={closeModal} btnType="light" fullWidth>
                    OK
                </Button>
            </Modal>
        </div>
    );
};

export default ModalPreview;
