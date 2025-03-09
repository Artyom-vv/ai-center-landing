"use client";

import React, {FC, HTMLProps, ReactNode} from 'react';
import cn from "classnames";
import Tilt from 'react-parallax-tilt';

export interface LandingPanelProps extends LandingPanelBaseProps {
    title: string
    description: ReactNode
}

export interface LandingPanelBaseProps extends HTMLProps<HTMLDivElement> {
    tiltClass?: string
    glareColor?: string
}

const LandingPanel: FC<LandingPanelBaseProps> = ({children, tiltClass, glareColor = "var(--color-neutral-bg-subtle-hover)", ...props}) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor={glareColor}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            className={cn(
                "rounded-[16px] overflow-hidden bg-neutral-bg-subtle-default grow",
                tiltClass
            )}
        >
            <div
                {...props}
                className={cn(
                    "relative z-50 p-1x-large space-y-normal flex flex-col",
                    props.className
                )}
            >
                {children}
            </div>
        </Tilt>

    );
};

export default LandingPanel;