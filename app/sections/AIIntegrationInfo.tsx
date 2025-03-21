import React from 'react';
import Section from "@/app/components/Section";
import NewsPanel from "@/app/components/NewsPanel";
import MobileSlider from "@/app/components/MobileSlider";

const translationConfig: { [key: number]: number } = {
    0: 66.66,
    1: 0,
    2: -66.66,
};

const AIIntegrationInfo = () => {
    return (
        <Section
            title={<>
                Узнавайте все об интеграции ИИ <br/>
                для улучшения бизнеса
            </>}
            subtitle={<>
                Подпишитесь на наш Telegram-канал и узнавайте о кейсах <br/>
                для повышения эффективности предприятий!
            </>}
            afterContainer={(
                <MobileSlider className="mt-1x-large" translationConfig={translationConfig}>
                    <NewsPanel
                        title="Заголовок новости"
                        description="15 января"
                        link="https://web.telegram.org"
                        linkLabel="Перейти в Telegram"
                    />
                    <NewsPanel
                        title="Заголовок новости"
                        description="15 января"
                        link="https://web.telegram.org"
                        linkLabel="Перейти в Telegram"
                    />
                    <NewsPanel
                        title="Заголовок новости"
                        description="15 января"
                        link="https://web.telegram.org"
                        linkLabel="Перейти в Telegram"
                    />
                </MobileSlider>
            )}
        >
        </Section>
    );
};

export default AIIntegrationInfo;
