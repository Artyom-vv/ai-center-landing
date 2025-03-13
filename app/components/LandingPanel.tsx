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

    const panelClassName = cn(
        "bg-neutral-bg-subtle-default rounded-[16px] overflow-hidden basis-[0] grow",
        panelClass
    )

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

        <>
            {tiltEnable ? (
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.5}
                    glareColor={glareColor}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    className={panelClassName}
                >
                    {content}
                </Tilt>
            ) : (
                <div
                    className={panelClassName}
                >
                    {content}
                </div>
            )}
        </>


    );
};

export default LandingPanel;