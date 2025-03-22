"use client"

import React, {FC, HTMLProps, ReactNode, useEffect, useRef, useState} from 'react';
import cn from "classnames";

export interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    containerClass?: string
    contentClass?: string
    className?: string,
    beforeContent?: ReactNode;
    afterContainer?: ReactNode;
}

const Section: FC<SectionProps> = ({title, subtitle, containerClass, beforeContent, contentClass , children, afterContainer, ...props}) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [tintSize, setTintSize] = useState(0)

    const getRemainsSpace = () => {
        if (containerRef.current) {
            return (document.documentElement.offsetWidth - containerRef.current.offsetWidth) / 2;
        }
        return 0
    }

    useEffect(() => {
        const value = getRemainsSpace();
        setTintSize(value);
    }, [containerRef])

    return (
        <section
            {...props}
            className={cn(
                "md:py-[96px] py-5x-large",
                "relative z-20",
                props.className
            )}>

            <div
                style={{
                    background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    width: tintSize + 'px',
                }}
                className="min-w-[172px] h-full absolute bottom-[0] left-[0] z-10"></div>
            <div
                style={{
                    background: "linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    width: tintSize + 'px',
                }}
                className="min-w-[172px] h-full absolute bottom-[0] right-[0] z-10"></div>


            <div ref={containerRef} className={cn(
                "container relative",
                containerClass
            )}>
                {beforeContent}
                <div className={cn(
                    "content space-y-1x-large flex flex-col relative z-20",
                    contentClass
                )}>
                    <div className="flex flex-col items-center space-y-normal text-center">
                        {title && (
                            <h4>{title}</h4>
                        )}
                        {subtitle && (
                            <p className="xl:text-body-large text-body-big text-neutral-text-secondary">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {children}
                </div>
            </div>
            {afterContainer}
        </section>
    );
};

export default Section;