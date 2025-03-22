"use client"

import React from 'react';
import Button from "@/app/components/ui/Button";
import {useRequestModal} from "@/app/components/RequestModal";

const AiAdvantageButton = () => {
    const {openModal} = useRequestModal()
    return (
        <Button onPress={openModal} className="max-md:w-full">Оставить заявку</Button>
    );
};

export default AiAdvantageButton;
