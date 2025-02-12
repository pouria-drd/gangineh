import { cn } from "@/utils";

interface TypographyProps {
    className?: string;
}

const Typography = (props: TypographyProps) => {
    return (
        <div className={cn("space-y-8", props.className)}>
            <h1 className="title-extra-large">Typography</h1>
            <p className="text-p-large text-drd-neutral-700">
                Here’s how different heading and paragraph styles should be
                paired for the best readability.
            </p>

            {/* Pairings */}
            <div className="space-y-8">
                {/* Extra Large Title + Large Paragraph */}
                <div>
                    <h2 className="title-extra-large">Extra Large Title</h2>
                    <p className="text-p-large">
                        Best for hero sections or main page headers.
                    </p>
                </div>

                {/* Large Title + Medium Paragraph */}
                <div>
                    <h2 className="title-large">Large Title</h2>
                    <p className="text-p-medium">
                        Ideal for section headings with medium-length
                        descriptions.
                    </p>
                </div>

                {/* Medium Title + Medium Paragraph */}
                <div>
                    <h3 className="title-medium">Medium Title</h3>
                    <p className="text-p-medium">
                        Used for subheadings or supporting sections.
                    </p>
                </div>

                {/* Small Title + Small Paragraph */}
                <div>
                    <h4 className="title-small">Small Title</h4>
                    <p className="text-p-small">
                        Best for captions, small info sections, or footnotes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Typography;
