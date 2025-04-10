"use client"

import React, {useState} from 'react';
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import Slider, {Slide} from "@/app/components/Slider";
import {AnimatePresence, motion} from "framer-motion";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";

const slides: { [k: string]: Slide[] } = {
    "1": [
        {
            src: "/slider/1/1.png",
            title: "B2C ритейл-сектор: \n" +
                "магазины одежды, электроники, товаров",
            description: "Ключевые результаты: увеличение продаж, повышение лояльности клиентов и снижение операционных затрат"
        },
        {
            src: "/slider/1/2.png",
            title: "Управление запасами",
            description: "ИИ прогнозирует спрос, предотвращая дефицит и излишки, снижая потери и оптимизируя склад"
        },
        {
            src: "/slider/1/3.png",
            title: "Персонализация",
            description: "ИИ предлагает клиентам нужные товары, увеличивая конверсии и лояльность"
        },
        {
            src: "/slider/1/4.png",
            title: "Автоматизация сервиса",
            description: "Чат-боты с ИИ обеспечивают мгновенные ответы и круглосуточную поддержку клиентов"
        },
        {
            src: "/slider/1/5.png",
            title: "Динамическое ценообразование",
            description: "ИИ анализирует рынок и конкурентов, помогая гибко корректировать цены и увеличивать прибыль"
        },
    ],
    "2": [
        {
            src: "/slider/2/1.png",
            title: "Технологии для юридической сферы",
            description: "Быстрый доступ к правовой информации и персонализированные консультации через чат-ботов"
        },
        {
            src: "/slider/2/2.png",
            title: "Интеллектуальный анализ документов",
            description: "Выявляет риски в контрактах и автоматизирует их создание, ускоряя рабочие процессы"
        },
        {
            src: "/slider/2/3.png",
            title: "Умный ассистент для работы с правовой базой",
            description: "Мгновенно находит судебные решения и законы, экономя время юристов"
        },
        {
            src: "/slider/2/4.png",
            title: "Чат-роботы для консультаций",
            description: "Отвечают на вопросы клиентов и собирают необходимые данные, снижая нагрузку на специалистов"
        },
        {
            src: "/slider/2/5.png",
            title: "Инструменты для ускорения работы с документами",
            description: "Автоматизируют процесс создания и анализа, повышая продуктивность и точность"
        },
    ],
    "3": [
        {
            src: "/slider/3/1.png",
            title: "Технологии для сферы HoReCa",
            description: "Увеличьте эффективность, удерживайте клиентов и оставайтесь конкурентоспособными"
        },
        {
            src: "/slider/3/2.png",
            title: "Персонализированное обслуживание гостей",
            description: "ИИ автоматизирует бронирование, быстро реагирует на запросы и дает персонализированные рекомендации, улучшая обслуживание"
        },
        {
            src: "/slider/3/3.png",
            title: "Оптимизация бизнес-процессов",
            description: "ИИ автоматизирует управление запасами, ресурсами и расписаниями, снижая издержки и повышая эффективность"
        },
        {
            src: "/slider/3/4.png",
            title: "Аналитика и прогнозирование спроса",
            description: "ИИ анализирует предпочтения гостей  и прогнозирует спрос, улучшая ценообразование и сервис"
        },
        {
            src: "/slider/3/5.png",
            title: "Автоматизация репутационного менеджмента",
            description: "Мониторит отзывы и предлагает действия для улучшения репутации и удовлетворенности клиентов"
        },
    ],
    "4": [
        {
            src: "/slider/4/1.png",
            title: "Технологии в сфере фитнес-услуг: автоматизация продаж, персонализированный подход  и прогнозирование трендов",
            description: "Ключевые результаты: увеличение прибыли, улучшение клиентского опыта и оптимизация ресурсов"
        },
        {
            src: "/slider/4/2.png",
            title: "ИИ-чат-роботы для автоматизации  и персонализации",
            description: "Заменяют до 3-х менеджеров, ускоряя обслуживание и повышая конверсию"
        },
        {
            src: "/slider/4/3.png",
            title: "ИИ-администраторы",
            description: "Персонализируют общение, напоминают о расписании и предлагают услуги, увеличивая продажи"
        },
        {
            src: "/slider/4/4.png",
            title: "Аналитика запросов",
            description: "Анализирует данные клиентов для создания точных предложений и персонализированных кампаний"
        },
        {
            src: "/slider/4/5.png",
            title: "Прогнозирование трендов",
            description: "Предсказывает пики нагрузки и спрос, оптимизируя ресурсы и продвижение услуг"
        },
    ],
    "5": [
        {
            src: "/slider/5/1.png",
            title: "Технологии в сфере медицины повышают ориентированность на пациента в работе﻿ клиник",
            description: "Ключевые результаты: Автоматизация рутинных процессов, улучшение качества обслуживания и снижение операционных затрат"
        },
        {
            src: "/slider/5/2.png",
            title: "ИИ-администраторы",
            description: "Напоминают о лечении, отвечают на вопросы, сопровождают после процедур и записывают на новые услуги"
        },
        {
            src: "/slider/5/3.png",
            title: "ИИ-кураторы для пациентов",
            description: "Автоматизация сервиса: ИИ-чат-боты обеспечивают мгновенные ответы и круглосуточную поддержку клиентов"
        },
        {
            src: "/slider/5/4.png",
            title: "Аналитика запросов пациентов",
            description: "Анализирует частые вопросы для улучшения качества услуг и предложений клиники"
        },
        {
            src: "/slider/5/5.png",
            title: "Предиктивная аналитика  на основе реальных данных",
            description: "Прогнозирование заболеваний, оптимизация лечения и персонализация медицинской помощи через анализ клинических данных с применением машинного обучения"
        },
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
                    initial={{opacity: 0, y: 20}} // Начальное состояние (невидимо и смещено вниз)
                    animate={{
                        opacity: 1,
                        y: 0
                    }} // Анимация появления (плавное увеличение прозрачности и смещение вверх)
                    exit={{
                        opacity: 0,
                        y: -20
                    }} // Анимация исчезновения (плавное уменьшение прозрачности и смещение вверх)
                    transition={{duration: 0.2}} // Длительность анимации
                >
                    <Slider slides={slides[activeTab] || []}/>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default AIImpactTabs;
