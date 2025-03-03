"use client"

import React, {FC, useRef} from 'react';
import {useButton} from "react-aria";
import {AriaButtonOptions} from "@react-aria/button";
import cn from "classnames";

export type HTMLButtonAriaProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onBlur' | 'onFocus' | 'onKeyUp' | 'onKeyDown'>

export interface IButtonProps extends AriaButtonOptions<'button'>, HTMLButtonAriaProps {
    children?: React.ReactNode;
    size?: string;
}

const Button: FC<IButtonProps> = ({children, ...props}) => {

    const ref = useRef<HTMLButtonElement>(null);
    const {isPressed, buttonProps} = useButton({
        ...props
    }, ref)

    return (
        <button
            ref={ref}
            {...props}
            {...buttonProps}
            className={cn(
                props.className,
                "px-large h-(--size-1x-large) flex items-center gap-1x-small text-body-large font-bold text-white bg-semantic-brand-main-default rounded-[8px] disabled:bg-semantic-neutral-background-default-subtle"
            )}
        >
            {children}
        </button>
    );
};

export default Button;