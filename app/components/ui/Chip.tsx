"use client";

import React, {FC, useRef} from "react";
import {useButton} from "react-aria";
import {AriaButtonOptions} from "@react-aria/button";
import cn from "classnames";
import {cva} from "class-variance-authority";
import {HTMLButtonAriaProps} from "@/app/components/types/aria-button";

export interface ChipProps extends AriaButtonOptions<'button'>, HTMLButtonAriaProps {
    children?: React.ReactNode;
    size?: "large" | "big" | "normal";
    isSelected?: boolean;
    onSelect?: () => void;
    value?: string;
}

const chipVariants = cva(
    "transition duration-300 rounded-[8px] [&:not(:disabled)]:cursor-pointer flex items-center border-none text-neutral-text-primary",
    {
        variants: {
            intent: {
                secondary: "bg-neutral-bg-subtle-default [&:not(:disabled)]:hover:bg-neutral-bg-subtle-hover",
            },
            selected: {
                true: "bg-brand-main-default text-white",
                false: "bg-neutral-bg-on-subtle-default text-neutral-solid",
            },
            size: {
                large: "px-normal h-(--size-large) text-body-big font-heading",
                big: "px-normal h-(--size-large) text-body-big font-heading",
                normal: "px-normal h-(--size-large) text-body-big font-heading"
            },
            pressed: {
                false: null,
                true: "!bg-neutral-bg-subtle-active"
            },
            disabled: {
                true: null,
                false: null
            }
        },
        defaultVariants: {
            selected: false,
            pressed: false,
            intent: "secondary",
            size: "large",
            disabled: false
        },
    }
);

const Chip: FC<ChipProps> = ({children, isSelected = false, onSelect, size, isDisabled, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({...props, isDisabled}, ref);

    return (
        <button
            ref={ref}
            {...props}
            {...buttonProps}
            onClick={onSelect}
            className={cn(
                chipVariants({
                    selected: isSelected,
                    pressed: isPressed,
                    size
                })
            )}
        >
            {children}
        </button>
    );
};

export default Chip;