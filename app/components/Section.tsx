import React, {FC} from 'react';

export interface SectionProps {
    title?: string;
    subtitle?: string;
}

const Section: FC<SectionProps> = ({title, subtitle}) => {
    return (
        <section className="py-[96px]">
            <div className="container">
                <div className="flex flex-col items-center space-y-normal">
                    {title && (
                        <h4>{title}</h4>
                    )}
                    {subtitle && (
                        <p className="text-body-large text-neutral-text-secondary">
                            Перечень самых востребованных решений  для автоматизации с помощью ИИ
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Section;