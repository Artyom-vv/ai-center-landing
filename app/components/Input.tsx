import React, {useRef} from "react";
import {useTextField} from "react-aria";
import {cva} from "class-variance-authority";
import {AriaTextFieldOptions} from "@react-aria/textfield";

interface InputProps extends AriaTextFieldOptions<'input'> {
    leftContent?: React.ReactNode;
    size?: "large"
    state?: "default" | "error" | "success";
    onSubtle?: boolean;
    placeholder?: string;
}

const inputStyles = cva(
    "w-full border border-transparent transition duration-300 placeholder:transition placeholder:duration-300 placeholder:text-neutral-text-tertiary hover:placeholder:text-neutral-text-secondary text-neutral-text-heading focus:border-brand-border-active focus:bg-neutral-bg-surface",
    {
        variants: {
            size: {
                large: "text-body-big px-normal rounded-[8px] h-[48px]",
            },
            state: {
                default: "border-gray-300 focus:ring-blue-500",
                error: "border-red-500 focus:ring-red-500",
                success: "border-green-500 focus:ring-green-500",
            },
            onSubtle: {
                false: "bg-neutral-bg-subtle-default hover:bg-neutral-bg-subtle-hover hover:border-neutral-border-subtle-hover not-placeholder-shown:border-neutral-border-on-surface-hover",
                true: "bg-neutral-bg-on-subtle-default hover:bg-neutral-bg-on-subtle-hover hover:border-neutral-border-on-subtle-hover not-placeholder-shown:border-neutral-border-on-subtle-hover",
            }
        },
        defaultVariants: {
            size: "large",
            onSubtle: false,
            state: "default",
        },
    }
);

const Input: React.FC<InputProps> = ({size = "large", state = "default", onSubtle = false, placeholder, ...props}) => {
    const ref = useRef(null);
    const {inputProps} = useTextField<'input'>(props, ref);

    return (
        <input
            {...inputProps}
            ref={ref}
            placeholder={placeholder}
            className={inputStyles({size, onSubtle, state})}
        />
    );
};

export default Input;