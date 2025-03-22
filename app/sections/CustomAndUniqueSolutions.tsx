import React from 'react';
import Section from "@/app/components/Section";
import PersonPanel from "@/app/components/PersonPanel";
import AnimatedCards from "@/app/components/AnimatedCards";
import RotatingCircle from "@/app/components/RotatingCircle";

const CustomAndUniqueSolutions = () => {
    return (
        <Section
            beforeContent={<RotatingCircle className="size-[140px] absolute right-[150px] -bottom-[194px]"/>}
            title="А также - нестандартные решения"
            contentClass="space-y-[0]"
            subtitle={<>
                Интересные решения по автоматизации <br className="md:hidden"/> с помощью ИИ, <br
                className="max-md:hidden"/>
                которые мы сможем <br className="md:hidden"/> реализовать
            </>}
        >
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
