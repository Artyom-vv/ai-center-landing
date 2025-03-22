"use client"

import React, {useState} from 'react';
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import Slider, {Slide} from "@/app/components/Slider";
import {AnimatePresence, motion} from "framer-motion";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";

const slides: {[k: string]: Slide[]} = {
    "1": [
        {src: "/stats/1.png", title: "B2C ритейл-сектор: \n" +
                "магазины одежды, электроники, товаров", description: "Ключевые результаты: увеличение продаж, повышение лояльности клиентов и снижение операционных затрат"},
        {src: "/stats/2.png", title: "Слайд 2", description: "Описание второго слайда"},
        {src: "/stats/3.png", title: "Слайд 3", description: "Описание третьего слайда"},
    ],
    "2": [
        {src: "/stats/1.png", title: "Слайд ##1", description: "Описание #первого слайда"},
        {src: "/stats/2.png", title: "Слайд #2", description: "Описание #второго слайда"},
        {src: "/stats/3.png", title: "Слайд #3", description: "Описание #третьего слайда"},
    ],
    "3": [
        {src: "/stats/1.png", title: "Слайд ##1", description: "Описание #первого слайда"},
        {src: "/stats/2.png", title: "Слайд ##2", description: "Описание #второго слайда"},
        {src: "/stats/3.png", title: "Слайд ##3", description: "Описание #третьего слайда"},
    ],
    "4": [
        {src: "/stats/1.png", title: "Слайд ###1", description: "Описание #первого слайда"},
        {src: "/stats/2.png", title: "Слайд ###2", description: "Описание #второго слайда"},
        {src: "/stats/3.png", title: "Слайд ###3", description: "Описание #третьего слайда"},
    ],
    "5": [
        {src: "/stats/1.png", title: "Слайд $$#1", description: "Описание #первого слайда"},
        {src: "/stats/2.png", title: "Слайд $$#2", description: "Описание #второго слайда"},
        {src: "/stats/3.png", title: "Слайд $$#3", description: "Описание #третьего слайда"},
    ],
}


const AIImpactTabs = () => {

    const [activeTab, setActiveTab] = useState<string>("1")
    const breakpoint = useBreakpoint();
    const chipSize = breakpoint === "xl" || breakpoint === "md" ? 'large' : 'normal'

    const onTabHandle = (value?: string) => {
        if (value) {
            setActiveTab(value)
        }
    };

    return (
        <>
            <ChipGroup defaultValue="1" onChange={onTabHandle} className="self-center">
                <Chip size={chipSize} value="1">Розничная торговля</Chip>
                <Chip size={chipSize} value="2">Юриспруденция</Chip>
                <Chip size={chipSize} value="3">Гостиничное дело</Chip>
                <Chip size={chipSize} value="4">Фитнес индустрия</Chip>
                <Chip size={chipSize} value="5">Медицина</Chip>
            </ChipGroup>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab} // Используем activeTab как ключ для анимации
                    initial={{ opacity: 0, y: 20 }} // Начальное состояние (невидимо и смещено вниз)
                    animate={{ opacity: 1, y: 0 }} // Анимация появления (плавное увеличение прозрачности и смещение вверх)
                    exit={{ opacity: 0, y: -20 }} // Анимация исчезновения (плавное уменьшение прозрачности и смещение вверх)
                    transition={{ duration: 0.2 }} // Длительность анимации
                >
                    <Slider slides={slides[activeTab] || []} />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default AIImpactTabs;
