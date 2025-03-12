"use client";

import React, {FC, useState} from "react";
import Button from "@/app/components/ui/Button";
import ArrowRight from '../../public/svg/arrow-right-s-line.svg'
import ArrowLeft from '../../public/svg/arrow-left-s-line.svg'

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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="rounded-[32px] p-1x-large flex gap-1x-large w-full">
            <div className="basis-[384px] shrink-0 flex flex-col">
                <h5 className="text-2xl font-bold">{slides[currentIndex]?.title}</h5>
                <p className="text-body-big text-neutral-text-secondary">{slides[currentIndex]?.description}</p>

                <div className="flex gap-normal mt-auto">
                    <div className="grow">
                        <div className="p-normal h-[48px] bg-neutral-bg-on-subtle-default rounded-[8px] text-body-big space-x-2x-small inline-flex items-center justify-center">
                            <span className="text-neutral-text-secondary">{currentIndex + 1}</span>
                            <span className="text-neutral-text-tertiary">/ {slides.length}</span>
                        </div>
                    </div>
                    <div className="flex gap-1x-small">
                        <Button onSubtle iconOnly variant="secondary" onPress={prevSlide}><ArrowLeft/></Button>
                        <Button onSubtle iconOnly variant="secondary" onPress={nextSlide}><ArrowRight/></Button>
                    </div>
                </div>
            </div>
            <img
                className="h-[480px] bg-neutral-bg-on-subtle-default rounded-[8px] grow max-w-[800px] object-cover"
                src={slides[currentIndex]?.src}
                alt={slides[currentIndex]?.title}
            />
        </div>
    );
};

export default Slider;