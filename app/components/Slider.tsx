"use client";

import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/app/components/ui/Button";
import ArrowRight from '../../public/svg/arrow-right-s-line.svg';
import ArrowLeft from '../../public/svg/arrow-left-s-line.svg';
import FadeIn from "@/app/components/FadeIn";

export interface Slide {
    src: string;
    title: string;
    description: string;
}

export interface SliderProps {
    slides: Slide[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right"); // Направление переключения

    const nextSlide = () => {
        setDirection("right"); // Устанавливаем направление вправо
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection("left"); // Устанавливаем направление влево
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Анимация для текста
    const textAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20 },
    };

    // Анимация для изображения (вправо)
    const imageAnimationRight = {
        hidden: { opacity: 0, x: -100 }, // Изображение уходит влево
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 150 }, // Изображение приходит справа
    };

    // Анимация для изображения (влево)
    const imageAnimationLeft = {
        hidden: { opacity: 0, x: 150 }, // Изображение уходит вправо
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100 }, // Изображение приходит слева
    };

    return (
        <FadeIn>
            <div
                className="rounded-[32px] p-1x-large flex gap-1x-large w-full bg-neutral-bg-subtle-default overflow-hidden"> {/* Добавлен overflow-hidden */}
                <div className="basis-[384px] shrink-0 flex flex-col relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={textAnimation}
                            className="space-y-normal"
                        >
                            <h5 className="text-2xl font-bold">{slides[currentIndex]?.title}</h5>
                            <p className="text-body-big text-neutral-text-secondary">
                                {slides[currentIndex]?.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex gap-normal mt-auto">
                        <div className="grow">
                            <div
                                className="p-normal h-[48px] bg-neutral-bg-on-subtle-default rounded-[8px] text-body-big space-x-2x-small inline-flex items-center justify-center">
                                <span className="text-neutral-text-secondary">{currentIndex + 1}</span>
                                <span className="text-neutral-text-tertiary">/ {slides.length}</span>
                            </div>
                        </div>
                        <div className="flex gap-1x-small">
                            <Button onSubtle iconOnly variant="secondary" onPress={prevSlide}>
                                <ArrowLeft/>
                            </Button>
                            <Button onSubtle iconOnly variant="secondary" onPress={nextSlide}>
                                <ArrowRight/>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Изображение без контейнера */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={currentIndex}
                        className="h-[480px] bg-neutral-bg-on-subtle-default rounded-[8px] grow max-w-[800px] object-cover relative z-[1]"
                        src={slides[currentIndex]?.src}
                        alt={slides[currentIndex]?.title}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={direction === "right" ? imageAnimationRight : imageAnimationLeft} // Выбор анимации в зависимости от направления
                        custom={direction} // Передаем направление в анимацию
                        transition={{ease: "easeInOut"}} // Плавная анимация
                    />
                </AnimatePresence>
            </div>
        </FadeIn>
    );
};

export default Slider;