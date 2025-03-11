"use client"

import React, {useState} from 'react';
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import Slider, {Slide} from "@/app/components/Slider";

const slides: {[k: string]: Slide[]} = {
    "1": [
        {src: "/stats/1.png", title: "Слайд 1", description: "Описание первого слайда"},
        {src: "/stats/2.png", title: "Слайд 2", description: "Описание второго слайда"},
        {src: "/stats/3.png", title: "Слайд 3", description: "Описание третьего слайда"},
    ],
    "2": [
        {src: "/stats/1.png", title: "Слайд #1", description: "Описание #первого слайда"},
        {src: "/stats/2.png", title: "Слайд #2", description: "Описание #второго слайда"},
        {src: "/stats/3.png", title: "Слайд #3", description: "Описание #третьего слайда"},
    ]
}


const AIImpactTabs = () => {

    const [activeTab, setActiveTab] = useState<string>("1")

    const onTabHandle = (value?: string) => {
        if (value) {
            setActiveTab(value)
        }
    };

    return (
        <>
            <ChipGroup defaultValue="1" onChange={onTabHandle} className="self-center">
                <Chip value="1">Розничная торговля</Chip>
                <Chip value="2">Юриспруденция</Chip>
                <Chip value="3">Гостиничное дело</Chip>
                <Chip value="4">Фитнес индустрия</Chip>
                <Chip value="5">Медицина</Chip>
            </ChipGroup>
            <Slider slides={slides[activeTab] || []}/>
        </>
    );
};

export default AIImpactTabs;
