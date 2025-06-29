import { type ReactNode } from "react";
import { Component } from "../ui/dropdown";
import type { ItemProps } from "../ui/dropdown";
import { Button } from "../ui/button";
import { ContainerScroll } from "../ui/CS";
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import bgimg from '@/images/image6.png'



type HeroAgentProps = {
  item: ItemProps;
  heading: string;
  description: string;
  image: string;
};

  

export default function HeroAgent({ item, heading, description, image }: HeroAgentProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  // Animate scale and y position as you scroll
  const baseScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1])
  const scale = useTransform(baseScale, (s) => s * 1)
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  // Set your background image here
  const bgImg = bgimg; // or use a different image if needed
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 py-12 relative z-10">
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight mt-24">
            {heading} <span className="text-primary">{item.label}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="pt-4 mb-8">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold rounded-full"
          >
            Book a Demo
          </Button>
        </div>
        <div className="w-[900px] flex flex-col overflow-hidden min-h-screen" ref={ref}>
          <ContainerScroll>
            <motion.img
              src={image}
              alt="prime dashboard"
              className="mx-auto rounded-3xl object-cover h-full object-center"
              draggable={false}
              style={{ scale, y }}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}