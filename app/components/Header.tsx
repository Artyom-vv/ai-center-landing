import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"
import {RiMailAiLine} from "@remixicon/react";
import MobileMenuButton from "@/app/components/MobileMenuButton";

const Header = () => {

    return (
        <header className="py-normal w-full relative z-20">
            <div className="container grid xl:grid-cols-12 md:grid-cols-6 gap-4 items-center">
                <div className="xl:hidden block col-span-2">
                    <MobileMenuButton/>
                </div>
                <div className="xl:col-span-3 md:col-span-2">
                    <a className="text-neutral-text-heading select-none text-body-big font-medium no-underline cursor-pointer">Центр
                        ИИ-трансформации</a>
                </div>
                <div className="col-span-6 xl:flex hidden  gap-1x-large justify-center">
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">ИИ
                        для бизнеса</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Этапы
                        внедрения</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Наши
                        тарифы</a>
                </div>
                <div className="grow xl:col-span-3 md:col-span-2">
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