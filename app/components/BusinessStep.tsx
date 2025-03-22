"use client"

import React, {HTMLProps} from "react";
import cn from "classnames";
import Chip from "@/app/components/ui/Chip";
import {useBusinessStepContext} from "@/app/components/BusinessStepContext";
import {useBreakpoint} from "@/app/hooks/useBreakpoint";
import useHydration from "@/app/hooks/useHydration";

export interface BusinessStepProps extends HTMLProps<HTMLDivElement> {
    step: number;
    title: string
    children: React.ReactNode;
    selected?: boolean
}

export function BusinessStep({step, children, title, selected, ...props}: BusinessStepProps) {

    const breakpoint = useBreakpoint();
    const isHydrated = useHydration()
    const chipSize = breakpoint === "xl" || breakpoint === "md" ? 'large' : 'big'

    const {size, stepIncrement} = useBusinessStepContext();
    const calculatedSize = size + (step - 1) * stepIncrement;
    const styles = breakpoint === "xl" ? {
        height: calculatedSize + 'px',
    } : breakpoint === "md" ? {
        width: calculatedSize + 'px',
    } : undefined

    return (
        <div
            {...props}
            {...(isHydrated ? { style: styles } : {})}
            className={cn(
                "basis-[0] flex-grow flex flex-col md:gap-1x-large gap-large items-start relative p-1x-large rounded-[16px]",
                {
                    "bg-neutral-bg-subtle-default": !selected,
                    "bg-brand-main-default": selected
                },
                props.className
            )}
        >
            <Chip size={chipSize} onSubtle isDisabled className={cn("mb-auto", {"!bg-brand-main-hover": selected})}>
                {step} шаг
            </Chip>
            <div className="space-y-normal">
                <h5 className="neutral-text-heading">{title}</h5>
                <p className="text-body-big text-neutral-text-heading">{children}</p>
            </div>
        </div>
    )
}