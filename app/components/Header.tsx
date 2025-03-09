import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"

const Header = () => {

    return (
        <header className="py-normal w-full">
            <div className="container flex gap-4 justify-between items-center">
                <div className="grow">
                    <a className="text-neutral-text-heading select-none text-body-big font-medium no-underline">Центр
                        ИИ-трансформации</a>
                </div>
                <div className="flex gap-1x-large justify-center basis-[632px]">
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">ИИ для бизнеса</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Этапы внедрения</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Наши тарифы</a>
                </div>
                <div className="grow">
                    <Button className="ml-auto" leftIcon={<MailAiLine/>}>
                        Напишите нам
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;