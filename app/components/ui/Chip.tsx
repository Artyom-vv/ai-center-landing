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
    onSubtle?: boolean
}

const chipVariants = cva(
    "transition duration-300 rounded-[8px] flex items-center border-none border-[1px] border-solid",
    {
        variants: {
            intent: {
                secondary: null
            },
            selected: {
                false: null,
                true: null
            },
            size: {
                large: "px-normal h-(--size-large) text-body-big",
                big: "px-normal h-[40px] text-body-big",
                normal: "px-[11px] h-[32px] text-body-normal"
            },
            pressed: {
                false: null,
                true: null
            },
            onSubtle: {
                false: null,
                true: null
            },
            disabled: {
                true: null,
                false: "cursor-pointer"
            },
        },
        compoundVariants: [
            {
              selected: false,
              className: "border-transparent"
            },
            {
                intent: "secondary",
                selected: true,
                className: "text-neutral-solid-white"
            },
            {
                intent: "secondary",
                selected: false,
                className: "text-neutral-text-primary"
            },
            {
                intent: "secondary",
                selected: true,
                onSubtle: true,
                pressed: false,
                className: "bg-brand-main-default"
            },
            {
                intent: "secondary",
                selected: true,
                onSubtle: true,
                pressed: false,
                disabled: false,
                className: "hover:bg-brand-main-hover"
            },
            {
                intent: "secondary",
                selected: true,
                pressed: true,
                disabled: false,
                className: "bg-brand-main-active"
            },
            {
                intent: "secondary",
                selected: true,
                pressed: false,
                onSubtle: false,
                className: "bg-neutral-bg-on-subtle-default border-neutral-border-on-subtle-default"
            },
            {
                intent: "secondary",
                selected: true,
                disabled: false,
                pressed: false,
                onSubtle: false,
                className: "hover:bg-neutral-bg-on-subtle-hover hover:border-neutral-border-on-subtle-hover"
            },
            {
                intent: "secondary",
                selected: true,
                disabled: false,
                pressed: true,
                onSubtle: false,
                className: "bg-neutral-bg-on-subtle-active border-neutral-border-on-subtle-active"
            },
            {
                intent: "secondary",
                selected: false,
                pressed: false,
                onSubtle: false,
                className: "bg-neutral-bg-subtle-default"
            },
            {
                intent: "secondary",
                selected: false,
                disabled: false,
                pressed: false,
                onSubtle: false,
                className: "hover:bg-neutral-bg-subtle-hover"
            },
            {
                intent: "secondary",
                selected: false,
                disabled: false,
                pressed: true,
                onSubtle: false,
                className: "bg-neutral-bg-subtle-active"
            },
            {
                intent: "secondary",
                selected: false,
                pressed: false,
                onSubtle: true,
                className: "bg-neutral-bg-on-subtle-default"
            },
            {
                intent: "secondary",
                selected: false,
                disabled: false,
                pressed: false,
                onSubtle: true,
                className: "hover:bg-neutral-bg-on-subtle-hover"
            },
            {
                intent: "secondary",
                selected: false,
                disabled: false,
                pressed: true,
                onSubtle: true,
                className: "bg-neutral-bg-on-subtle-active"
            }
        ],
        defaultVariants: {
            intent: "secondary",
            size: "large",
            selected: false,
            pressed: false,
            disabled: false
        },
    }
);

const Chip: FC<ChipProps> = ({children, isSelected = false, onSubtle = false, onSelect, size, isDisabled, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({
        ...props,
        onPress: onSelect,
        isDisabled}, ref);

    return (
        <button
            ref={ref}
            {...props}
            {...buttonProps}
            className={cn(
                chipVariants({
                    selected: isSelected,
                    pressed: isPressed,
                    disabled: isDisabled,
                    size,
                    onSubtle: onSubtle
                }),
                props.className
            )}
        >
            {children}
        </button>
    );
};

export default Chip;