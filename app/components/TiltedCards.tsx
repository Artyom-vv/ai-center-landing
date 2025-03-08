import React, {FC, ReactNode} from 'react';
import cn from "classnames";

export interface TiltedCardsProps {
    children: ReactNode[];
}

const TiltedCards: FC<TiltedCardsProps> = ({children}) => {
    return (
        <div className="space-x-normal flex gap-normal">
            {children.map((child, index) => (
                <div
                    key={index}
                    className={cn(
                        "transition-transform grow",
                        {
                            "pt-[5px]": index === 0 || index === children.length - 1,
                            "rotate-[-1.5deg]": index === 0,
                            "rotate-[1.5deg]": index === children.length - 1
                        }
                    )}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default TiltedCards;