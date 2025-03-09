import Hero from "@/app/sections/Hero";
import TransformBusinessAi from "@/app/sections/TransformBusinessAi";
import AIImpact from "@/app/sections/AIImpactSection";
import StartAITTransformation from "@/app/sections/StartAITTransformation";
import CustomSolutions from "@/app/sections/CustomSolutions";
import PopularSolutions from "@/app/sections/PopularSolutions";
import AIAdvantage from "@/app/sections/AIAdvantage";
import CustomAndUniqueSolutions from "@/app/sections/CustomAndUniqueSolutions";
import AIIntegrationInfo from "@/app/sections/AIIntegrationInfo";
import BusinessSteps from "@/app/sections/BusinessSteps";

export default function Home() {
  return (
      <div className="wrapper overflow-x-hidden flex flex-col">
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
      </div>
  );
}
