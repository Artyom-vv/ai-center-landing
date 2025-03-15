import React from 'react';
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Shape from '../../public/svg/hero-shape.svg'

const Hero = () => {
    return (
        <>
            <Header/>
            <section className="h-[800px] relative z-10">
                <div className="container flex justify-center items-center h-full relative z-[1]">
                    <div className="flex flex-col text-center items-center">
                        <h3>Автоматизируйте бизнес <br/>с ИИ и сократите затраты</h3>
                        <h3 className="hero-text-gradient">до 60% за 30 дней</h3>
                        <p className="text-body-large mt-large">Мы предлагаем решения, которые быстро окупаются</p>
                        <Button size="1x-large" className="mt-3x-large">Получить бесплатный аудит</Button>
                    </div>
                </div>
                <div className="container p-[0] absolute left-1/2 top-[0] -translate-x-1/2 flex justify-center">
                    <Shape className="w-[1440px] h-[800px]"/>
                    <div
                        style={{background: "linear-gradient(180deg, #000000 50%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-[160px] absolute top-[0] left-[0] w-full -translate-y-1/2 z-50"></div>
                    <div
                        style={{background: "linear-gradient(360deg, #000000 50%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-[160px] absolute bottom-[0] left-[0] w-full translate-y-1/2 z-50"></div>
                    <div
                        style={{background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-[800px] w-[172px] absolute bottom-[0] left-[0] z-50"></div>
                    <div
                        style={{background: "linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"}}
                        className="h-[800px] w-[172px] absolute bottom-[0] right-[0] z-50"></div>
                </div>
            </section>
        </>
    );
};

export default Hero;