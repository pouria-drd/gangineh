import Typography from "@/components/preview/Typography";
import ButtonPreview from "@/components/preview/ButtonPreview";

function RootPage() {
    return (
        <div className="flex flex-col gap-12 px-4">
            <Typography
                className="border-t border-t-drd-neutral-400
                first:border-none py-8"
            />
            <ButtonPreview className="border-t border-t-drd-neutral-400 py-8" />
        </div>
    );
}

export default RootPage;
