import React from 'react';
import Section from "@/app/components/Section";
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import TiltedCards from "@/app/components/TiltedCards";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import {RiBarChartBoxAiLine, RiChatAiLine, RiChatSmileAiLine} from "@remixicon/react";
import RotatingCircle from "@/app/components/RotatingCircle";

const TransformBusinessAi = () => {

    return (
        <Section
            className="z-[21]"
            containerClass="relative"
            title="Трансформируйте бизнес с ИИ"
            beforeContent={<RotatingCircle className="size-[402px] absolute -left-[120px] -top-[80px]"/>}
        >w
            <ChipGroup className="self-center">
                <Chip isDisabled={true}>Повысьте эффективность</Chip>
                <Chip isDisabled={true}>Ускорьте процессы</Chip>
                <Chip isDisabled={true}>Увеличьте прибыль</Chip>
            </ChipGroup>
            <TiltedCards>
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
        </Section>
    );
};

export default TransformBusinessAi;