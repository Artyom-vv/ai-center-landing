import React, {FC} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface StatsPanelProps extends LandingPanelProps {
    src: string;
}

const StatsPanel: FC<StatsPanelProps> = ({title, description, src, ...props}) => {
    return (
        <LandingPanel {...props} panelClass={cn(
            "h-[512px]",
            props.className,
        )}>
            <h5>{title}</h5>
            <p className="text-body-big text-neutral-text-secondary">{description}</p>
            <img className="mt-auto object-cover w-full rounded-[8px] xl:h-[198px] h-[320px] overflow-hidden" src={src} alt={title}/>
        </LandingPanel>
    );
};

export default StatsPanel;