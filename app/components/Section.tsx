import React, {FC, HTMLProps, ReactNode} from 'react';
import cn from "classnames";

export interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    containerClass?: string
    className?: string
}

const Section: FC<SectionProps> = ({title, subtitle, containerClass, children, ...props}) => {
    return (
        <section
            {...props}
            className={cn(
                "py-[96px]",
                props.className
            )}>
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