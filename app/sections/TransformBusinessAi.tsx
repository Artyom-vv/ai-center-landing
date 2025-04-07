"use client"

import React from 'react';
import Section from "@/app/components/Section";
import TiltedCards from "@/app/components/TiltedCards";
import AdvantagePanel from "@/app/components/AdvantagePanel";
import RotatingCircle from "@/app/components/RotatingCircle";

const TransformBusinessAi = () => {

    return (
        <Section
            className="z-[21]"
            title={<>
                Трансформируйте бизнес <br className="md:hidden"/> с ИИ
            </>}
            beforeContent={<RotatingCircle className="size-[402px] absolute -left-[120px] -top-[80px]"/>}
            afterContainer={(
                <TiltedCards className="relative z-30 md:block hidden">
                    <AdvantagePanel
                        className="md:h-[512px]"
                        title="Интерактивные чат-робо﻿ты"
                        description={<>
                            - Работают 24/7<br/>
                            - Автоматизируют общение с клиентами<br/>
                            - Ускоряют обработку запросов<br/>
                            - Повышают качество сервиса<br/>
                            - Легко интегрируются с CRM<br/>
                        </>}
                        src="/advantages-panels/1.png"
                    />
                    <AdvantagePanel
                        className="md:h-[512px]"
                        title="Продвинутая анали﻿тика"
                        description={<>
                            ИИ-инструменты для аналитики:<br/>
                            - Анализируют большие объемы данных<br/>
                            - Выявляют возможности для роста<br/>
                            - Предотвращают риски<br/>
                            Принимайте только обоснованные решения<br/>
                        </>}
                        src="/advantages-panels/2.png"
                    />
                    <AdvantagePanel
                        className="md:h-[512px]"
                        title="Персональные ИИ-менеджеры"
                        description={<>
                            Интеллектуальная система поддержки клиентов: <br/>
                            - Отвечает на все вопросы после ﻿покупки <br/>
                            - Освобождает ресурсы вашего бизнеса
                        </>}
                        src="/advantages-panels/3.png"
                    />
                </TiltedCards>
            )}
        >
            {/*<ChipGroup className="self-center">*/}
            {/*    <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Повысьте*/}
            {/*        эффективность</Chip>*/}
            {/*    <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Ускорьте*/}
            {/*        процессы</Chip>*/}
            {/*    <Chip size={breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'} isDisabled={true}>Увеличьте*/}
            {/*        прибыль</Chip>*/}
            {/*</ChipGroup>*/}
            <div className=" flex-col max-md:flex hidden gap-large">
                <AdvantagePanel
                    className="md:h-[512px]"
                    title="Интерактивные чат-робо﻿ты"
                    description={<>
                        - Работают 24/7<br/>
                        - Автоматизируют общение с клиентами<br/>
                        - Ускоряют обработку запросов<br/>
                        - Повышают качество сервиса<br/>
                        - Легко интегрируются с CRM<br/>
                    </>}
                    src="/advantages-panels/1.png"
                />
                <AdvantagePanel
                    className="md:h-[512px]"
                    title="Продвинутая анали﻿тика"
                    description={<>
                        ИИ-инструменты для аналитики:<br/>
                        - Анализируют большие объемы данных<br/>
                        - Выявляют возможности для роста<br/>
                        - Предотвращают риски<br/>
                        Принимайте только обоснованные решения<br/>
                    </>}
                    src="/advantages-panels/2.png"
                />
                <AdvantagePanel
                    className="md:h-[512px]"
                    title="Персональные ИИ-менеджеры"
                    description={<>
                        Интеллектуальная система поддержки клиентов: <br/>
                        - Отвечает на все вопросы после ﻿покупки <br/>
                        - Освобождает ресурсы вашего бизнеса
                    </>}
                    src="/advantages-panels/3.png"
                />
            </div>
        </Section>
    );
};

export default TransformBusinessAi;