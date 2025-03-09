import React, {FC} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface StatsPanelProps extends LandingPanelProps {
    src: string;
}

const StatsPanel: FC<StatsPanelProps> = ({title, description, src, ...props}) => {
    return (
        <LandingPanel {...props} className={cn(
            props.className,
            "h-[452px]"
        )}>
            <h5>{title}</h5>
            <p className="text-body-big text-neutral-text-secondary">{description}</p>
            <img className="mt-auto object-cover w-full rounded-[8px] h-[198px] overflow-hidden" src={src} alt={title}/>
        </LandingPanel>
    );
};

export default StatsPanel;