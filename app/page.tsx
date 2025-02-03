import { Button } from "@/components/ui/button";

function RootPage() {
    return (
        <div className="w-fit mx-auto">
            <div className="w-full space-y-4">
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
                    <Button className="mx-auto" btnType="dark">
                        Button
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
        </div>
    );
}

export default RootPage;
