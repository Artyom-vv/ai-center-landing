import React from 'react';
import Section from "@/app/components/Section";
import Button from "@/app/components/ui/Button";
import {RiSparkling2Fill} from "@remixicon/react";
import RotatingCircle from "@/app/components/RotatingCircle";
import FadeIn from "@/app/components/FadeIn";

const AIAdvantage = () => {
    return (
        <Section
            beforeContent={<RotatingCircle className="size-[420px] absolute -left-[155px] -bottom-[310px]"/>}
        >
            <FadeIn className="max-md:-mx-normal">
                <div
                    className="flex flex-col items-center md:gap-3x-large gap-large md:p-3x-large p-large rounded-[16px] bg-neutral-bg-subtle-default">
                    <div className="flex flex-col items-center max-md:text-center">
                        <h3 className="hidden xl:block">Будьте на шаг впереди конкурентов,</h3>
                        <h5 className="block xl:hidden">Будьте на шаг впереди конкурентов,</h5>
                        <div className="flex items-center space-x-1x-small">
                            <h3 className="hero-text-gradient hidden xl:block">работайте с ИИ уже сейчас</h3>
                            <h5 className="hero-text-gradient block xl:hidden">работайте с ИИ уже сейчас</h5>
                            <RiSparkling2Fill className="max-xl:size-[24px] max-md:h-[32px] max-md:w-[20px]" size={32} color="var(--color-cyan-500)"/>
                        </div>
                    </div>
                    <Button className="max-md:w-full">Оставить заявку</Button>
                </div>
            </FadeIn>
        </Section>
    );
};

export default AIAdvantage;
