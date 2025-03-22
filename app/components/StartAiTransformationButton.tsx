"use client"

import React from 'react';
import Button from "@/app/components/ui/Button";
import {useRequestModal} from "@/app/components/RequestModal";

const StartAiTransformationButton = () => {
    const {openModal} = useRequestModal()
    return (
        <Button onPress={openModal} className="self-center xl:flex hidden">
            Начните внедрение
        </Button>
    );
};

export default StartAiTransformationButton;
