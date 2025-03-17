import React from 'react';
import Section from "@/app/components/Section";
import Button from "@/app/components/ui/Button";
import {RiSparkling2Fill} from "@remixicon/react";
import RotatingCircle from "@/app/components/RotatingCircle";
import FadeIn from "@/app/components/FadeIn";

const AIAdvantage = () => {
    return (
        <Section
            beforeContent={<RotatingCircle className="size-[550px] absolute -left-[140px] -bottom-[580px]"/>}
        >
            <FadeIn>
                <div
                    className="flex flex-col items-center gap-3x-large p-3x-large rounded-[16px] bg-neutral-bg-subtle-default">
                    <div className="flex flex-col items-center ">
                        <h3>Будьте на шаг впереди конкурентов,</h3>
                        <div className="flex items-center space-x-small">
                            <h3 className="hero-text-gradient">работайте с ИИ уже сейчас</h3>
                            <RiSparkling2Fill size={32} color="var(--color-cyan-500)"/>
                        </div>
                    </div>
                    <Button>Оставить заявку</Button>
                </div>
            </FadeIn>
        </Section>
    );
};

export default AIAdvantage;
