import React from 'react';
import Section from "@/app/components/Section";
import {BusinessStep} from "@/app/components/BusinessStep";
import {BusinessStepsWrapper} from "@/app/components/BusinessStepContext";

const BusinessSteps = () => {
    return (
        <Section title={
            <>
                Всего 4 шага — и ваш бизнес начнёт <br/>работать на новом уровне!
            </>
        }>
            <BusinessStepsWrapper size={288} stepIncrement={80}>
                <BusinessStep
                    step={1}
                    title="Анализ и аудит"
                >
                    Изучаем бизнес и выявляем возможности для улучшения
                </BusinessStep>
                <BusinessStep
                    selected
                    step={2}
                    title="Индивидуальное решение"
                >
                    Разрабатываем ИИ, который идеально подойдет для решения бизнес-задачи
                </BusinessStep>
                <BusinessStep
                    step={3}
                    title="Быстрое внедрение"
                >
                    Внедряем решение в бизнес-процесс и обучаем команду работать с инструментами
                </BusinessStep>
                <BusinessStep
                    step={4}
                    title="Поддержка и улучшения"
                >
                    Обеспечиваем постоянную поддержку и оптимизацию для решения
                </BusinessStep>
            </BusinessStepsWrapper>
        </Section>
    );
};

export default BusinessSteps;