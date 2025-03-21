"use client"

import React from 'react';
import Section from "@/app/components/Section";
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import TiltedCards from "@/app/components/TiltedCards";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import {RiBarChartBoxAiLine, RiChatAiLine, RiChatSmileAiLine} from "@remixicon/react";
import RotatingCircle from "@/app/components/RotatingCircle";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";

const TransformBusinessAi = () => {

    const breakpoint = useBreakpoint();

    return (
        <Section
            className="z-[21]"
            title={<>
                Трансформируйте бизнес <br className="md:hidden"/> с ИИ
        </>}
            beforeContent={<RotatingCircle className="size-[402px] absolute -left-[120px] -top-[80px]"/>}
            afterContainer={(
                <TiltedCards className="mt-1x-large relative z-30 md:block hidden">
                    <AdvantagePanel
                        title="Интерактивные чат-робо﻿ты"
                        description={<>
                            - Работают 24/7<br/>
                            - Автоматизируют общение с клиентами<br/>
                            - Ускоряют обработку запросов<br/>
                            - Повышают качество сервиса<br/>
                            - Легко интегрируются с CRM<br/>
                        </>}
                        icon={<RiChatAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        title="Продвинутая анали﻿тика"
                        description={<>
                            ИИ-инструменты для аналитики:<br/>
                            - Анализируют большие объемы данных<br/>
                            - Выявляют возможности для роста<br/>
                            - Предотвращают риски<br/>
                            Принимайте только обоснованные решения.<br/>
                        </>}
                        icon={<RiChatSmileAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                    <AdvantagePanel
                        title="Продвинутая анали﻿тика"
                        description={<>
                            ИИ-инструменты для аналитики:<br/>
                            - Анализируют большие объемы данных<br/>
                            - Выявляют возможности для роста<br/>
                            - Предотвращают риски<br/>
                            Принимайте только обоснованные решения.<br/>
                        </>}
                        icon={<RiBarChartBoxAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                    />
                </TiltedCards>
            )}
        >
            <ChipGroup className="self-center">
                <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Повысьте эффективность</Chip>
                <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Ускорьте процессы</Chip>
                <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Увеличьте прибыль</Chip>
            </ChipGroup>
            <div className=" flex-col max-md:flex hidden gap-large">
                <AdvantagePanel
                    title="Интерактивные чат-робо﻿ты"
                    description={<>
                        - Работают 24/7<br/>
                        - Автоматизируют общение с клиентами<br/>
                        - Ускоряют обработку запросов<br/>
                        - Повышают качество сервиса<br/>
                        - Легко интегрируются с CRM<br/>
                    </>}
                    icon={<RiChatAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                />
                <AdvantagePanel
                    title="Продвинутая анали﻿тика"
                    description={<>
                        ИИ-инструменты для аналитики:<br/>
                        - Анализируют большие объемы данных<br/>
                        - Выявляют возможности для роста<br/>
                        - Предотвращают риски<br/>
                        Принимайте только обоснованные решения.<br/>
                    </>}
                    icon={<RiChatSmileAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                />
                <AdvantagePanel
                    title="Продвинутая анали﻿тика"
                    description={<>
                        ИИ-инструменты для аналитики:<br/>
                        - Анализируют большие объемы данных<br/>
                        - Выявляют возможности для роста<br/>
                        - Предотвращают риски<br/>
                        Принимайте только обоснованные решения.<br/>
                    </>}
                    icon={<RiBarChartBoxAiLine size={24} color="var(--color-neutral-text-heading)"/>}
                />
            </div>
        </Section>
    );
};

export default TransformBusinessAi;