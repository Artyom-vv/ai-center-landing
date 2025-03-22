import Hero from "@/app/sections/Hero";
import TransformBusinessAi from "@/app/sections/TransformBusinessAi";
import AIImpact from "@/app/sections/AIImpactSection";
import StartAITTransformation from "@/app/sections/StartAiTransformation";
import CustomSolutions from "@/app/sections/CustomSolutions";
import PopularSolutions from "@/app/sections/PopularSolutions";
import AIAdvantage from "@/app/sections/AIAdvantage";
import CustomAndUniqueSolutions from "@/app/sections/CustomAndUniqueSolutions";
import AIIntegrationInfo from "@/app/sections/AIIntegrationInfo";
import BusinessSteps from "@/app/sections/BusinessSteps";
import PricingPlans from "@/app/sections/PricingPlans";
import FreeDemo from "@/app/sections/FreeDemo";
import Footer from "@/app/sections/Footer";
import React from "react";
import ClientLogic from "@/app/components/ClientLogic";
import RequestModal, {RequestModalProvider} from "@/app/components/RequestModal";

export default function Home() {
    return (
        <RequestModalProvider>
            <div className="wrapper overflow-x-hidden flex flex-col">
                <RequestModal/>
                <ClientLogic/>
                <Hero/>
                <TransformBusinessAi/>
                <AIImpact/>
                <StartAITTransformation/>
                <CustomSolutions/>
                <PopularSolutions/>
                <AIAdvantage/>
                <CustomAndUniqueSolutions/>
                <AIIntegrationInfo/>
                <BusinessSteps/>
                <PricingPlans/>
                <FreeDemo/>
                <Footer/>
            </div>
        </RequestModalProvider>
    );
}
