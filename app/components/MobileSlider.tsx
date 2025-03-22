"use client"

import React, { FC, HTMLProps, ReactNode, useState } from 'react';
import cn from 'classnames';
import Button from "@/app/components/ui/Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export interface SliderProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    translationConfig: { [key: number]: number };
}

const MobileSlider: FC<SliderProps> = ({ children, translationConfig, ...props }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const prev = () => {
        const prevIndex = activeIndex - 1;
        if (prevIndex >= 0) {
            setActiveIndex(prevIndex);
        }
    };

    const next = () => {
        const nextIndex = activeIndex + 1;
        if (nextIndex <= 2) {
            setActiveIndex(nextIndex);
        }
    };

    return (
        <div
            {...props}
            className={cn(
                "relative",
                props.className
            )}
        >
            <div className="container">
                <div className="cards-wrapper relative">
                    <div
                        style={{
                            transform: `translateX(${translationConfig[activeIndex]}%)`,
                        }}
                        className="transition duration-300 space-x-normal flex justify-center"
                    >
                        {children}
                    </div>
                    <Button
                        isDisabled={activeIndex === 0}
                        onPress={prev}
                        onSubtle
                        className="xl:hidden flex absolute top-1/2 left-[0] -translate-y-1/2 z-30"
                        round
                        variant="secondary"
                        iconOnly
                    >
                        <RiArrowLeftSLine size={16} color="var(--color-neutral-text-primary)" />
                    </Button>
                    <Button
                        isDisabled={activeIndex === 2}
                        onPress={next}
                        onSubtle
                        className="xl:hidden flex absolute top-1/2 right-[0] -translate-y-1/2 z-30"
                        round
                        variant="secondary"
                        iconOnly
                    >
                        <RiArrowRightSLine size={16} color="var(--color-neutral-text-primary)" />
                    </Button>
                </div>
            </div>
            <div
                style={{
                    background: "linear-gradient(270deg, #000000 68%, rgba(0, 0, 0, 0) 100%)",
                }}
                className="xl:hidden block absolute right-[0] top-[0] h-full w-[136px]"
            />
            <div
                style={{
                    background: "linear-gradient(90deg, #000000 68%, rgba(0, 0, 0, 0) 100%)",
                }}
                className="xl:hidden block absolute left-[0] top-[0] h-full w-[136px]"
            />
        </div>
    );
};

export default MobileSlider;