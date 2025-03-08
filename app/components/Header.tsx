import React from 'react';
import Button from "@/app/components/ui/Button";
import MailAiLine from "../../public/svg/mail-ai-line.svg"

const Header = () => {

    return (
        <header className="py-normal w-full">
            <div className="container flex gap-4 justify-between items-center">
                <a href="#" className="text-body-big font-heading font-medium no-underline grow">Центр ИИ-трансформации</a>
                <div className="flex gap-1x-large justify-center basis-[632px]">
                    <a href="#" className="text-body-big no-underline">ИИ для бизнеса</a>
                    <a href="#" className="text-body-big no-underline">Этапы внедрения</a>
                    <a href="#" className="text-body-big no-underline">Наши тарифы</a>
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