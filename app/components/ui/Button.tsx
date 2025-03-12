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
    onSubtle?: boolean
}


const buttonVariants = cva(
    "text-neutral-text-primary transition duration-300 flex items-center justify-center gap-1x-small rounded-[8px] border-thick border-solid border-transparent whitespace-nowrap",
    {
        variants: {
            intent: {
                primary: "bg-brand-main-default",
                secondary:null,
            },
            size: {
                "1x-large": "h-(--size-1x-large) text-body-large font-bold",
                "large": "h-(--size-large) text-body-large font-bold"
            },
            disabled: {
                true: "cursor-not-allowed bg-neutral-bg-on-subtle-default"
            },
            pressed: {
                true: null,
                false: null
            },
            icononly: {
                true: null,
                false: null
            },
            onsubtle: {
                true: null,
                false: null
            }
        },
        compoundVariants: [
            {
                intent: "secondary",
                onsubtle: false,
                pressed: true,
                disabled: false,
                className: "bg-neutral-bg-subtle-active"
            },
            {
                intent: "secondary",
                pressed: true,
                onsubtle: true,
                disabled: false,
                className: "bg-neutral-bg-on-subtle-active"
            },
            {
                intent: "secondary",
                onsubtle: false,
                pressed: false,
                disabled: false,
                className: "bg-neutral-bg-subtle-default"
            },
            {
                intent: "secondary",
                pressed: false,
                onsubtle: true,
                disabled: false,
                className: "bg-neutral-bg-on-subtle-default"
            },
            {
                intent: "primary",
                disabled: false,
                pressed: false,
                className: "bg-brand-main-default"
            },
            {
                intent: "primary",
                disabled: false,
                pressed: true,
                className: "bg-brand-main-active"
            },
            {
                intent: "primary",
                pressed: false,
                disabled: false,
                className: "hover:bg-brand-main-hover hover:border-brand-bg-hover"
            },
            {
                intent: "secondary",
                onsubtle: false,
                pressed: false,
                disabled: false,
                className: "hover:bg-neutral-bg-subtle-hover"
            },
            {
                intent: "secondary",
                onsubtle: true,
                pressed: false,
                disabled: false,
                className: "hover:bg-neutral-bg-on-subtle-hover"
            },
            {
                disabled: false,
                className: "cursor-pointer"
            },
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
            onsubtle: false,
            pressed: false,
            disabled: false,
            size: "1x-large",
            intent: "primary"
        },
    })


const Button: FC<ButtonProps> = ({
                                     children,
                                     leftIcon,
                                     onSubtle = false,
                                     iconOnly = false,
                                     variant = 'primary',
                                     size = 'large',
                                     onPress,
                                     ...props
                                 }) => {

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
                    onsubtle: onSubtle,
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