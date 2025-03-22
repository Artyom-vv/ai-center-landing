import Section from "@/app/components/Section";
import AIImpactTabs from "@/app/components/AIImpactTabs";
import RotatingCircle from "@/app/components/RotatingCircle";
import React from "react";

const AiImpactSection = () => {


    return (
        <Section
            beforeContent={<>
                <RotatingCircle className="md:size-[690px] size-[120px] absolute md:-right-[400px] md:left-auto left-[70px] md:-top-[294px] -top-[110px]"/>
                <RotatingCircle className="md:size-[134px] size-[400px] absolute md:left-[230px] left-[170px] md:-bottom-[172px] -bottom-[286px]"/>
            </>}
            title={<>
                Узнайте как ИИ трансформирует <br className="xl:hidden block"/> ваш бизнес!
            </>}>
            <AIImpactTabs/>
        </Section>
    );
};

export default AiImpactSection;