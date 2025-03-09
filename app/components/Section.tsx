import React, {FC, ReactNode} from 'react';

export interface SectionProps {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    children: ReactNode;
}

const Section: FC<SectionProps> = ({title, subtitle, children}) => {
    return (
        <section className="py-[96px]">
            <div className="container space-y-1x-large flex flex-col">
                <div className="flex flex-col items-center space-y-normal text-center">
                    {title && (
                        <h4>{title}</h4>
                    )}
                    {subtitle && (
                        <p className="text-body-large text-neutral-text-secondary">
                            {subtitle}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;