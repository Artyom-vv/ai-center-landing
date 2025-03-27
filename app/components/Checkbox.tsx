"use client";

import React, {FC, useRef} from 'react';
import {useCheckbox} from "react-aria";
import {useToggleState} from "@react-stately/toggle";
import {AriaCheckboxProps} from "@react-types/checkbox";
import {cva} from "class-variance-authority";
import {RiCheckLine} from "@remixicon/react";

export interface CheckboxProps extends AriaCheckboxProps {
    size?: "big"
    onSubtle?: boolean;
}

const checkboxStyles = cva(
    "transition duration-300 m-[0] rounded-[8px] flex items-center justify-center",
    {
        variants: {
            size: {
                big: "size-(--size-small)"
            },
            onSubtle: {
                false: null,
                true: null
            },
            isDisabled: {
                false: null,
                true: null
            },
            isSelected: {
                false: null,
                true: null
            },
            isPressed: {
                false: null,
                true: null
            },
        },
        compoundVariants: [
            {
                onSubtle: true,
                isDisabled: false,
                isPressed: false,
                isSelected: false,
                className: "bg-neutral-bg-on-subtle-default hover:bg-neutral-bg-on-subtle-hover"
            },
            {
                onSubtle: true,
                isDisabled: false,
                isSelected: false,
                isPressed: true,
                className: "bg-neutral-bg-on-subtle-active"
            },
            {
                isSelected: true,
                className: "bg-brand-main-default"
            },
            {
                onSubtle: false,
                isSelected: false,
                isDisabled: false,
                className: "bg-neutral-bg-subtle-default"
            }
        ],
        defaultVariants: {
            size: "big",
            isPressed: false,
            isDisabled: false,
            onSubtle: false
        }
    })

const iconAnimation = cva(
    "transition-all duration-300",
    {
        variants: {
            isSelected: {
                true: "scale-100 opacity-100",
                false: "scale-50 opacity-0"
            }
        }
    }
)

const Checkbox: FC<CheckboxProps> = ({size = 'big', onSubtle = false, children, ...props}) => {
    const ref = useRef<HTMLInputElement>(null)
    const toggleState = useToggleState()
    const {inputProps, labelProps, isPressed} = useCheckbox(props, toggleState, ref)

    return (
        <label {...labelProps} className="flex gap-small cursor-pointer">
            <span className="py-[2px] block">
                <input ref={ref} {...inputProps} className="hidden"/>
                <div
                    onClick={() => ref.current?.click()}
                    className={checkboxStyles({
                        size,
                        onSubtle,
                        isSelected: toggleState.isSelected,
                        isDisabled: inputProps.disabled,
                        isPressed
                    })}
                >
                    {/*{toggleState.isSelected && <RiCheckLine color="var(--color-neutral-solid-white)" size={20}></RiCheckLine>}*/}
                    <RiCheckLine
                        color="var(--color-neutral-solid-white)"
                        size={20}
                        className={iconAnimation({isSelected: toggleState.isSelected})}
                    />
                </div>
            </span>
            <span className="text-body-big">
                {children}
                </span>
        </label>
    );
};

export default Checkbox;
