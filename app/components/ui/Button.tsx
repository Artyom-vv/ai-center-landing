"use client"

import React, {FC, useRef} from 'react';
import {useButton} from "react-aria";
import {AriaButtonOptions} from "@react-aria/button";
import cn from "classnames";
import {cva} from "class-variance-authority";
import {HTMLButtonAriaProps} from "@/app/components/types/aria-button";

export interface ButtonProps extends AriaButtonOptions<'button'>, HTMLButtonAriaProps {
    children?: React.ReactNode;
    size?: "1x-large" | "large";
    leftIcon?: React.ReactNode;
}

const button = cva(
    "transition duration-300 flex items-center gap-1x-small rounded-[8px] cursor-pointer border-thick border-solid border-transparent whitespace-nowrap",
    {
        variants: {
            intent: {
                primary: "text-neutral-solid-white bg-brand-main-default hover:bg-brand-main-hover hover:border-brand-bg-hover",
            },
            size: {
                "1x-large": "px-large h-(--size-1x-large) text-body-large font-bold",
                "large": "px-large h-(--size-large) text-body-large font-bold"
            },
            disabled: {
                true: "cursor-not-allowed bg-neutral-bg-on-subtle-default"
            },
            pressed: {
                true: "!bg-brand-main-active"
            }
        },
        defaultVariants: {
            disabled: false,
            pressed: false,
            size: "1x-large",
            intent: "primary"
        },
    })


const Button: FC<ButtonProps> = ({children, leftIcon, size = 'large', ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton(props, ref)

    return (
        <button
            ref={ref}
            {...props}
            {...buttonProps}
            className={cn(
                props.className,
                button({
                    size: size,
                    disabled: buttonProps.disabled,
                    pressed: isPressed
                })
            )}
        >
            {leftIcon}
            {children}
        </button>
    );
};

export default Button;