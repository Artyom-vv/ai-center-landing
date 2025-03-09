import React from 'react';
import Section from "@/app/components/Section";
import StatsPanel from "@/app/components/StatsPanel";
import TiltedCards from "@/app/components/TiltedCards";
import Button from "@/app/components/ui/Button";

const StartAitTransformation = () => {
    return (
        <Section title=" Приступите к ИИ-трансформации уже сегодня! ">
            <TiltedCards>
                <StatsPanel
                    title="Интерактивные чат-робо﻿ты"
                    description={<>
                        - Работают 24/7<br/>
                        - Автоматизируют общение с клиентами<br/>
                        - Ускоряют обработку запросов<br/>
                        - Повышают качество сервиса<br/>
                        - Легко интегрируются с CRM<br/>
                    </>}
                    src="/stats/1.png"
                />
                <StatsPanel
                    title="Продвинутая анали﻿тика"
                    description={<>
                        ИИ-инструменты для аналитики:<br/>
                        - Анализируют большие объемы данных<br/>
                        - Выявляют возможности для роста<br/>
                        - Предотвращают риски<br/>
                        Принимайте только обоснованные решения.<br/>
                    </>}
                    src="/stats/2.png"
                />
                <StatsPanel
                    title="Продвинутая анали﻿тика"
                    description={<>
                        ИИ-инструменты для аналитики:<br/>
                        - Анализируют большие объемы данных<br/>
                        - Выявляют возможности для роста<br/>
                        - Предотвращают риски<br/>
                        Принимайте только обоснованные решения.<br/>
                    </>}
                    src="/stats/3.png"
                />
            </TiltedCards>
            <Button className="self-center">
                Начните внедрение
            </Button>
        </Section>
    );
};

export default StartAitTransformation;