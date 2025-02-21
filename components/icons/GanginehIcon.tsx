import { cn } from "@/utils";
import Link from "next/link";
import Image from "next/image";

interface GanginehIconProps {
    href?: string;
    className?: string;
}

const GanginehIcon = (props: GanginehIconProps) => {
    return (
        <Link href={props.href || "/"}>
            <Image
                width={512}
                height={512}
                alt="GanginehIcon"
                src="/assets/images/png/GanginehIcon.png"
                className={cn("w-9 sm:w-10", props.className)}
            />
        </Link>
    );
};

export default GanginehIcon;
