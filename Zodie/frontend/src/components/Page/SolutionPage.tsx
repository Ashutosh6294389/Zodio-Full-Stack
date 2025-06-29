"use client"
import Navbar from "../ui/nav"
import { Footerdemo } from "@/demo/fs"
import Flow from "../blocks/Flow"
import AIBenefitsLanding from "../blocks/AiBenefits"
import { AnimatedTestimonialsWithParticles } from "../blocks/Testo"
import { FaqDemo } from "@/demo/faqdemo"
import ZordieFeatures from "../ui/ZordieFeatures"
import { HeroSection } from "../blocks/hero-section-3"
import {SolutionCardsSection} from "../blocks/SolutionCardsSection"
import {ResultsSection} from "../blocks/ResultsSection"
import {SolutionsImpactSection} from "../blocks/SolutionsImpactSection"
import {ImpactSection} from "../blocks/ImpactSection-2"

export function SolutionPage () {
  return (
    <div className="relative bg-[radial-gradient(120%_120%_at_50%_100%,rgba(253,186,116,0.8)_0%,white_85%)]">
      <HeroSection />
      <Navbar />
      <SolutionCardsSection />
      <ResultsSection />
      <SolutionsImpactSection />
      <ImpactSection />
      <Footerdemo />
    </div>
  )
}