"use client";

import React, {FC, HTMLProps, ReactNode} from 'react';
import cn from "classnames";
import Tilt from 'react-parallax-tilt';

export interface LandingPanelProps extends LandingPanelBaseProps {
    title: string
    description: ReactNode
}

export type LandingPanelBaseProps = HTMLProps<HTMLDivElement>;

const LandingPanel: FC<LandingPanelBaseProps> = ({children, ...props}) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="var(--color-neutral-bg-subtle-hover)"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="rounded-[16px] overflow-hidden bg-neutral-bg-subtle-default"
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