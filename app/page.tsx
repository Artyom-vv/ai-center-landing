import Hero from "@/app/sections/Hero";
import TransformBusinessAi from "@/app/sections/TransformBusinessAi";
import AIImpact from "@/app/sections/AIImpactSection";
import StartAITTransformation from "@/app/sections/StartAITTransformation";

export default function Home() {
  return (
      <div className="wrapper overflow-x-hidden flex flex-col">
          <Hero/>
          <TransformBusinessAi/>
          <AIImpact/>
          <StartAITTransformation/>
      </div>
  );
}
