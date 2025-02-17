import { Button } from "@/components/ui";

const NotFoundPage = () => {
    return (
        <div
            className="fixed top-0 leading-10
            bg-gradient-to-b bg-drd-primary-100
            from-drd-primary-100 to-white
            flex items-center justify-center
            w-screen h-screen z-[1000]">
            <div className="flex flex-col items-center justify-center p-">
                <h1 className="title-large">404 Error</h1>
                <p className="text-p-large">
                    Page you are looking for not found.
                </p>
                <Button btnType="primary" outline href="/" className="mt-4">
                    Back To Home Page
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
