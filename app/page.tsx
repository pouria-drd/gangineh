import { Button } from "@/components/ui/button";

function RootPage() {
    return (
        <div className="max-w-xs mx-auto">
            <div className="w-full space-y-4">
                <div className="flex items-center justify-center">
                    <Button className="mx-auto">Button</Button>
                    <Button className="mx-auto" isBusy>
                        Button
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <Button className="mx-auto" btnType="dark">
                        Button
                    </Button>
                    <Button className="mx-auto" btnType="dark" isBusy>
                        Button
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <Button className="mx-auto" btnType="light">
                        Button
                    </Button>
                    <Button className="mx-auto" btnType="light" isBusy>
                        Button
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RootPage;
