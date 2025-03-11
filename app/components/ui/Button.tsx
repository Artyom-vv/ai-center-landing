"use client"

import React, {FC, useRef} from 'react';
import {useButton} from "react-aria";
import {AriaButtonOptions} from "@react-aria/button";
import cn from "classnames";
import {cva} from "class-variance-authority";
import {HTMLButtonAriaProps} from "@/app/components/types/aria-button";

export interface ButtonProps extends AriaButtonOptions<'button'>, HTMLButtonAriaProps {
    children?: React.ReactNode;
    iconOnly?: boolean;
    size?: "1x-large" | "large";
    variant?: "primary" | "secondary"
    leftIcon?: React.ReactNode;
}

const buttonVariants = cva(
    "transition duration-300 flex items-center justify-center gap-1x-small rounded-[8px] cursor-pointer border-thick border-solid border-transparent whitespace-nowrap",
    {
        variants: {
            intent: {
                primary: "text-neutral-solid-white bg-brand-main-default hover:bg-brand-main-hover hover:border-brand-bg-hover",
                secondary: "text-neutral-solid-white bg-brand-main-default hover:bg-brand-main-hover hover:border-brand-bg-hover",
            },
            size: {
                "1x-large": "h-(--size-1x-large) text-body-large font-bold",
                "large": "h-(--size-large) text-body-large font-bold"
            },
            disabled: {
                true: "cursor-not-allowed bg-neutral-bg-on-subtle-default"
            },
            pressed: {
                true: "!bg-brand-main-active"
            },
            icononly: {
                true: null,
                false: null
            }
        },
        compoundVariants: [
            {
                icononly: false,
                className: "px-large"
            },
            {
                size: "large",
                icononly: true,
                className: "size-large"
            },
            {
                size: "1x-large",
                icononly: true,
                className: "size-1x-large"
            },
        ],
        defaultVariants: {
            disabled: false,
            pressed: false,
            size: "1x-large",
            intent: "primary"
        },
    })


const Button: FC<ButtonProps> = ({children, leftIcon, iconOnly = false, variant = 'primary', size = 'large', onPress, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({
        ...props,
        onPress
    }, ref)

    return (
        <button
            ref={ref}
            {...props}
            {...buttonProps}
            className={cn(
                props.className,
                buttonVariants({
                    size: size,
                    disabled: buttonProps.disabled,
                    pressed: isPressed,
                    intent: variant,
                    icononly: iconOnly
                })
            )}
        >
            {leftIcon}
            {children}
        </button>
    );
};

export default Button;