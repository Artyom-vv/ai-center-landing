import React, {FC, ReactNode} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface AdvantagePanelProps extends LandingPanelProps {
    icon: ReactNode
}

const AdvantagePanel: FC<AdvantagePanelProps> = ({title, description, icon, ...props}) => {
    return (
        <LandingPanel {...props} panelClass={cn(
            "h-[512px] basis-[416px]",
            props.className,
        )}>
            <div className="size-1x-large rounded-[8px] flex items-center justify-center bg-neutral-bg-on-subtle-default mb-auto">
                {icon}
            </div>
            <h5>{title}</h5>
            <p className="text-body-big text-neutral-text-secondary">{description}</p>
        </LandingPanel>
    );
};

export default AdvantagePanel;