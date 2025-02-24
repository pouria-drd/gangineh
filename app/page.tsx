import {
    Typography,
    InputPreview,
    ButtonPreview,
    DropdownPreview,
    ModalPreview,
} from "@/components/preview";

function RootPage() {
    return (
        <div className="flex flex-col gap-12 px-4">
            <Typography
                className="border-t border-t-drd-neutral-400
                first:border-none pt-12"
            />

            <ButtonPreview className="border-t border-t-drd-neutral-400 py-8" />

            <DropdownPreview className="border-t border-t-drd-neutral-400 py-8" />

            <InputPreview className="border-t border-t-drd-neutral-400 py-8" />

            <ModalPreview className="border-t border-t-drd-neutral-400 py-8" />
        </div>
    );
}

export default RootPage;
