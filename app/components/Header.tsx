import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"

const Header = () => {

    return (
        <header className="py-normal w-full">
            <div className="container grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                    <a className="text-neutral-text-heading select-none text-body-big font-medium no-underline cursor-pointer">Центр
                        ИИ-трансформации</a>
                </div>
                <div className="col-span-6 flex gap-1x-large justify-center">
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">ИИ для бизнеса</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Этапы внедрения</a>
                    <a className="cursor-pointer select-none text-body-big text-neutral-text-primary active:text-neutral-text-heading no-underline">Наши тарифы</a>
                </div>
                <div className="grow col-span-3">
                    <Button className="ml-auto" leftIcon={<MailAiLine/>}>
                        Напишите нам
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;