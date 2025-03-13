import React from 'react';
import Section from "@/app/components/Section";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import FadeIn from "@/app/components/FadeIn";
import {RiCodeAiFill, RiPuzzle2Line, RiSeoLine, RiShakeHandsLine} from "@remixicon/react";

const CustomSolutions = () => {
    return (
        <Section title={(
            <>
                Индивидуальные решения, <br/>которые работают на результат!
            </>
        )}>
            <FadeIn>
                <div className="grid grid-cols-2 auto-rows-fr gap-[16px] h-[608px]">
                    <AdvantagePanel
                        className="h-full"
                        title="Индивидуальное техническое задание  под каждый проект"
                        description="Для каждого клиента разрабатываем техническое задание, соответствующее специфике его бизнеса"
                        icon={<RiSeoLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="h-full"
                        title="Собственные наработки и инновации по высоким стандартам"
                        description="Разрабатываем решения, основанные на уникальных инновациях и актуальных тенденциях в сфере ИИ"
                        icon={<RiCodeAiFill size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="h-full"
                        title="Персонализированные решения  для решения задач бизнеса"
                        description="Создаем ИИ, точно соответствующий потребностям вашего бизнеса"
                        icon={<RiShakeHandsLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        className="h-full"
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