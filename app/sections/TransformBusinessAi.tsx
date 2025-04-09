"use client"

import React from 'react';
import Section from "@/app/components/Section";
import TiltedCards from "@/app/components/TiltedCards";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import RotatingCircle from "@/app/components/RotatingCircle";

const panels = [
    {
        title: "Интерактивные чат-робо﻿ты",
        description: (
            <>
                - Работают 24/7<br/>
                - Автоматизируют общение с клиентами<br/>
                - Ускоряют обработку запросов<br/>
                - Повышают качество сервиса<br/>
                - Легко интегрируются с CRM<br/>
            </>
        ),
        src: "/advantages-panels/1.png"
    },
    {
        title: "ИИ-инструменты  для аналитики",
        description: (
            <>
                - Анализируют большие объемы данных <br/>
                - Выявляют возможности для роста <br/>
                - Предотвращают риски <br/>
                - Суммаризируют данные и готовят отчеты <br/>
            </>
        ),
        src: "/advantages-panels/2.png"
    },
    {
        title: "ИИ-менеджеры  нового поколения",
        description: (
            <>
                - Общаются с каждым клиентом <br/>
                - Умеют писать первыми <br/>
                - Отвечают на все вопросы, если не знают ответ, вызывают человека <br/>
                - Освобождают ресурсы Вашего бизнеса <br/>
            </>
        ),
        src: "/advantages-panels/3.png"
    }
];

const TransformBusinessAi = () => {
    return (
        <Section
            className="z-[21]"
            title={<>Трансформируйте бизнес <br className="md:hidden"/> с ИИ</>}
            beforeContent={<RotatingCircle className="size-[402px] absolute -left-[120px] -top-[80px]"/>}
            afterContainer={(
                <TiltedCards className="relative z-30 md:block hidden">
                    {panels.map((panel, i) => (
                        <AdvantagePanel
                            key={i}
                            className="md:h-[512px]"
                            title={panel.title}
                            description={panel.description}
                            src={panel.src}
                        />
                    ))}
                </TiltedCards>
            )}
        >
            <div className="flex-col max-md:flex hidden gap-large">
                {panels.map((panel, i) => (
                    <AdvantagePanel
                        key={i}
                        className="md:h-[512px]"
                        title={panel.title}
                        description={panel.description}
                        src={panel.src}
                    />
                ))}
            </div>
        </Section>
    );
};

export default TransformBusinessAi;