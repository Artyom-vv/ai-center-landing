import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"
import {RiMailAiLine} from "@remixicon/react";
import MobileMenuButton from "@/app/components/MobileMenuButton";

const Header = () => {

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
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">ИИ
                        для бизнеса</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Этапы
                        внедрения</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Наши
                        тарифы</a>
                </div>
                <div className="xl:grow xl:col-span-3">
                    <Button className="xl:flex hidden ml-auto" leftIcon={<MailAiLine/>}>
                        Напишите нам
                    </Button>
                    <Button className="xl:hidden md:flex ml-auto" iconOnly>
                        <RiMailAiLine size={16} color="var(--color-neutral-solid-white)"></RiMailAiLine>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;