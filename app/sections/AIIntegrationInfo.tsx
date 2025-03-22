import React from 'react';
import Section from "@/app/components/Section";
import NewsPanel from "@/app/components/NewsPanel";
import MobileSlider from "@/app/components/MobileSlider";
import Button from "@/app/components/ui/Button";

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
            contentClass="max-md:space-y-1x-large"
            subtitle={<>
                Подпишитесь на наш Telegram-канал и узнавайте о кейсах <br className="max-md:hidden"/>
                для повышения <br className="md:hidden"/> эффективности предприятий!
            </>}
            afterContainer={(
                <MobileSlider className="max-md:hidden mt-1x-large" translationConfig={translationConfig}>
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
            <div className="md:hidden flex flex-col gap-normal">
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
            <Button variant="secondary" className="md:hidden">Перейти в Telegram</Button>
        </Section>
    );
};

export default AIIntegrationInfo;
