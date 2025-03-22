"use client";

import {motion, useInView} from 'framer-motion';
import React, {useRef, ReactNode} from 'react';

interface AnimatedCardsProps {
    firstRowCards: ReactNode;
    secondRowCards: ReactNode;
    reverse?: boolean; // Добавляем проп reverse
}

const AnimatedCards = ({firstRowCards, secondRowCards, reverse = false}: AnimatedCardsProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    // Определяем анимации для первого и второго ряда в зависимости от reverse
    const variantsFirstRow = {
        hidden: {opacity: 0, x: reverse ? 250 : -250},
        visible: {opacity: 1, x: 0},
        exit: {opacity: 0, x: reverse ? -250 : 250},
    };

    const variantsSecondRow = {
        hidden: {opacity: 0, x: reverse ? -250 : 250},
        visible: {opacity: 1, x: 0},
        exit: {opacity: 0, x: reverse ? 250 : -250},
    };

    return (
        <div className="md:mt-5x-large mt-1x-large">
            <div
                className="space-y-normal rotate-[-1.5deg] xl:block hidden"
                ref={ref}>
                <motion.div
                    className="flex gap-normal"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    exit="exit"
                    variants={variantsFirstRow}
                    transition={{duration: 2, ease: [0.4, 0, 0.2, 1]}}
                >
                    {firstRowCards}
                </motion.div>
                <motion.div
                    className="flex gap-normal -translate-x-[71px]"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    exit="exit"
                    variants={variantsSecondRow}
                    transition={{duration: 2, ease: [0.4, 0, 0.2, 1]}}
                >
                    {secondRowCards}
                </motion.div>
            </div>
            <div className="xl:hidden grid grid-cols-2 auto-rows-fr gap-normal">
                {firstRowCards}
                {secondRowCards}
            </div>
        </div>
    );
};

export default AnimatedCards;