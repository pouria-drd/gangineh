import { cn } from "@/utils";
import { FloatLabelInput, Input } from "@/components/ui";

interface InputPreviewProps {
    className?: string;
}
const InputPreview = (props: InputPreviewProps) => {
    return (
        <div className={cn("space-y-12", props.className)}>
            <div className="flex flex-col items-center text-center">
                <h1 className="title-small">Inputs</h1>

                <p className="text-p-medium max-w-xs sm:max-w-md">
                    This is a preview of the input component. The input contains
                    different styles such as floating label, error, and
                    disabled.
                </p>
            </div>

            <div className="space-y-4">
                <FloatLabelInput
                    dir="ltr"
                    label="float label input"
                    uniqueId="FloatLabelInput"
                />

                <FloatLabelInput
                    dir="rtl"
                    label="float label input right"
                    uniqueId="FloatLabelInputRight"
                />

                <FloatLabelInput
                    dir="ltr"
                    error="this is an error"
                    label="float label input with error"
                    uniqueId="FloatLabelInputWithError"
                />
            </div>

            <div className="space-y-4">
                <Input
                    dir="ltr"
                    label="normal input"
                    uniqueId="normal-input-id"
                    placeholder="this is a ltr normal input"
                    // error="This field is required"
                />

                <Input
                    dir="rtl"
                    label="normal input"
                    uniqueId="normal-rtl-input-id"
                    placeholder="this is a rtl normal input"
                    // error="This field is required"
                />

                <Input
                    dir="ltr"
                    label="normal input"
                    uniqueId="normal-error-input-id"
                    placeholder="this is a error normal input"
                    error="This field is required"
                />
            </div>
        </div>
    );
};

export default InputPreview;
