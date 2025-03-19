"use client"

import React, {FC, HTMLProps, ReactNode, useState} from 'react';
import {motion} from 'framer-motion';
import cn from 'classnames';
import Button from "@/app/components/ui/Button";
import {RiArrowLeftSLine, RiArrowRightSLine} from "@remixicon/react";

export interface TiltedCardsProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode[];
}

const translationConfig: { [key: number]: number } = {
    0: 66.66,
    1: 0,
    2: -66.66,
};

const TiltedCards: FC<TiltedCardsProps> = ({children, ...props}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    const prev = () => {
        const prevIndex = activeIndex - 1
        if (prevIndex >= 0) {
            setActiveIndex(prevIndex)
        }
    }

    const next = () => {
        const nextIndex = activeIndex + 1
        if (nextIndex <= 2) {
            setActiveIndex(nextIndex)
        }
    }

    return (
        <div
            {...props}
            className={cn(
                "relative",
                props.className
            )}>
            <div className="container">
                <div className="cards-wrapper relative">
                    <div
                        style={{
                            transform: `translateX(${translationConfig[activeIndex]}%)`,
                        }}
                        className="transition duration-300 space-x-normal flex justify-center">
                        {children.map((child, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index === 0 ? -60 : index === children.length - 1 ? 60 : 0,
                                    y: 20, // Начальное смещение вниз
                                }}
                                whileInView={{
                                    opacity: 1,
                                    rotate: index !== activeIndex ? index === 0 ? -1.5 : index === children.length - 1 ? 1.5 : 0 : 0,
                                    x: 0,
                                    y: 0, // Конечное положение
                                }}
                                viewport={{once: true}} // Анимация только один раз
                                transition={{
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                }}
                                className={cn(
                                    'transition-transform basis-[416px] grow shrink-0',
                                    {
                                        'pt-[5px]': index === 0 || index === children.length - 1,
                                        'pr-[6px]': index === 0,
                                        'pl-[6px]': index === children.length - 1,
                                    }
                                )}
                            >
                                {child}
                            </motion.div>
                        ))}
                    </div>
                    <Button onPress={prev} onSubtle className="xl:hidden flex absolute top-1/2 left-[0] -translate-y-1/2 z-30" round
                            variant="secondary"
                            iconOnly>
                        <RiArrowLeftSLine size={16} color="var(--color-neutral-text-primary)"></RiArrowLeftSLine>
                    </Button>
                    <Button onPress={next} onSubtle className="xl:hidden flex absolute top-1/2 right-[0] -translate-y-1/2 z-30" round
                            variant="secondary"
                            iconOnly>
                        <RiArrowRightSLine size={16} color="var(--color-neutral-text-primary)"></RiArrowRightSLine>
                    </Button>
                </div>
            </div>
            <div
                style={{
                    background: "linear-gradient(270deg, #000000 68%, rgba(0, 0, 0, 0) 100%)"
                }}
                className="xl:hidden block absolute right-[0] top-[0] h-full w-[136px]"></div>
            <div
                style={{
                    background: "linear-gradient(90deg, #000000 68%, rgba(0, 0, 0, 0) 100%)"
                }}
                className="xl:hidden block absolute left-[0] top-[0] h-full w-[136px]"></div>
        </div>
    );
};

export default TiltedCards;