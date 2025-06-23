import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Materials />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
