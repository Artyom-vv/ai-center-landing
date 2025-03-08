import React from 'react';
import Section from "@/app/components/Section";
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import TiltedCards from "@/app/components/TiltedCards";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import ChatAiLine from "../../public/svg/chat-ai-line.svg"
import ChatSmileAiLine from "../../public/svg/chat-smile-ai-line.svg"
import BarChatBoxAiLine from "../../public/svg/bar-chart-box-ai-line.svg"

const TransformBusinessAi = () => {

    return (
        <Section
            title="Трансформируйте бизнес
            с ИИ">
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
                    icon={<ChatAiLine/>}
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
                    icon={<ChatSmileAiLine/>}
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
                    icon={<BarChatBoxAiLine/>}
                />
            </TiltedCards>
        </Section>
    );
};

export default TransformBusinessAi;