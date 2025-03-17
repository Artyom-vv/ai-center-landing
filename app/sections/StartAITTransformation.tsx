import React from 'react';
import Section from "@/app/components/Section";
import StatsPanel from "@/app/components/StatsPanel";
import TiltedCards from "@/app/components/TiltedCards";
import Button from "@/app/components/ui/Button";
import RotatingCircle from "@/app/components/RotatingCircle";

const StartAitTransformation = () => {
    return (
        <Section
            beforeContent={<RotatingCircle className="size-[552px] absolute -right-[268px] -bottom-[534px]"/>}
            title=" Приступите к ИИ-трансформации уже сегодня! ">
            <TiltedCards>
                <StatsPanel
                    title="Более 5%"
                    description="Рост прибыли при внедрении ИИ в производственный процесс"
                    src="/stats/1.png"
                />
                <StatsPanel
                    title="На 60%"
                    description="Возможно снизить издержки на ключевых бизнес-процессах"
                    src="/stats/2.png"
                />
                <StatsPanel
                    title="Менее 3%"
                    description="Компаний на рынке эффективно используют ИИ для решения актуальных бизнес-задач"
                    src="/stats/3.png"
                />
            </TiltedCards>
            <Button className="self-center">
                Начните внедрение
            </Button>
        </Section>
    );
};

export default StartAitTransformation;