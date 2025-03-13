import React, {FC, ReactNode} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";

export interface PricePanelProps extends LandingPanelProps {
    icon: ReactNode
    sale: string;
    price: string
}

export const formatPrice = (price: number): string => {
    return price.toLocaleString("ru-RU") + '₽';
};

const PricePanel: FC<PricePanelProps> = ({title, description, sale, price, icon, ...props}) => {
    return (
        <LandingPanel {...props} panelClass={cn(
            props.className,
            "h-[512px]"
        )}>
            <div className="flex flex-col gap-[32px]">
                <div
                    className="size-1x-large rounded-[8px] flex items-center justify-center bg-neutral-bg-on-subtle-default mb-auto">
                    {icon}
                </div>
                <div className="space-y-normal">
                    <h5>{title}</h5>
                    <p className="text-body-big text-neutral-text-secondary">{description}</p>
                </div>
            </div>
            <div className="space-y-normal mt-auto">
                <h5 className="line-through text-neutral-text-quaternary ">{sale}</h5>
                <h4>{price}</h4>
            </div>
        </LandingPanel>
    );
};

export default PricePanel;