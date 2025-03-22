"use client";

import React from 'react';
import Header from "@/app/components/Header";
import Shape from '../../public/svg/hero-shape.svg'
import TabletShape from '../../public/svg/hero-shape-tablet.svg'
import MobileShape from '../../public/svg/hero-shape-mobile.svg'
import HeroButton from "@/app/components/HeroButton";

const Hero = () => {


    return (
        <>
            <Header/>
            <section className="xl:h-[800px] md:h-[1024px] md:py-[0] py-5x-large relative z-10">
                <div className="container flex justify-center items-center h-full relative z-50">
                    <div className="flex flex-col text-center items-center">
                        <h3>Автоматизируйте бизнес <br className="md:block hidden"/>с ИИ <br
                            className="md:hidden"/> и сократите затраты</h3>
                        <h3 className="hero-text-gradient">до 60% за 30 дней</h3>
                        <p className="md:text-body-large text-body-big mt-large">
                            <span className="xl:hidden">Трансформируйте свой бизнес уже сегодня</span>
                            <span className="xl:block hidden">Мы предлагаем решения, которые быстро окупаются</span>
                        </p>
                       <HeroButton/>
                    </div>
                </div>
                <div className="container p-[0] absolute left-1/2 top-[0] -translate-x-1/2 flex justify-center h-full overflow-hidden">
                    <Shape className="hero-shape w-[1440px] h-full xl:block hidden"/>
                    <TabletShape className="hero-shape w-[1440px] h-[1120px] hidden md:block xl:hidden"/>
                    <MobileShape className="hero-shape -top-[152px] w-[1030px] h-[800px] md:hidden block"/>
                    <div
                        style={{background: "linear-gradient(180deg, #000000 50%, rgba(0, 0, 0, 0) 100%)"}}
                        className="md:h-[160px] h-[64px] absolute top-[0] left-[0] w-full xl:-translate-y-1/2 z-50"></div>
                    <div
                        style={{background: "linear-gradient(360deg, #000000 50%, rgba(0, 0, 0, 0) 100%)"}}
                        className="md:h-[160px] h-[64px] absolute bottom-[0] left-[0] w-full xl:translate-y-1/2 z-50"></div>
                    <div
                        style={{background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-full xl:w-[172px] md:w-[160px] w-[64px] absolute bottom-[0] left-[0] z-50"></div>
                    <div
                        style={{background: "linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-full xl:w-[172px] md:w-[160px] w-[64px] absolute bottom-[0] right-[0] z-50"></div>
                </div>
            </section>
        </>
    );
};

export default Hero;