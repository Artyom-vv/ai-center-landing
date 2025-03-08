import React from 'react';
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";

const Hero = () => {
    return (
        <>
            <Header/>
            <section className="h-[800px]">
                <div className="container flex justify-center items-center h-full">
                    <div className="flex flex-col text-center items-center">
                        <h3>Автоматизируйте бизнес <br/>с ИИ и сократите затраты</h3>
                        <h3 className="hero-text-gradient">до 60% за 30 дней</h3>
                        <p className="text-body-large mt-large">Мы предлагаем решения, которые быстро окупаются</p>
                        <Button size="1x-large" className="mt-3x-large">Получить бесплатный аудит</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;