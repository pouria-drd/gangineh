"use client";

import { cn } from "@/utils";
import { useToast } from "@/context/ToastContext"; // Import the useToast hook

interface ToastPreviewProps {
    className?: string;
}

const ToastPreview = (props: ToastPreviewProps) => {
    const { addToast } = useToast(); // Access the addToast function from context

    const showToast = (type: "success" | "error" | "info") => {
        addToast(`This is a ${type} message!`, type, {
            duration: 5000, // Auto-dismiss after 3 seconds
        });
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-12",
                props.className
            )}>
            <div className="flex flex-col items-center text-center">
                <h1 className="title-medium">Toast System</h1>

                <p className="text-p-medium max-w-xs sm:max-w-md">
                    This is a preview of the toast system component. Click any
                    button to trigger a toast notification of a different type
                    (success, error, info).
                </p>
            </div>

            {/* Buttons to trigger different types of toasts */}
            <div className="flex gap-4">
                <button
                    onClick={() => showToast("success")}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                    Show Success Toast
                </button>
                <button
                    onClick={() => showToast("error")}
                    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
                    Show Error Toast
                </button>
                <button
                    onClick={() => showToast("info")}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                    Show Info Toast
                </button>
            </div>
        </div>
    );
};

export default ToastPreview;
