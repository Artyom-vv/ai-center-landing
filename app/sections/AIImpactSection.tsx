import React from 'react';
import Section from "@/app/components/Section";
import Chip from "@/app/components/ui/Chip";
import ChipGroup from "@/app/components/ui/ChipGroup";

const AiImpactSection = () => {
    return (
        <Section title="Узнайте﻿ как ИИ трансформирует ваш бизнес!">
            <ChipGroup className="self-center">
                <Chip>Розничная торговля</Chip>
                <Chip>Юриспруденция</Chip>
                <Chip>Гостиничное дело</Chip>
                <Chip>Фитнесс индустрия</Chip>
                <Chip>Медицина</Chip>
            </ChipGroup>
        </Section>
    );
};

export default AiImpactSection;