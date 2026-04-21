/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Building2, 
  Home, 
  PencilRuler, 
  ChevronRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  Star
} from "lucide-react";
import { useState, useRef } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Interior Design",
    description: "Creating spaces that reflect your personality while maximizing functionality and aesthetic appeal.",
    icon: <Home className="w-10 h-10" />,
    image: "https://picsum.photos/seed/interior1/800/600"
  },
  {
    title: "Modern Architecture",
    description: "Innovative structural designs that push boundaries and blend seamlessy with the environment.",
    icon: <Building2 className="w-10 h-10" />,
    image: "https://picsum.photos/seed/arch1/800/600"
  },
  {
    title: "Project Management",
    description: "Expert oversight from conception to completion, ensuring quality, budget, and timelines are met.",
    icon: <PencilRuler className="w-10 h-10" />,
    image: "https://picsum.photos/seed/pm1/800/600"
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    category: "Interior Design",
    image: "https://picsum.photos/seed/project1/1200/800"
  },
  {
    id: 2,
    title: "Coastal Modern Villa",
    category: "Architecture",
    image: "https://picsum.photos/seed/project2/1200/800"
  },
  {
    id: 3,
    title: "Urban Loft Renovation",
    category: "Construction",
    image: "https://picsum.photos/seed/project3/1200/800"
  }
];

const TESTIMONIALS = [
  {
    name: "Mary Wangui",
    role: "Homeowner",
    comment: "The team transformed our outdated living space into a modern sanctuary. Their attention to detail is unmatched.",
    stars: 5
  },
  {
    name: "Marcus Makau",
    role: "Property Developer",
    comment: "Professional, efficient, and creative. They managed our large-scale construction project with absolute precision.",
    stars: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-subtle">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border border-brand-black flex items-center justify-center">
              <span className="text-brand-black font-serif text-xl font-light">V</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-tighter uppercase">Wangarayy<span className="font-light text-brand-gold">+</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-semibold hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="border border-brand-black text-brand-black px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-brand-cream transition-all duration-500">
              Inquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-cream border-t border-subtle"
          >
            <div className="flex flex-col p-10 gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-light italic"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-black text-brand-cream w-full py-4 text-xs uppercase tracking-[0.3em] font-bold">
                Inquire
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen overflow-hidden flex flex-col md:flex-row" ref={heroRef}>
        {/* Left Sidebar Decorative */}
        <div className="hidden lg:flex w-24 h-full border-r border-subtle flex-col items-center justify-between py-12 bg-white/20 z-20 pt-24 text-black/40">
           <div className="writing-vertical text-[10px] uppercase tracking-ultra font-bold">EST. 2008</div>
           <div className="writing-vertical text-[10px] uppercase tracking-ultra italic font-serif opacity-50">Modern Architecture</div>
           <div className="writing-vertical text-[10px] uppercase tracking-ultra font-bold">Nairobi / KE</div>
        </div>

        <div className="flex-1 relative flex flex-col justify-center items-start text-left px-10 md:px-20 pt-20">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://picsum.photos/seed/luxury/1920/1080" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-cream/10 md:bg-brand-cream/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="accent-line" />
               <span className="text-brand-gold uppercase tracking-[0.4em] font-bold text-[11px]">Excellence in Construction</span>
            </div>
            
            <h1 className="text-7xl md:text-[120px] text-brand-black font-light leading-[0.85] mb-12 tracking-tight">
              Building <br />
              <span className="italic">THE FUTURE</span> <br />
              From Within.
            </h1>
            
            <p className="text-lg md:text-xl text-brand-black/60 max-w-md mb-12 font-light leading-relaxed">
              We blend structural integrity with bespoke interior aesthetics. Delivering spaces that define luxury and durability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <button className="px-10 py-5 bg-brand-black text-brand-cream text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all duration-500">
                View Portfolio
              </button>
              <div className="flex flex-col border-l border-brand-black/20 pl-6">
                <span className="text-[10px] uppercase tracking-ultra text-brand-black/40 font-bold mb-1">Latest Project</span>
                <span className="text-xs font-semibold tracking-wide">The Emerald Heights</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Scroll indicator */}
        <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-black/30 font-bold">Scroll for depth</span>
          <div className="accent-line" />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-xs mb-6 block">Services</span>
            <h2 className="text-5xl md:text-7xl font-light leading-[1.1] text-brand-black tracking-tight">
              Crafting <span className="italic font-normal">Atmosphere</span> <br />
              With Precision.
            </h2>
          </div>
          <p className="max-w-xs text-brand-black/50 text-sm leading-relaxed font-light mt-4">
            Our multidisciplinary approach ensures that every detail is curated, from structural blueprints to the finest interior finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-subtle">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-12 flex flex-col h-full ${idx < SERVICES.length - 1 ? 'border-b md:border-b-0 md:border-r border-subtle' : ''}`}
            >
              <div className="text-brand-gold mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-3xl font-light mb-6 tracking-tight italic">{service.title}</h3>
              <p className="text-brand-black/50 mb-10 text-sm leading-relaxed font-light">
                {service.description}
              </p>
              <div className="mt-auto">
                <div className="overflow-hidden mb-8 aspect-[16/9]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="px-0 py-2 border-b border-brand-black/10 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:border-brand-black transition-all">
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats - Now more integrated and minimal */}
      <section className="bg-white border-y border-subtle py-24 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Construction", value: "250+" },
            { label: "Design Awards", value: "12" },
            { label: "Experience", value: "15Y" },
            { label: "Partners", value: "180+" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center border-subtle last:border-0">
              <div className="text-5xl font-serif text-brand-black font-extralight mb-3 italic">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid - Now minimal cards */}
      <section id="projects" className="py-32 px-10 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
               <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Archive</span>
               <h2 className="text-5xl md:text-7xl font-light tracking-tight">SELECTED PROJECT.</h2>
            </div>
            <p className="text-[10px] uppercase tracking-ultra font-bold hidden md:block border-b border-brand-black pb-2">01 — 12</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-subtle bg-white">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`group relative p-10 border-subtle border-b lg:border-b-0 ${idx < PROJECTS.length - 1 ? 'lg:border-r' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-2 block">{project.category}</span>
                   <h3 className="text-2xl font-light font-serif tracking-tight italic">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <button className="px-16 py-6 border border-brand-black text-brand-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-black hover:text-brand-cream transition-all duration-700">
              Explore All Works
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Minimalist focus */}
      <section id="about" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-1 writing-vertical hidden lg:flex items-center justify-center text-[10px] uppercase tracking-[0.8em] font-bold text-brand-black/20">
            AESTHETIC & STRUCUTRE
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-brand-black/5 relative overflow-hidden group border border-subtle">
              <img 
                src="https://picsum.photos/seed/office/800/1000" 
                alt="Our Design Studio"
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#EAE8E4] border border-subtle p-8 flex flex-col justify-center gap-2">
                 <span className="text-xl font-serif italic text-brand-gold">15</span>
                 <span className="text-[9px] uppercase tracking-widest font-bold text-brand-black/40">Years</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-xs mb-6 block">Our Ethos</span>
            <h2 className="text-5xl md:text-6xl font-light mb-12 leading-[1.1] tracking-tight">
              Honoring <br />
              <span className="italic text-brand-gold">THE CRAFT.</span>
            </h2>
            <div className="space-y-8 text-brand-black/60 text-sm leading-relaxed font-light mb-12">
              <p>
                Founded on the principles of minimalist innovation and structural elegance, Wangarayy Constructions defines the contemporary architectural scene. We believe that a space should not just be built, but distilled to its purest form.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  "Raw Materiality",
                  "Structural Purity",
                  "Precise Execution",
                  "Bespoke Detail"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-4 text-brand-black font-semibold uppercase tracking-[0.2em] text-[10px]">
                    <div className="w-1 h-1 bg-brand-gold rounded-full" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <button className="border-b border-brand-black py-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-brand-gold hover:border-brand-gold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean & Minimal */}
      <section id="contact" className="py-32 px-10 bg-white border-t border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-xs mb-6 block">Inquiry</span>
              <h2 className="text-5xl md:text-7xl font-light mb-10 tracking-tight leading-[1] italic">
                Let's discuss <br />your next space.
              </h2>
              <p className="text-brand-black/40 mb-12 max-w-md text-sm leading-relaxed font-light">
                Our studio is ready to translate your requirements into a refined structural reality.
              </p>

              <div className="space-y-12">
                 <div className="group border-l border-brand-black/10 pl-8 hover:border-brand-gold transition-colors">
                    <p className="text-[10px] text-brand-gold uppercase tracking-[0.4em] font-bold mb-2">Social / Info</p>
                    <p className="text-2xl font-serif font-light italic">@Wangarayy.constructions</p>
                 </div>
                 <div className="group border-l border-brand-black/10 pl-8 hover:border-brand-gold transition-colors">
                    <p className="text-[10px] text-brand-gold uppercase tracking-[0.4em] font-bold mb-2">Nairobi / KE</p>
                    <p className="text-2xl font-serif font-light italic">Ruiru HQ</p>
                 </div>
              </div>
            </div>

            <div className="bg-brand-cream/50 p-12 md:p-16 border border-subtle">
              <div className="grid grid-cols-1 gap-10 mb-12">
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black/40 mb-3 block">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-black/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="John Doe" />
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black/40 mb-3 block">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-brand-black/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="john@studio.com" />
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black/40 mb-3 block">Message</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-brand-black/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light resize-none" placeholder="Brief project description..."></textarea>
                </div>
              </div>
              <button className="w-full bg-brand-black text-brand-cream py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-gold transition-all duration-700">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-brand-black pt-32 pb-16 px-10 border-t border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 border-b border-subtle pb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 border border-brand-black flex items-center justify-center">
                  <span className="text-brand-black font-serif text-lg font-light">V</span>
                </div>
                <span className="text-lg font-serif font-bold tracking-tighter uppercase">ShelterVibe<span className="font-light text-brand-gold">+</span></span>
              </div>
              <p className="text-brand-black/40 leading-relaxed text-sm font-light max-w-sm">
                A collaborative synthesis of Architecture & Interior Design. Focused on raw materiality and structural innovation since 2024.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-10">Company</h4>
              <ul className="space-y-6">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-brand-black/60 hover:text-brand-black transition-colors text-xs uppercase tracking-widest font-medium">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-10">Legal</h4>
              <ul className="space-y-6 text-brand-black/60 text-xs uppercase tracking-widest font-medium">
                <li className="hover:text-brand-black cursor-pointer transition-colors">Privacy / Cookies</li>
                <li className="hover:text-brand-black cursor-pointer transition-colors">Terms of Use</li>
                <li className="hover:text-brand-black cursor-pointer transition-colors">Safety Standard</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
               <div className="accent-line" />
               <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-black/30">
                 © 2026 Wangarayy Group / Construction & Interiors
               </p>
            </div>
            <div className="flex gap-10 text-[9px] uppercase tracking-[0.4em] font-bold text-brand-black/30 italic">
               <span>Studio.</span>
               <span>Lab.</span>
               <span>Build.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
