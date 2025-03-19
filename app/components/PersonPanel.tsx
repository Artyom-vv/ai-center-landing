import React, {FC} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface PersonPanelProps extends Omit<LandingPanelProps, 'description'> {
    src: string;
}

const PersonPanel: FC<PersonPanelProps> = ({title, src, ...props}) => {
    return (
        <LandingPanel
            {...props}
            tiltEnable={false}
            panelClass={cn("xl:size-[328px] size-[308px] shrink-0")}
            className={cn(
                props.className,
                "relative text-center"
            )}>
            <img className="absolute bottom-1x-large left-[0] object-cover h-full w-full" src={src} alt={title}/>
            <h5 className="mt-auto">{title}</h5>
        </LandingPanel>
    );
};

export default PersonPanel;