import React, {FC, ReactNode} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface AdvantagePanelProps extends LandingPanelProps {
    src?: string
    icon?: ReactNode
}

const AdvantagePanel: FC<AdvantagePanelProps> = ({title, description, src, icon, ...props}) => {
    return (
        <LandingPanel
            {...props}
            panelClass={cn(
                "xl:basis-[416px]",
                props.className,
            )}
            className="gap-large"
        >
            {icon && (
                <div
                    className="size-1x-large rounded-[8px] flex items-center justify-center bg-neutral-bg-on-subtle-default md:mb-auto max-md:mb-large">
                    {icon}
                </div>
            )}
            {src && (
                <img src={src} alt={title}
                     className="object-cover md:max-w-[352px] md:h-[198px] max-w-[280px] h-[157px] mb-auto"/>
            )}
            <div className="space-y-normal">
                <h5>{title}</h5>
                <p className="text-body-big text-neutral-text-secondary">{description}</p>
            </div>
        </LandingPanel>
    );
};

export default AdvantagePanel;