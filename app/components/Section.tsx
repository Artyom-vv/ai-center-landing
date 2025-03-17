"use client"

import React, {FC, HTMLProps, ReactNode, useEffect, useRef, useState} from 'react';
import cn from "classnames";

export interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    containerClass?: string
    className?: string,
    beforeContent?: ReactNode;
}

const Section: FC<SectionProps> = ({title, subtitle, containerClass, beforeContent, children, ...props}) => {

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
        console.log(value)
    }, [containerRef])

    return (
        <section
            {...props}
            className={cn(
                "py-[96px]",
                "relative z-20",
                props.className
            )}>

            <div
                style={{
                    background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    width: tintSize + 'px',
                }}
                className="w-[172px] h-full absolute bottom-[0] left-[0] z-10"></div>
            <div
                style={{
                    background: "linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    width: tintSize + 'px',
                }}
                className="w-[172px] h-full absolute bottom-[0] right-[0] z-10"></div>


            <div ref={containerRef} className={cn(
                "container relative",
                containerClass
            )}>
                {beforeContent}
                <div className="content space-y-1x-large flex flex-col relative z-20">
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
            </div>
        </section>
    );
};

export default Section;