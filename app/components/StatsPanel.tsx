import React, {FC} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface StatsPanelProps extends LandingPanelProps {
    src: string;
}

const StatsPanel: FC<StatsPanelProps> = ({title, description, src, ...props}) => {
    return (
        <LandingPanel
            {...props}
            className="md:space-y-1x-large max-md:space-y-large"
            panelClass={cn(
                "md:h-[512px]",
                props.className,
            )}
        >
            <div className="space-y-normal">
                <h4>{title}</h4>
                <p className="text-body-big text-neutral-text-secondary">{description}</p>
            </div>
            <img
                className="mt-auto object-cover w-full rounded-[8px] xl:h-[198px] md:h-[320px] h-[156px] overflow-hidden"
                src={src} alt={title}/>
        </LandingPanel>
    );
};

export default StatsPanel;