"use client"

import {motion} from "framer-motion";
import {FC, HTMLProps} from "react";

const FadeIn: FC<HTMLProps<HTMLDivElement> & {duration?: number}> = ({children, duration = 1.3}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 40}} // Начальное состояние (невидимо и смещено вниз)
            whileInView={{opacity: 1, y: 0}} // Анимация при появлении в области видимости
            viewport={{once: true}} // Анимация выполняется только один раз
            transition={{duration, ease: 'easeInOut'}} // Параметры анимации
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;