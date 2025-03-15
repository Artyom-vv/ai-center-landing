import Section from "@/app/components/Section";
import AIImpactTabs from "@/app/components/AIImpactTabs";
import RotatingCircle from "@/app/components/RotatingCircle";
import React from "react";

const AiImpactSection = () => {


    return (
        <Section
            beforeContent={<>
                <RotatingCircle className="size-[690px] absolute -right-[400px] -top-[294px]"/>
                <RotatingCircle className="size-[134px] absolute left-[230px] -bottom-[172px]"/>
            </>}
            title="Узнайте как ИИ трансформирует ваш бизнес!">
            <AIImpactTabs/>
        </Section>
    );
};

export default AiImpactSection;