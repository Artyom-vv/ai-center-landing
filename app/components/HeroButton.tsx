"use client"

import React from 'react';
import FadeIn from "@/app/components/FadeIn";
import Button from "@/app/components/ui/Button";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";

const HeroButton = () => {
    const breakpoint = useBreakpoint()
    return (
        <FadeIn duration={0.4} className="md:w-auto w-full">
            <Button size={breakpoint === "xl" ? "1x-large" : breakpoint === "md" ? "1x-large" : "large"} className="mt-3x-large w-full">Получить бесплатный аудит</Button>
        </FadeIn>
    );
};

export default HeroButton;
