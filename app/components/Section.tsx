import React, {FC, ReactNode} from 'react';
import cn from "classnames";

export interface SectionProps {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    children?: ReactNode;
    containerClass?: string
}

const Section: FC<SectionProps> = ({title, subtitle, containerClass, children}) => {
    return (
        <section className="py-[96px]">
            <div className={cn(
                "container space-y-1x-large flex flex-col",
                containerClass
            )}>
                <div className="flex flex-col items-center space-y-normal text-center">
                    {title && (
                        <h4>{title}</h4>
                    )}
                    {subtitle && (
                        <p className="text-body-large text-neutral-text-secondary">
                            {subtitle}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;