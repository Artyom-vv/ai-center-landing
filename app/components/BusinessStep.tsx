"use client"

import React, {HTMLProps} from "react";
import cn from "classnames";
import Chip from "@/app/components/ui/Chip";
import {useBusinessStepContext} from "@/app/components/BusinessStepContext";

export interface BusinessStepProps extends HTMLProps<HTMLDivElement> {
    step: number;
    title: string
    children: React.ReactNode;
    selected?: boolean
}

export function BusinessStep({step, children, title, selected, ...props}: BusinessStepProps) {

    const { size, stepIncrement } = useBusinessStepContext();
    const calculatedSize = size + (step - 1) * stepIncrement;

    return (
        <div
            {...props}
            style={{
                height: calculatedSize + 'px',
            }}
            className={cn(
                "basis-[0] flex-grow flex flex-col items-start relative p-1x-large rounded-[16px]",
                {
                    "bg-neutral-bg-subtle-default": !selected,
                    "bg-brand-main-default": selected
                },
                props.className
            )}
        >
            <Chip onSubtle isDisabled className={cn("mb-auto", {"!bg-brand-main-hover": selected})}>
                {step} шаг
            </Chip>
            <div className="space-y-normal">
                <h5 className="neutral-text-heading">{title}</h5>
                <p className="text-body-big text-neutral-text-heading">{children}</p>
            </div>
        </div>
    )
}