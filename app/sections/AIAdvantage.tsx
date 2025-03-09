import React from 'react';
import Section from "@/app/components/Section";
import Button from "@/app/components/ui/Button";
import Sparks from '../../public/svg/sparkling-2-fill.svg'

const AIAdvantage = () => {
    return (
        <Section>
            <div className="flex flex-col items-center gap-3x-large p-3x-large rounded-[16px] bg-neutral-bg-subtle-default">
                <div className="flex flex-col items-center ">
                    <h3>Будьте на шаг впереди конкурентов,</h3>
                    <div className="flex items-center space-x-small">
                        <h3 className="hero-text-gradient">работайте с ИИ уже сейчас</h3>
                        <Sparks/>
                    </div>
                </div>
                <Button>Оставить заявку</Button>
            </div>
        </Section>
    );
};

export default AIAdvantage;
