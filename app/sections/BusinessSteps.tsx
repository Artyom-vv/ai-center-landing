"use client"

import React from 'react';
import Section from "@/app/components/Section";
import {BusinessStep} from "@/app/components/BusinessStep";
import {BusinessStepsWrapper} from "@/app/components/BusinessStepContext";
import RotatingCircle from "@/app/components/RotatingCircle";
import FadeIn from "@/app/components/FadeIn";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";

const BusinessSteps = () => {

    const breakpoint = useBreakpoint();

    return (
        <Section
            id="steps"
            title={
            <>
                Всего 4 шага — и ваш бизнес начнёт <br/>работать на новом уровне!
            </>
        }
            beforeContent={<RotatingCircle className="md:size-[472px] size-[509px] absolute -right-[300px] -bottom-[460px]"/>}
        >
            <FadeIn>
                <BusinessStepsWrapper size={breakpoint === 'xl' ? 288 : 308} stepIncrement={breakpoint === 'xl' ? 80 : 108}>
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
            </FadeIn>
        </Section>
    );
};

export default BusinessSteps;