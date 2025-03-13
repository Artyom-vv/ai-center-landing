import React from 'react';
import Section from "@/app/components/Section";
import Button from "@/app/components/ui/Button";
import {RiTelegram2Fill} from "@remixicon/react";

const FreeDemo = () => {
    return (
        <Section className="pt-[0]">
            <div className="flex flex-col items-center gap-3x-large p-3x-large rounded-[16px] bg-brand-main-default">
                <div className="flex flex-col items-center space-y-normal text-center">
                    <h4>Бесплатная демонстрация</h4>
                    <p className="text-body-large">
                        Напишите в Telegram и узнайте, <br/>кто на той стороне — человек или ИИ?
                    </p>
                </div>
                <Button className="bg-neutral-solid-white hover:bg-neutral-solid-white hover:border-transparent !text-brand-text-default" leftIcon={<RiTelegram2Fill size={16} color="var(--color-brand-text-default)"/>}>Написать в Telegram</Button>
            </div>
        </Section>
    );
};

export default FreeDemo;
