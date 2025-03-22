import React from 'react';
import Section from "@/app/components/Section";
import StatsPanel from "@/app/components/StatsPanel";
import TiltedCards from "@/app/components/TiltedCards";
import Button from "@/app/components/ui/Button";
import RotatingCircle from "@/app/components/RotatingCircle";

const statsData = [
    {
        title: "Более 5%",
        description: "Рост прибыли при внедрении ИИ в производственный процесс",
        src: "/stats/1.png"
    },
    {
        title: "На 60%",
        description: "Возможно снизить издержки на ключевых бизнес-процессах",
        src: "/stats/2.png"
    },
    {
        title: "Менее 3%",
        description: "Компаний на рынке эффективно используют ИИ для решения актуальных бизнес-задач",
        src: "/stats/3.png"
    }
];

const StartAitTransformation = () => {
    return (
        <Section
            beforeContent={<RotatingCircle className="md:size-[552px] size-[140px] absolute md:-right-[268px] right-[44px] md:-bottom-[534px] -bottom-[276px]"/>}
            title={<>
                Приступите <br className="md:hidden"/> к ИИ-трансформации <br className="md:hidden"/>уже сегодня!
            </>}>
            <TiltedCards className="xl:block hidden">
                {statsData.map((stat, index) => (
                    <StatsPanel key={index} title={stat.title} description={stat.description} src={stat.src} />
                ))}
            </TiltedCards>
            <Button className="self-center xl:flex hidden">
                Начните внедрение
            </Button>
            <div className="xl:hidden flex flex-col gap-1x-large">
                {statsData.map((stat, index) => (
                    <StatsPanel key={index} title={stat.title} description={stat.description} src={stat.src} />
                ))}
            </div>
        </Section>
    );
};

export default StartAitTransformation;
