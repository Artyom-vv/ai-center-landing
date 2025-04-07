import React from 'react';
import Section from "@/app/components/Section";
import PricePanel, {formatPrice} from "@/app/components/PricePanel";
import {RiGitPullRequestLine, RiSparkling2Line, RiSpeedUpFill} from "@remixicon/react";
import FadeIn from "@/app/components/FadeIn";
import RotatingCircle from "@/app/components/RotatingCircle";

const PricingPlans = () => {
    return (
        <Section
            id="price-plans"
            containerClass="space-y-0"
            title="Наши тарифы"
            subtitle={(
                <>
                    <span className="max-md:hidden">
                        Разрабатываем и внедряем искусственный интеллект <br/>для оптимизации процессов и открытия новых
                        возможностей роста
                    </span>
                    <span className="md:hidden">
                       Разрабатываем и внедряем ИИ <br/>для оптимизации процессов и открытия <br/>новых возможностей роста
                    </span>
                </>
            )}
            beforeContent={<RotatingCircle className="max-md:hidden size-[620px] absolute -left-[120px] -bottom-[551px]"/>}
        >
            <FadeIn>
                <div className="flex xl:flex-row flex-col xl:gap-normal gap-1x-large">
                <PricePanel
                        icon={<RiSpeedUpFill color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(300000)}
                        price={`от ${formatPrice(50000)}`}
                        title="Быстрый старт"
                        descriptions={[
                            "Быстрая интеграция ИИ для решения базовых задач на основе вашего технического задания"
                        ]}
                    />
                    <PricePanel
                        icon={<RiGitPullRequestLine color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(1200000)}
                        price={`от ${formatPrice(200000)}`}
                        title="Базовая ИИ-интеграция"
                        descriptions={[
                            "Аудит ключевых бизнес-процессов",
                            "Разработка и внедрение ИИ на основе составленного технического задания"
                        ]}
                    />
                    <PricePanel
                        icon={<RiSparkling2Line color="var(--color-neutral-text-heading)" size={24}/>}
                        sale={formatPrice(3600000)}
                        price={`от ${formatPrice(900000)}`}
                        title="Полная ИИ-трансформация"
                        descriptions={[
                            "Полный аудит всех бизнес-процессов",
                            "Разработка и внедрение комплекса ИИ-решений глубокая оптимизация вашего бизнеса"
                        ]}
                    />
                </div>
            </FadeIn>
        </Section>
    );
};

export default PricingPlans;
