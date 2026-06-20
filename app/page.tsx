import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GallerySection } from "@/components/gallery-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <div id="top"><HeroSection /></div>
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <TechnologiesSection />
      <HowItWorksSection />
      <GallerySection />
      <TeamSection />
      <Footer />
    </main>
  )
}
