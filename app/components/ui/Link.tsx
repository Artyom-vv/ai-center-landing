"use client"

import React, {FC, ReactNode, useRef} from 'react';
import {AriaButtonOptions} from "@react-aria/button";
import {HTMLButtonAriaProps} from "@/app/components/types/aria-button";
import {useButton} from "react-aria";
import {cva} from "class-variance-authority";
import NextLink, {LinkProps as NextLinkProps} from "next/link";

export interface LinkProps extends Omit<AriaButtonOptions<'button'>, 'href'>, HTMLButtonAriaProps, Omit<NextLinkProps, 'href' | 'onClick' | 'onMouseEnter' | 'onTouchStart' > {
    href: string;
    children?: ReactNode;
    size?: "large";
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const linkVariants = cva(
    "transition duration-300 flex items-center gap-1x-small cursor-pointer whitespace-nowrap text-brand-main-default hover:text-brand-main-hover border-none bg-transparent",
    {
        variants: {
            size: {
                "large": "text-body-big"
            },
            disabled: {
                true: "cursor-not-allowed"
            },
            pressed: {
                true: "!text-brand-main-active"
            }
        },
        defaultVariants: {
            disabled: false,
            pressed: false,
            size: "large"
        },
    })

const Link: FC<LinkProps> = ({children, size, isDisabled, leftIcon, rightIcon, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({
        isDisabled,
        ...props
    }, ref)

    return (
        <NextLink
            className="no-underline"
            href={props.href}
            {...props}
        >
            <button
                ref={ref}
                {...props}
                {...buttonProps}
                className={linkVariants({
                    size,
                    disabled: isDisabled,
                    pressed: isPressed,
                })}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </button>
        </NextLink>

    );
};

export default Link;
