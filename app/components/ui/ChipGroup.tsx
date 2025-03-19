"use client";

import React, {FC, useState, ReactElement} from "react";
import {ChipProps} from "./Chip";
import cn from "classnames";

interface ChipGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    children: ReactElement<ChipProps>[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const ChipGroup: FC<ChipGroupProps> = ({children, defaultValue, onChange, ...props}) => {
    const [selected, setSelected] = useState<string | null>(defaultValue || null);

    const handleSelect = (value?: string) => {
        if (value) {
            setSelected(value);
            onChange?.(value);
        }
    };

    return (
        <div {...props} className={cn(
            "flex gap-normal flex-wrap justify-center",
            props.className
        )}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isSelected: child.props.value === selected,
                    onSelect: () => handleSelect(child.props.value),
                } as Partial<ChipProps>)
            )}
        </div>
    );
};

export default ChipGroup;