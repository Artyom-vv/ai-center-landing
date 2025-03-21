"use client"

import React, {FC, ReactNode, useRef} from 'react';
import {AriaButtonOptions} from "@react-aria/button";
import {HTMLButtonAriaProps} from "@/app/components/types/aria-button";
import {useButton} from "react-aria";
import {cva} from "class-variance-authority";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import cn from "classnames";

export interface LinkProps extends Omit<AriaButtonOptions<'button'>, 'href'>, HTMLButtonAriaProps, Omit<NextLinkProps, 'href' | 'onClick' | 'onMouseEnter' | 'onTouchStart'> {
    href: string;
    children?: ReactNode;
    size?: "large";
    variant?: "text" | "link"
    nowrap?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const linkVariants = cva(
    "transition duration-300 flex items-start gap-1x-small border-none bg-transparent text-left p-[0]",
    {
        variants: {
            nowrap: {
                true: 'whitespace-nowrap',
                false: null
            },
            intent: {
                link: null,
                text: null,
            },
            size: {
                "large": "text-body-big"
            },
            disabled: {
                true: null,
                false: "cursor-pointer "
            },
            pressed: {
                true: null,
                false: null
            }
        },
        compoundVariants: [
            {
                disabled: true,
                className: "text-neutral-text-quaternary"
            },
            {
                intent: "link",
                pressed: true,
                disabled: false,
                className: "text-brand-main-active"
            },
            {
                intent: "link",
                pressed: false,
                disabled: false,
                className: "text-brand-main-default hover:text-brand-main-hover"
            },
            {
                intent: "text",
                pressed: true,
                disabled: false,
                className: "text-neutral-text-heading"
            },
            {
                intent: "text",
                pressed: false,
                disabled: false,
                className: "text-neutral-text-primary hover:text-neutral-text-secondary"
            },
        ],
        defaultVariants: {
            disabled: false,
            pressed: false,
            size: "large"
        },
    })

const Link: FC<LinkProps> = ({children, size, isDisabled, leftIcon, nowrap = true, variant = "link", rightIcon, target, href, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({
        isDisabled,
        ...props
    }, ref)

    return (
        <NextLink
            className="no-underline"
            target={target}
            href={href}
        >
            <button
                ref={ref}
                {...props}
                {...buttonProps}
                className={cn(
                    linkVariants({
                        size,
                        nowrap,
                        intent: variant,
                        disabled: isDisabled,
                        pressed: isPressed,
                    }), props.className
                )}
            >
                {leftIcon && (
                    <div className="py-[6px]">
                        {leftIcon}
                    </div>
                )}
                {children}
                {rightIcon && (
                    <div className="py-[6px]">
                        {rightIcon}
                    </div>
                )}
            </button>
        </NextLink>

    );
};

export default Link;
