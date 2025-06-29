"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../ui/nav';
import FooterDemo from '../ui/FooterDemo';
import { ArrowRight, Users, Globe, Shield, Zap, CheckCircle, Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { HeroSection } from "../blocks/hero-section-4"
import { Input } from "@/components/ui/input"
import { SocialIcon } from 'react-social-icons'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {CallToAction} from "@/components/blocks/CallToAction"


// Ocean Wave Component (Static version)
const OceanWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden z-0">
      {/* Multiple wave layers with static styling */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-r from-blue-400/30 via-cyan-500/30 to-blue-500/30 rounded-t-[100%]"
        style={{ filter: 'blur(8px)' }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[130px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-400/20 rounded-t-[100%]"
        style={{ filter: 'blur(10px)' }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-cyan-500/15 rounded-t-[100%]"
        style={{ filter: 'blur(12px)' }}
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="relative bg-[radial-gradient(120%_120%_at_50%_100%,rgba(253,186,116,0.8)_0%,white_85%)]">
      <Navbar />
      <HeroSection />
      <OurValues />
      <OurTeam />
      <JoinUs />
      <CallToAction />
      <Footerdemo />
    </div>
  );
};

const OurValues = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-[#3b82f6]" />,
      title: 'Customer First',
      description: 'We prioritize our customers\'s needs in everything we do, ensuring our solutions solve real problems.'
    },
    {
      icon: <Globe className="h-8 w-8 text-[#06b6d4]" />,
      title: 'Global Impact',
      description: 'We build products that make a positive difference for businesses and individuals around the world.'
    },
    {
      icon: <Shield className="h-8 w-8 text-[#10b981]" />,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of data protection and privacy in all our operations.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Continuous Innovation',
      description: 'We never stop improving, constantly seeking new ways to enhance our products and services.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[300px] w-full bg-gradient-to-b from-blue-200/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-blue-200/40 to-transparent blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            The principles that guide everything we do at Zodio, from product development to customer service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md border border-blue-100/30 rounded-[20px] p-6 relative overflow-hidden group shadow-lg"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <div className="relative z-10">
                <div className="bg-transparent backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md border border-blue-100/50">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurTeam = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/team/team1.jpg',
      bio: 'Former tech lead at a Fortune 500 company with 15+ years of experience in HR tech.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/team/team2.jpg',
      bio: 'AI researcher with multiple publications and 10+ years building enterprise software.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      image: '/team/team3.jpg',
      bio: 'Product leader who has launched HR solutions used by over 500 companies worldwide.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Design',
      image: '/team/team4.jpg',
      bio: 'Award-winning UX designer focused on creating intuitive enterprise experiences.'
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[300px] w-full bg-white to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-purple-200/30 to-transparent blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4 relative z-10">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">Meet the passionate experts building the future of HR management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md border border-blue-100/30 rounded-[20px] overflow-hidden group shadow-lg"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[300px] w-full bg-gradient-to-b from-purple-200/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-blue-200/30 to-transparent blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-black sm:text-4xl mb-4 relative inline-block"
          >
            Join Our Team
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8">We're always looking for talented individuals who share our passion for innovation and excellence.</p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-transparent backdrop-blur-md border border-blue-100/30 rounded-[20px] p-8 max-w-2xl mx-auto shadow-lg"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Open Positions</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-black">Senior Full Stack Developer</h4>
                  <p className="text-gray-700">Join our core team to build the future of HR management.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-black">UX/UI Designer</h4>
                  <p className="text-gray-700">Help us create beautiful, intuitive interfaces for our users.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-black">Product Manager</h4>
                  <p className="text-gray-700">Drive our product vision and roadmap to deliver exceptional value.</p>
                </div>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-2 px-4 rounded-[20px] flex items-center justify-center">
              View All Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      <OceanWaves />
    </section>
  );
};


function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-t-primary-400  text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Get the latest news and updates on AI-powered hiring
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm border-primary-200"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link to="/features" className="block transition-colors hover:text-primary">
                Features
              </Link>
              <Link to="/solutions" className="block transition-colors hover:text-primary">
                Solutions
              </Link>
              <Link to="/login" className="block transition-colors hover:text-primary">
                Login/Signup
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Located in Kanpur</p>
              <p>Uttar Pradesh, India</p>
              <p>Phone: +91 9044 173 100</p>
              <p>Email: snehal.23546@sscbs.du.ac.in</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                       <svg
                  xmlns="http://www.w3.org/2000/svg"
                   width='40%'
                height='50%'
                className="sm:w-24 w-full  text-black-500"
                fill="currentColor"
              viewBox="0 0 24 24"
               >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                         <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40%'
                height='50%'
                viewBox='0 0 70 62'
                fill='none'
                className='sm:w-24 w-full  text-black-500'
              >
                <path
                  d='M55.1291 0H65.8629L42.4127 26.2626L70 62H48.3994L31.481 40.3254L12.1226 62H1.38228L26.4646 33.9092L0 0H22.149L37.4417 19.8114L55.1291 0ZM51.3619 55.7046H57.3096L18.9172 5.96472H12.5347L51.3619 55.7046Z'
                  fill='currentColor'
                ></path>
              </svg>
                      <span className="sr-only">X</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                       <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40%'
                height='50%'
                viewBox='0 0 80 78'
                fill='none'
                className='sm:w-24 w-full text-black-500'
              >
                <path
                  d='M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z'
                  fill='currentColor'
                ></path>
              </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div> */}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-t-primary-400 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Zordie AI . All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/about" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default About;