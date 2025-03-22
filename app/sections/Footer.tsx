import React from 'react';
import PhoneLine from '../../public/svg/phone-line.svg'
import MailLine from '../../public/svg/mail-line.svg'
import RoadMapLine from '../../public/svg/road-map-line.svg'
import Sponcor1 from '../../public/svg/sponcor1.svg'
import Sponcor2 from '../../public/svg/sponcor2.svg'
import Link from "@/app/components/ui/Link";


const Footer = () => {
    return (
        <footer className="md:py-3x-large py-1x-large bg-neutral-bg-subtle-default">
            <div className="container space-y-3x-large">
                <div className="flex xl:gap-normal gap-1x-large  xl:flex-row flex-col text-neutral-text-secondary">
                    <div className="flex flex-col gap-normal justify-between xl:basis-[308px] grow">
                        <p className="text-body-big text-neutral-text-heading">Центр ИИ-трансформации</p>
                        <p className="text-body-big text-neutral-text-secondary">© 2025 все права защищены</p>
                    </div>
                    <div className="xl:hidden block bg-neutral-border-on-subtle-default h-[1px]"></div>
                    <div className="xl:flex grid md:gap-normal gap-1x-large xl:basis-[956px] grow md:grid-cols-6 grid-cols-2">
                        <div className="md:col-span-3 col-span-2 flex flex-col gap-normal basis-[0] grow">
                            <p className="no-underline text-body-big text-neutral-text-secondary">О компании</p>
                            <p className="uppercase no-underline text-body-big">ООО "ТАНОС ТЕХ"</p>
                            <p className="uppercase no-underline text-body-big">ИНН: 1655504723</p>
                            <p className="uppercase no-underline text-body-big">ОГРН: 1241600045521</p>
                        </div>
                        <div className="md:col-span-3 col-span-2 flex flex-col gap-normal basis-[0] grow">
                            <p className="no-underline text-body-big text-neutral-text-secondary">Контакты</p>
                            <Link variant="text" nowrap={false} leftIcon={<PhoneLine/>} href="tel:+79274454053">+7 (927)
                                445-40-53</Link>
                            <Link variant="text" nowrap={false} leftIcon={<MailLine/>}
                                  href="mailto:info@tanostech.com">info@tanostech.com</Link>
                            <Link variant="text" nowrap={false} leftIcon={<RoadMapLine/>} href="https://yandex.ru/maps/-/CHFx5H~A" target="_blank">г. Казань, ул. Карла
                                Маркса, д. 5, оф. 18</Link>
                        </div>
                        <div className="md:row-start-2 md:col-span-6 col-span-2 flex flex-col gap-normal basis-[0] grow">
                            <p className="no-underline text-body-big text-neutral-text-secondary">Документация</p>
                            <div className="xl:flex flex-col gap-normal grid md:grid-cols-6 grid-cols-2">
                                <div className="md:col-span-3 col-span-2">
                                    <Link variant="text" nowrap={false} href="#">Политика конфиденциальности</Link>
                                </div>
                                <div className="md:col-span-3 col-span-2">
                                    <Link variant="text" nowrap={false} href="#">Публичная оферта</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-border-on-subtle-default h-[1px]"></div>
                <div className="grid xl:grid-cols-12 grid-cols-6 gap-normal">
                    <div className="flex md:flex-row flex-col max-md:items-center xl:col-start-4 col-span-6 gap-normal">
                        <div className="flex gap-[12px] basis-0 grow shrink-0">
                            <Sponcor1 className="mx-[3px] size-[48px]"/>
                            <p className="text-body-normal text-neutral-text-quaternary">Компания включена в реестр
                                <br/>Минцифры России</p>
                        </div>
                        <div className="h-full w-[1px] bg-neutral-border-on-subtle-default"></div>
                        <div className="flex gap-[12px] basis-0 grow shrink-0">
                            <Sponcor2 className="mx-[8px] w-[32px] h-[48px]"/>
                            <p className="text-body-normal text-neutral-text-quaternary">Компания включена в
                                реестр <br/>
                                стартапов Республики Татарстан</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
