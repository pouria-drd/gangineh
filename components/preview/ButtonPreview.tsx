import { cn } from "@/utils";
import { Button } from "@/components/ui";

interface ButtonPreviewProps {
    className?: string;
}

const ButtonPreview = (props: ButtonPreviewProps) => {
    return (
        <div className={cn("space-y-12", props.className)}>
            <div className="flex flex-col items-center text-center">
                <h1 className="title-small">Buttons</h1>

                <p className="text-p-medium max-w-xs sm:max-w-md">
                    This is a preview of the buttons component. The buttons
                    contains different styles such as primary, dark, light, and
                    outline.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Button className="mx-auto">Button</Button>
                <Button className="mx-auto" isBusy>
                    Button
                </Button>

                <Button className="mx-auto" outline>
                    Button
                </Button>
                <Button className="mx-auto" outline isBusy>
                    Button
                </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Button
                    className="mx-auto"
                    btnType="dark"
                    href="https://google.com"
                    target="_blank">
                    Link
                </Button>
                <Button className="mx-auto" btnType="dark" isBusy>
                    Button
                </Button>

                <Button className="mx-auto" btnType="dark" outline>
                    Button
                </Button>
                <Button className="mx-auto" btnType="dark" outline isBusy>
                    Button
                </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Button className="mx-auto" btnType="light">
                    Button
                </Button>
                <Button className="mx-auto" btnType="light" isBusy>
                    Button
                </Button>

                <Button className="mx-auto" btnType="light" outline>
                    Button
                </Button>
                <Button className="mx-auto" btnType="light" outline isBusy>
                    Button
                </Button>
            </div>
        </div>
    );
};

export default ButtonPreview;
