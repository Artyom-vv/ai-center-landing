import React from 'react';
import Section from "@/app/components/Section";
import PersonPanel from "@/app/components/PersonPanel";

const PopularSolutions = () => {
    return (
        <Section
            title="Решения, востребованные у наших клиентов"
            subtitle={<>
                Перечень самых востребованных решений<br/>для автоматизации с помощью ИИ
            </>}
            containerClass="space-y-[0]"
        >
            <div className="space-y-normal rotate-[-1.5deg] mt-5x-large">
                <div className="flex gap-normal">
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                </div>
                <div className="flex gap-normal -translate-x-1/3">
                    <PersonPanel title="Консультанты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Консультанты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Консультанты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Консультанты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Консультанты" src="/persons/1.png"></PersonPanel>
                </div>
            </div>
        </Section>
    );
};

export default PopularSolutions;
