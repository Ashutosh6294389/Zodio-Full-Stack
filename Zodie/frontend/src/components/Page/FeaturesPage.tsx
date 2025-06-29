"use client"
import React from 'react';
import Navbar from '../ui/nav';
import { Features } from '../blocks/features-11';
import { FeaturesSectionWithHoverEffects } from '../blocks/feature-section-with-hover-effects';
import { RbacFeaturesPage } from '../blocks/RbacFeaturesPage';
import { Footerdemo } from "@/demo/fs"
import FeatureBentoGrid from '../blocks/FeatureBentoGrid';
import ZordieFeatures1 from '../ui/ZordieFeature1';
import { motion } from 'framer-motion';
import { HeroSection } from '../blocks/hero-section-2';
import { AgentShowcase } from '../blocks/AgentShowcase';
import { JobBoard } from '../blocks/JobBoard';
import { TeamCollaboration } from '../blocks/TeamCollaboration';
import { BonusFeatures } from '../blocks/BonusFeatures';
import { RecruitmentWorkflow } from '../blocks/RecruitmentWorkflow';
import { EmployeeReporting } from '../blocks/EmployeeReporting';
import { ProductivityAlerts } from '../blocks/ProductivityAlerts';
import HeroAgent from "@/components/blocks/heroAgentPHR"
import { Marquee } from "@/components/ui/marqueeText"
import { HeroParallaxDemo } from "@/demo/agentHeroDemo"
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import WhatsIncludedSection from "@/demo/WhatIncluded"
import dash from "@/components/blocks/Dashboard.png"
import prime from '@/images/prime.png'
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import { IntegrationsNetwork } from "@/components/blocks/IntegrationsNetwork";
import {RbacHero} from "@/components/blocks/RbacHero";
import {TeamsPage} from "@/components/blocks/TeamsPage";

export function FeaturesPage() {
  return (
    <div className="min-h-screen relative bg-[radial-gradient(120%_120%_at_50%_100%,rgba(253,186,116,0.8)_0%,white_85%)]">

      <Navbar></Navbar>
      {/* <HeroParallaxDemo></HeroParallaxDemo> */}
              <HeroAgent
                      heading="Meet Your AI Agents"
                      description="Prime is your AI-powered talent assessor. It benchmarks candidates across technical depth, cultural alignment, and potential—giving hiring teams a leaderboard of best-fit individuals through verified data and deep skill analysis."
                      image={prime}
                      item={{
                        label: "PrimeHR",
                        agents: [
                          { label: "Maxi", to: "/maxi", icon: <Bolt size={16} className="opacity-60" /> },
                          { label: "Nova", to: "/nova", icon: <CopyPlus size={16} className="opacity-60" /> },
                          { label: "Optimus", to: "/optimus", icon: <Layers2 size={16} className="opacity-60" /> },
                          { label: "Archie", to: "/archie", icon: <Files size={16} className="opacity-60" /> },
                          { label: "Onix", to: "/onix", icon: <Files size={16} className="opacity-60" /> },
                        ],
                      }}></HeroAgent>

      
      {/* Prime Agent Section - Moved to top as the main feature */}
      <AgentShowcase />

      {/* Hover Effects Section - Prime-specific features */}
      <FeaturesSectionWithHoverEffects />

      
      
      {/* Recruitment Workflow Section */}
      <RecruitmentWorkflow />
      
      
      {/* Employee Reporting Section */}
      <EmployeeReporting />
      
      {/* Bonus Features Section */}
      <BonusFeatures />
      
      
      
      {/* RBAC Features Section - Security features at the end */}
      <RbacHero></RbacHero>
      <RbacFeaturesPage></RbacFeaturesPage>
      <TeamsPage></TeamsPage>
      

      {/* Hero Section with Gradient Heading */}
      
      <Footerdemo></Footerdemo>
    </div>
  );
}