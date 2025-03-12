import React from 'react';
import Section from "@/app/components/Section";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import ChatAiLine from "@/public/svg/chat-ai-line.svg";
import ChatSmileAiLine from "@/public/svg/chat-smile-ai-line.svg";
import BarChatBoxAiLine from "@/public/svg/bar-chart-box-ai-line.svg";

const CustomSolutions = () => {
    return (
        <Section title={(
            <>
                Индивидуальные решения, <br/>которые работают на результат!
            </>
        )}>
            <div className="grid grid-cols-2 auto-rows-fr gap-[16px] h-[608px]">
                <AdvantagePanel
                    className="h-full"
                    title="Индивидуальное техническое задание  под каждый проект"
                    description="Для каждого клиента разрабатываем техническое задание, соответствующее специфике его бизнеса"
                    icon={<ChatAiLine/>}
                />
                <AdvantagePanel
                    className="h-full"
                    title="Собственные наработки и инновации по высоким стандартам"
                    description="Разрабатываем решения, основанные на уникальных инновациях и актуальных тенденциях в сфере ИИ"
                    icon={<ChatSmileAiLine/>}
                />
                <AdvantagePanel
                    className="h-full"
                    title="Персонализированные решения  для решения задач бизнеса"
                    description="Создаем ИИ, точно соответствующий потребностям вашего бизнеса"
                    icon={<BarChatBoxAiLine/>}
                />
                <AdvantagePanel
                    className="h-full"
                    title="Интеграция с существующими  CRM и ERP системами"
                    description="Интегрируем ИИ в вашу инфраструктуру без необходимости обновления"
                    icon={<BarChatBoxAiLine/>}
                />
            </div>
        </Section>
    );
};

export default CustomSolutions;