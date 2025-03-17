import React from 'react';
import Section from "@/app/components/Section";
import PricePanel, {formatPrice} from "@/app/components/PricePanel";
import {RiGitPullRequestLine, RiSparkling2Line, RiSpeedUpFill} from "@remixicon/react";
import FadeIn from "@/app/components/FadeIn";
import RotatingCircle from "@/app/components/RotatingCircle";

const PricingPlans = () => {
    return (
        <Section
            containerClass="space-y-0"
            title="Наши тарифы"
            subtitle={(
                <>
                    Разрабатываем и внедряем искусственный интеллект <br/>для оптимизации процессов и открытия новых
                    возможностей роста
                </>
            )}
            beforeContent={<RotatingCircle className="size-[620px] absolute -left-[120px] -bottom-[551px]"/>}
        >
            <FadeIn>
                <div className="flex gap-normal">
                    <PricePanel
                        icon={<RiSpeedUpFill color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(300000)}
                        price={`от ${formatPrice(50000)}`}
                        title="Быстрый старт"
                        description="Быстрая интеграция ИИ для решения базовых задач на основе вашего технического задания"
                    />
                    <PricePanel
                        icon={<RiGitPullRequestLine color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(1200000)}
                        price={`от ${formatPrice(200000)}`}
                        title="Базовая ИИ-интеграция"
                        description="Аудит ключевых бизнес-процессов, разработка и внедрение ИИ на основе составленного технического задания"
                    />
                    <PricePanel
                        icon={<RiSparkling2Line color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(3600000)}
                        price={`от ${formatPrice(900000)}`}
                        title="Полная ИИ-трансформация"
                        description="Полный аудит всех бизнес-процессов, разработка и внедрение комплекса ИИ-решений, а также глубокая оптимизация вашего бизнеса."
                    />
                </div>
            </FadeIn>
        </Section>
    );
};

export default PricingPlans;
