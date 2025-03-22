import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"
import {RiMailAiLine} from "@remixicon/react";
import {scrollToSection} from "@/app/functions/scrollToSection";
import MobileMenuButton from "@/app/components/MobileMenuButton";
import {useRequestModal} from "@/app/components/RequestModal";

export const links = [
    {
        text: "ИИ для бизнеса",
        onClick: () => scrollToSection('business-ai')
    },
    {
        text: "Этапы внедрения",
        onClick: () => scrollToSection('steps')
    },
    {
        text: "Наши тарифы",
        onClick: () => scrollToSection('price-plans')
    }
];

const Header = () => {
    const {openModal} = useRequestModal();

    return (
        <header className="py-normal w-full relative z-20">
            <div className="container xl:grid xl:grid-cols-12 flex gap-normal items-center">
                <div className="xl:hidden block">
                    <MobileMenuButton/>
                </div>
                <div className="xl:col-span-3 xl:grow-0 grow flex justify-center">
                    <a className="text-neutral-text-heading select-none md:text-body-big text-body-normal font-medium no-underline cursor-pointer">Центр
                        ИИ-трансформации</a>
                </div>
                <div className="col-span-6 xl:flex hidden gap-1x-large justify-center">
                    {links.map(({text, onClick}, index) => (
                        <a key={index} onClick={onClick}
                           className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">{text}</a>
                    ))}
                </div>
                <div className="xl:grow xl:col-span-3">
                    <Button onPress={openModal} className="xl:flex hidden ml-auto" leftIcon={<MailAiLine/>}>
                        Напишите нам
                    </Button>
                    <Button onPress={openModal} className="xl:hidden md:flex ml-auto" iconOnly>
                        <RiMailAiLine size={16} color="var(--color-neutral-solid-white)"></RiMailAiLine>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;