import Hero from "@/app/sections/Hero";
import TransformBusinessAi from "@/app/sections/TransformBusinessAi";

export default function Home() {
  return (
      <div className="wrapper overflow-x-hidden flex flex-col">
          <Hero/>
          <TransformBusinessAi/>
      </div>
  );
}
