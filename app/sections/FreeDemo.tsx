import React from 'react';
import Section from "@/app/components/Section";
import Button from "@/app/components/ui/Button";
import {RiTelegram2Fill} from "@remixicon/react";
import FadeIn from "@/app/components/FadeIn";

const FreeDemo = () => {
    return (
        <Section className="pt-[0]">
            <FadeIn className="max-md:-mx-normal">
                <div
                    className="flex flex-col items-center md:gap-3x-large gap-large md:p-3x-large p-large rounded-[16px] bg-brand-main-default">
                    <div className="flex flex-col items-center space-y-normal text-center">
                        <h4 className="-tracking-[0.02rem]">Бесплатная демонстрация</h4>
                        <p className="md:text-body-large text-body-normal">
                            Напишите в Telegram и узнайте, <br/>кто на той стороне — человек или ИИ?
                        </p>
                    </div>
                    <Button
                        className="bg-neutral-solid-white hover:bg-neutral-solid-white hover:border-transparent !text-brand-text-default max-md:w-full"
                        leftIcon={<RiTelegram2Fill size={16} color="var(--color-brand-text-default)"/>}>Написать в
                        Telegram</Button>
                </div>
            </FadeIn>
        </Section>
    );
};

export default FreeDemo;
