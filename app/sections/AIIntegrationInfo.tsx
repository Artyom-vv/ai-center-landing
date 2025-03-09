import React from 'react';
import Section from "@/app/components/Section";
import NewsPanel from "@/app/components/NewsPanel";

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
        >
            <div className="flex gap-normal">
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
            </div>
        </Section>
    );
};

export default AIIntegrationInfo;
