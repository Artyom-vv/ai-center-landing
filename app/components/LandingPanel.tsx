"use client";

import React, {FC, HTMLProps, ReactNode} from 'react';
import cn from "classnames";
import Tilt from 'react-parallax-tilt';

export interface LandingPanelProps extends LandingPanelBaseProps {
    title: string
    description: ReactNode
}

export interface LandingPanelBaseProps extends HTMLProps<HTMLDivElement> {
    panelClass?: string
    glareColor?: string
    tiltEnable?: boolean
}

const LandingPanel: FC<LandingPanelBaseProps> = ({children, panelClass, tiltEnable = true, glareColor = "var(--color-neutral-bg-subtle-hover)", ...props}) => {

    const content = (
        <div
            {...props}
            className={cn(
                "relative z-50 p-1x-large space-y-normal flex flex-col h-full",
                props.className
            )}
        >
            {children}
        </div>
    )

    return (
        <div
            className={cn(
                "rounded-[16px] overflow-hidden bg-neutral-bg-subtle-default grow",
                panelClass
            )}
        >
            {tiltEnable ? (
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.5}
                    glareColor={glareColor}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                >
                    {content}
                </Tilt>
            ) : content}

        </div>

    );
};

export default LandingPanel;