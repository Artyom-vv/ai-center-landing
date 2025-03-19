import React from 'react';
import Section from "@/app/components/Section";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import FadeIn from "@/app/components/FadeIn";
import {RiCodeAiFill, RiPuzzle2Line, RiSeoLine, RiShakeHandsLine} from "@remixicon/react";
import RotatingCircle from "@/app/components/RotatingCircle";

const CustomSolutions = () => {
    return (
        <Section
            title={(
                <>
                    Индивидуальные решения, <br/>которые работают на результат!
                </>
            )}
            beforeContent={<RotatingCircle className="size-[520px] absolute -left-[80px] -bottom-[396px]"/>}
            contentClass="max-xl:space-y-[0]"
        >
            <FadeIn>
                <div className="grid xl:grid-cols-2 grid-cols-1 auto-rows-fr xl:gap-[16px] gap-1x-large xl:h-[608px] xl:mt-[0] mt-5x-large">
                    <AdvantagePanel
                        className="xl:h-full sm:h-[296px] xl:basis-[416px]"
                        title="Индивидуальное техническое задание  под каждый проект"
                        description="Для каждого клиента разрабатываем техническое задание, соответствующее специфике его бизнеса"
                        icon={<RiSeoLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="xl:h-full sm:h-[296px] xl:basis-[416px]"
                        title="Собственные наработки и инновации по высоким стандартам"
                        description="Разрабатываем решения, основанные на уникальных инновациях и актуальных тенденциях в сфере ИИ"
                        icon={<RiCodeAiFill size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="xl:h-full sm:h-[296px] xl:basis-[416px]"
                        title="Персонализированные решения  для решения задач бизнеса"
                        description="Создаем ИИ, точно соответствующий потребностям вашего бизнеса"
                        icon={<RiShakeHandsLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="xl:h-full sm:h-[296px] xl:basis-[416px]"
                        title="Интеграция с существующими  CRM и ERP системами"
                        description="Интегрируем ИИ в вашу инфраструктуру без необходимости обновления"
                        icon={<RiPuzzle2Line size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                </div>
            </FadeIn>
        </Section>
    );
};

export default CustomSolutions;