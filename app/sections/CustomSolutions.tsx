import React from 'react';
import Section from "@/app/components/Section";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import SeoLine from '../../public/svg/seo-line.svg'
import CodeAiFill from '../../public/svg/code-ai-fill.svg'
import ShareHandsLine from '../../public/svg/shake-hands-line.svg'
import Puzzle2line from '../../public/svg/puzzle-2-line.svg'
import FadeIn from "@/app/components/FadeIn";

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
                        icon={<SeoLine/>}
                    />
                    <AdvantagePanel
                        className="h-full"
                        title="Собственные наработки и инновации по высоким стандартам"
                        description="Разрабатываем решения, основанные на уникальных инновациях и актуальных тенденциях в сфере ИИ"
                        icon={<CodeAiFill/>}
                    />
                    <AdvantagePanel
                        className="h-full"
                        title="Персонализированные решения  для решения задач бизнеса"
                        description="Создаем ИИ, точно соответствующий потребностям вашего бизнеса"
                        icon={<ShareHandsLine/>}
                    />
                    <AdvantagePanel
                        className="h-full"
                        title="Интеграция с существующими  CRM и ERP системами"
                        description="Интегрируем ИИ в вашу инфраструктуру без необходимости обновления"
                        icon={<Puzzle2line/>}
                    />
                </div>
            </FadeIn>
        </Section>
    );
};

export default CustomSolutions;