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
            panelClass={cn("xl:size-[328px] md:size-[308px] size-[156px] shrink-0")}
            className={cn(
                props.className,
                "relative text-center max-md:p-normal"
            )}>
            <img className="absolute xl:bottom-1x-large md:bottom-large bottom-normal left-[0] object-cover h-full w-full" src={src} alt={title}/>
            <div className="mt-auto relative z-10">
                <h5 className="max-md:hidden">{title}</h5>
                <p className="text-body-big md:hidden">{title}</p>
            </div>
        </LandingPanel>
    );
};

export default PersonPanel;