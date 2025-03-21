"use client"

import React, {FC, HTMLProps, ReactNode} from 'react';
import {motion} from 'framer-motion';
import cn from 'classnames';
import MobileSlider from "@/app/components/MobileSlider";

export interface TiltedCardsProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode[];
}

const translationConfig: { [key: number]: number } = {
    0: 66.66,
    1: 0,
    2: -66.66,
};

const TiltedCards: FC<TiltedCardsProps> = ({children, ...props}) => {
    return (
        <MobileSlider
            translationConfig={translationConfig}
            {...props}
        >
            {children.map((child, index) => (
                <motion.div
                    key={index}
                    initial={{
                        opacity: 0,
                        x: index === 0 ? -60 : index === children.length - 1 ? 60 : 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        rotate: index !== 1 ? index === 0 ? -1.5 : index === children.length - 1 ? 1.5 : 0 : 0,
                        x: 0,
                        y: 0,
                    }}
                    viewport={{once: true}}
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
        </MobileSlider>
    );
};

export default TiltedCards;