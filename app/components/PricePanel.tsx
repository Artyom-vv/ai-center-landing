import React, {FC, ReactNode} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";
import {RiCheckLine} from "@remixicon/react";

export interface PricePanelProps extends Omit<LandingPanelProps, 'description'> {
    icon: ReactNode
    sale: string;
    price: string
    descriptions: string[]
}

export const formatPrice = (price: number): string => {
    return price.toLocaleString("ru-RU") + '₽';
};

const PricePanel: FC<PricePanelProps> = ({title, descriptions, sale, price, icon, ...props}) => {
    return (
        <LandingPanel
            {...props}
            className="xl:space-y-normal md:space-y-1x-large max-md:space-y-large"
            panelClass={cn(
                props.className,
                "xl:h-[512px] xl:basis-[416px]"
            )}>
            <div className="flex flex-col gap-[32px]">
                <div
                    className="size-1x-large rounded-[8px] flex items-center justify-center bg-neutral-bg-on-subtle-default mb-auto">
                    {icon}
                </div>
                <div className="space-y-normal">
                    <h5>{title}</h5>
                    {descriptions.map((description,i) => (
                        <div key={i} className="flex gap-normal">
                            <div
                                className="circle rounded-full flex items-center justify-center size-[28px] bg-neutral-bg-on-subtle-default shrink-0">
                                <RiCheckLine size={16} color="var(--color-neutral-text-heading)"></RiCheckLine>
                            </div>
                            <p className="text-body-big text-neutral-text-secondary">{description}</p>
                        </div>
                    ))}

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