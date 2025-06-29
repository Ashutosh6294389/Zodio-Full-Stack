import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Mail, X, Sparkles, Clock, Users, Shield, Zap, Star, Cpu } from 'lucide-react';
import Navbar from '../ui/nav';
import FooterDemo from '../ui/FooterDemo';
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

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

const PreAccess = () => {
  return (
    <>
      <Navbar />
      <PreAccessLanding />
      <FooterDemo />
    </>
  );
};

const PreAccessLanding = () => {
  // State for email form
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  // State for countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  // State for active feature tab
  const [activeTab, setActiveTab] = useState('ai');

  // Update countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else if (timeLeft.days > 0) {
        setTimeLeft({ ...timeLeft, days: timeLeft.days - 1, hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle email submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
      setIsSubmitting(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Header/Hero section - blue and white gradient */}
        <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-gradient-to-b from-blue-200/40 to-white blur-3xl"></div>
        {/* Body section - green/purple/white gradient */}
        <div className="absolute top-[500px] left-0 right-0 h-[800px] w-full bg-gradient-to-b from-green-100/30 via-purple-100/30 to-white/80 blur-3xl"></div>
        {/* End section - blue gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] w-full bg-gradient-to-t from-blue-200/40 to-white/80 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Futuristic elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-blue-500/20 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-blue-500/10 animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Ocean Waves Animation */}
        <OceanWaves />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/40 px-3 py-1 text-sm text-black backdrop-blur-md shadow-lg"
          >
            <Sparkles className="mr-2 h-4 w-4 animate-pulse text-blue-600" />
            <span>Limited Early Access Program</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl relative z-10"
          >
            Experience the Future of <br />
            <motion.span 
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 bg-clip-text text-transparent bg-[length:200%_auto] relative"
            >
              HR Management
              <motion.span 
                className="absolute -inset-1 rounded-lg opacity-30 blur-xl bg-gradient-to-r from-blue-200 to-blue-400"
                animate={{ opacity: [0.1, 0.1, 0.1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-gray-700 px-0 py-0 bg-transparent border-0 shadow-none rounded-none backdrop-blur-none"
          >
            Join our exclusive early access program and be among the first to transform your HR operations with our AI-powered platform.
          </motion.p>

          {/* Countdown timer */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 text-xl font-medium text-black flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative mr-3"
              >
                <Clock className="h-6 w-6 text-blue-600" />
                <div className="absolute inset-0 rounded-full border border-blue-600/50 animate-ping"></div>
              </motion.div>
              Launching in
            </motion.h2>
            
            <div className="flex justify-center space-x-4 sm:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center rounded-[20px] bg-transparent border border-blue-100/30 p-3 backdrop-blur-lg sm:p-4 relative overflow-hidden group shadow-lg"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-blue-600/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.span 
                    key={value}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl relative z-10"
                  >
                    {value}
                  </motion.span>
                  <span className="text-xs text-gray-700 sm:text-sm uppercase tracking-wider">{unit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Email signup form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto w-full max-w-md"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative"
                >
                  <div
                    className="flex relative group/form"
                  >
                    {/* Glassmorphic card with blue glow and multi-color gradient hover */}
                    <div
                      className="relative flex w-full rounded-[20px] border-2 border-blue-400/70 bg-white/40 backdrop-blur-md shadow-xl transition-all duration-300 overflow-hidden group-hover/form:ring-2 group-hover/form:ring-blue-400 group-hover/form:shadow-2xl"
                      style={{
                        boxShadow: '0 0 0 3px rgba(59,130,246,0.25), 0 8px 32px 0 rgba(31,38,135,0.10)',
                      }}
                    >
                      {/* Animated multi-color gradient overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="pointer-events-none absolute inset-0 z-10 rounded-[20px] opacity-0 group-hover/form:opacity-100"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,140,0,0.10) 0%, rgba(255,255,255,0.10) 25%, rgba(168,85,247,0.10) 50%, rgba(59,130,246,0.10) 75%, rgba(34,211,238,0.10) 100%)',
                          transition: 'opacity 0.4s',
                        }}
                      />
                      <input
                        ref={emailRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full rounded-l-[20px] border-none bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm z-20"
                        disabled={isSubmitting}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-r-[20px] bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-3 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 relative overflow-hidden z-20 flex items-center justify-center"
                      >
                        {/* Animated orange arrow */}
                        {isSubmitting ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                            className="flex items-center"
                          >
                            <ArrowRight className="h-5 w-5 text-orange-200 drop-shadow-[0_0_4px_rgba(255,140,0,0.7)]" />
                          </motion.span>
                        )}
                      </button>
                    </div>
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500"
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[20px] bg-transparent border border-blue-100/30 p-6 text-center backdrop-blur-sm shadow-lg relative overflow-hidden"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500/30 to-green-600/30 border border-green-500/50 relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-green-400/50 blur-sm"
                      />
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-black">Thank you for joining!</h3>
                    <p className="mb-6 text-gray-700">We'll notify you when early access is available.</p>
                    <motion.button
                      onClick={resetForm}
                      className="inline-flex items-center rounded-[20px] border border-blue-100/30 bg-transparent px-4 py-2 text-sm font-medium text-blue-600 backdrop-blur-sm"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Features section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold text-black relative inline-block"
          >
            <span className="relative z-10">What You'll Get Early Access To</span>
          </motion.h2>

          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-[20px] bg-transparent p-1 backdrop-blur-sm border border-blue-100/30 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-blue-600/0 animate-pulse"></div>
              {[
                { id: 'ai', label: 'AI Assistants', icon: <Cpu className="h-4 w-4 mr-1" /> },
                { id: 'analytics', label: 'Advanced Analytics', icon: <Zap className="h-4 w-4 mr-1" /> },
                { id: 'automation', label: 'Workflow Automation', icon: <Star className="h-4 w-4 mr-1" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "rounded-[20px] px-4 py-2 text-sm font-medium flex items-center relative overflow-hidden",
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'text-blue-600'
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    {tab.icon}
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="wait">
              {activeTab === 'ai' && (
                <div
                  key="ai"
                  className="rounded-[20px] border border-blue-100/30 bg-transparent p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5"></div>
                  <div className="absolute -inset-1/2 top-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <h3 className="mb-4 text-xl font-medium text-blue-600 flex items-center">
                    <Cpu className="h-5 w-5 mr-2 text-blue-600" />
                    <span>AI-Powered HR Assistants</span>
                  </h3>
                  <p className="mb-4 text-gray-700 backdrop-blur-sm bg-transparent p-3 rounded-[20px] border border-blue-100/30">
                    Our intelligent AI assistants handle routine HR tasks, answer employee questions, and provide personalized recommendations.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Automated employee onboarding',
                      'Instant policy guidance',
                      'Personalized learning recommendations',
                      'Performance review assistance'
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-700 p-2 rounded-md bg-transparent"
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 mr-3 border border-green-500/30">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

            {activeTab === 'analytics' && (
              <div
                key="analytics"
                className="rounded-[20px] border border-blue-100/30 bg-transparent p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5"></div>
                <div className="absolute -inset-1/2 top-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <h3 className="mb-4 text-xl font-medium text-blue-600 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Advanced Analytics Dashboard</span>
                </h3>
                <p className="mb-4 text-gray-700 backdrop-blur-sm bg-transparent p-3 rounded-[20px] border border-blue-100/30">
                  Gain deep insights into your workforce with our comprehensive analytics platform.
                </p>
                <ul className="space-y-2">
                  {[
                    'Real-time performance metrics',
                    'Predictive retention analysis',
                    'Talent gap identification',
                    'Customizable reporting tools'
                  ].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-700 p-2 rounded-md bg-transparent"
                    >
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 mr-3 border border-green-500/30">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'automation' && (
              <div
                key="automation"
                className="rounded-[20px] border border-blue-100/30 bg-transparent p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5"></div>
                <div className="absolute -inset-1/2 top-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <h3 className="mb-4 text-xl font-medium text-blue-600 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Workflow Automation</span>
                </h3>
                <p className="mb-4 text-gray-700 backdrop-blur-sm bg-transparent p-3 rounded-[20px] border border-blue-100/30">
                  Streamline your HR processes with intelligent automation that saves time and reduces errors.
                </p>
                <ul className="space-y-2">
                  {[
                    'Document processing and approval',
                    'Employee lifecycle management',
                    'Time-off request handling',
                    'Compliance monitoring'
                  ].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-700 p-2 rounded-md bg-transparent"
                    >
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 mr-3 border border-green-500/30">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

              <div
              className="relative flex items-center justify-center overflow-hidden rounded-[20px] border border-blue-100/30 bg-white/10 backdrop-blur-md shadow-lg group"
            >
              {/* Glassmorphism & gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 z-0" />
              <div className="absolute -inset-1/2 top-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0" />
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl animate-pulse z-0"></div>
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl animate-pulse z-0"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/5 to-blue-600/0 z-0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative z-10 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30 relative group">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-400/30 blur-sm"
                  />
                  {activeTab === 'ai' && <Sparkles className="h-8 w-8 text-blue-400" />}
                  {activeTab === 'analytics' && <Users className="h-8 w-8 text-blue-400" />}
                  {activeTab === 'automation' && <Shield className="h-8 w-8 text-blue-400" />}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-blue-600 relative">
                  <span className="relative z-10">
                    {activeTab === 'ai' && 'Exclusive Beta Features'}
                    {activeTab === 'analytics' && 'Premium Insights'}
                    {activeTab === 'automation' && 'Priority Support'}
                  </span>
                </h3>
                <p className="mb-6 text-gray-700 backdrop-blur-sm bg-transparent p-3 rounded-[20px] border border-blue-100/30">
                  {activeTab === 'ai' && 'Early access members will be the first to try our newest AI capabilities before they\'re available to the public.'}
                  {activeTab === 'analytics' && 'Get access to our advanced analytics suite with personalized insights tailored to your organization.'}
                  {activeTab === 'automation' && 'Receive dedicated support and implementation assistance from our expert team.'}
                </p>
                <div>
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 text-white relative overflow-hidden group">
                    <a href="/features" className="relative z-10">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      />
                      <span className="relative z-10">Learn more</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            </AnimatePresence>
          </div>
        </div>

        {/* FAQ section */}
        <div
          className="mb-20"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-600 relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <motion.span 
              className="absolute -inset-1 rounded-lg opacity-30 blur-xl bg-gradient-to-r from-blue-400 to-blue-600"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                question: 'When will early access be available?',
                answer: 'Early access will begin rolling out in phases starting in 30 days. Those who sign up first will receive priority access.'
              },
              {
                question: 'Is there a cost for early access?',
                answer: 'Early access members will receive special pricing and benefits not available during the public launch.'
              },
              {
                question: 'What kind of support is provided?',
                answer: 'Early access members receive priority support from our dedicated team, including implementation assistance and training.'
              },
              {
                question: 'Can I request specific features?',
                answer: 'Yes! Early access members have direct input into our product roadmap and can request features that address their specific needs.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[20px] border border-blue-100/30 bg-transparent p-6 backdrop-blur-sm relative overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5"></div>
                <div className="absolute -inset-1/2 top-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-10 blur-xl"></div>
                <h3 className="mb-3 text-lg font-medium text-blue-600 relative z-10">{faq.question}</h3>
                <p className="text-gray-700 backdrop-blur-sm bg-transparent p-3 rounded-[20px] border border-blue-100/30 relative z-10">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="mb-20 rounded-[20px] border border-blue-100/30 bg-white/60 p-8 text-center backdrop-blur-md relative overflow-hidden shadow-lg"
        >
          {/* Removed animated blue overlays and gradients for a clean glass look */}
          <h2 className="mb-4 text-3xl font-bold text-blue-600 relative">
            <span className="relative z-10">Ready to Transform Your HR?</span>
          </h2>
          <p className="mb-6 text-lg text-gray-700 backdrop-blur-sm bg-white/60 p-3 rounded-[20px] border border-blue-100/30 inline-block">Join our early access program today and be at the forefront of HR innovation.</p>
          <div>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden group rounded-[20px]">
              <a href="#top" className="inline-flex items-center">
                <span className="relative z-10 flex items-center">
                  <span>Secure Your Spot</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreAccess;