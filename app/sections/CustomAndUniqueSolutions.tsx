import React from 'react';
import Section from "@/app/components/Section";
import PersonPanel from "@/app/components/PersonPanel";
import AnimatedCards from "@/app/components/AnimatedCards";

const CustomAndUniqueSolutions = () => {
    return (
        <Section title="А также - нестандартные решения" subtitle={<>
            Интересные решения по автоматизации с помощью ИИ,<br/>
            которые мы сможем реализовать
        </>}>
            <AnimatedCards
                reverse={true}
                firstRowCards={(
                    <>
                        <PersonPanel title="Стратеги" src="/persons/9.png"></PersonPanel>
                        <PersonPanel title="Баристы" src="/persons/10.png"></PersonPanel>
                        <PersonPanel title="Эксперты по мемам" src="/persons/11.png"></PersonPanel>
                        <PersonPanel title="Гиды" src="/persons/12.png"></PersonPanel>
                    </>
                )}
                secondRowCards={(
                    <>
                        <PersonPanel title="Флористы" src="/persons/13.png"></PersonPanel>
                        <PersonPanel title="Секретари" src="/persons/14.png"></PersonPanel>
                        <PersonPanel title="Коллекторы" src="/persons/15.png"></PersonPanel>
                        <PersonPanel title="Диетологи" src="/persons/16.png"></PersonPanel>
                    </>
                )}
            >

            </AnimatedCards>
        </Section>
    );
};

export default CustomAndUniqueSolutions;
