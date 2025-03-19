import React from 'react';
import Section from "@/app/components/Section";
import PersonPanel from "@/app/components/PersonPanel";
import AnimatedCards from "@/app/components/AnimatedCards";

const PopularSolutions = () => {

    return (
        <Section
            title={<>
                Решения, востребованные <br className="xl:hidden block"/> у наших клиентов
            </>}
            subtitle={<>
                Перечень самых востребованных решений<br/>для автоматизации с помощью ИИ
            </>}
            contentClass="space-y-[0]"
        >
            <AnimatedCards
                firstRowCards={ <>
                    <PersonPanel title="Логисты" src="/persons/1.png"></PersonPanel>
                    <PersonPanel title="Менеджеры" src="/persons/2.png"></PersonPanel>
                    <PersonPanel title="Кураторы" src="/persons/3.png"></PersonPanel>
                    <PersonPanel title="Отдел качества" src="/persons/4.png"></PersonPanel>
                </>}
                secondRowCards={ <>
                    <PersonPanel title="Аналитики" src="/persons/5.png"></PersonPanel>
                    <PersonPanel title="Консультанты" src="/persons/6.png"></PersonPanel>
                    <PersonPanel title="Маркетологи" src="/persons/7.png"></PersonPanel>
                    <PersonPanel title="Финансисты" src="/persons/8.png"></PersonPanel>
                </>}
            >
            </AnimatedCards>
        </Section>
    );
};

export default PopularSolutions;
