"use client"

import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

export interface TiltedCardsProps {
    children: ReactNode[];
}

const TiltedCards: FC<TiltedCardsProps> = ({ children }) => {
    return (
        <div className="space-x-normal flex justify-center">
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
                        rotate: index === 0 ? -1.5 : index === children.length - 1 ? 1.5 : 0,
                        x: 0,
                        y: 0, // Конечное положение
                    }}
                    viewport={{ once: true }} // Анимация только один раз
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className={cn(
                        'transition-transform basis-[0] grow',
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
    );
};

export default TiltedCards;