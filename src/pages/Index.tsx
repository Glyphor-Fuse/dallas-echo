import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LuMenu, LuArrowRight } from 'react-icons/lu';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';
import { SignatureEffect } from '@/components/effects/SignatureEffect';

// Custom styles for fonts and specific animations that are cleaner in CSS
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap');
    
    :root {
      --neon-primary: #b026ff;
      --neon-secondary: #00f0ff;
    }
    
    body {
      font-family: 'Space Grotesk', sans-serif;
      background-color: #030303;
      color: #ffffff;
      overflow-x: hidden;
    }
    
    h1, h2, h3, .display-font {
      font-family: 'Syne', sans-serif;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #030303;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}</style>
);

const Index = () => {
  return (
    <div className="antialiased bg-[#030303] text-white min-h-screen">
      <GlobalStyles />

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-bold tracking-tighter font-['Syne']">
          VELVET <span className="font-light opacity-70">VOID</span>
        </div>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest">
          <a href="#rooms" className="hover:text-purple-400 transition-colors">Rooms</a>
          <a href="#bar" className="hover:text-cyan-400 transition-colors">The Bar</a>
          <a href="#schedule" className="hover:text-pink-400 transition-colors">Schedule</a>
          <a href="#rsvp" className="border-b border-white hover:border-purple-400 pb-1">Book Table</a>
        </div>
        <div className="md:hidden">
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white ml-auto"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303] z-10 opacity-90"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <motion.img 
            src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2540&auto=format&fit=crop"
            alt="Nightclub Crowd"
            className="w-full h-full object-cover opacity-60"
            initial={{ scale: 1.1, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-20 text-center flex flex-col items-center">
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-cyan-400 mb-4 animate-pulse">
            Dallas / After Dark
          </p>
          <Reveal>
            <h1 className="text-[15vw] leading-[0.8] font-extrabold uppercase mix-blend-overlay opacity-90 tracking-tighter">
              Nocturne
            </h1>
          </Reveal>
          <h1 className="text-[15vw] leading-[0.8] font-extrabold uppercase text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-0.5rem)] pointer-events-none [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
            Nocturne
          </h1>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <p className="font-light text-white/80 max-w-md text-sm md:text-base leading-relaxed">
              An architectural marvel of sound and light. <br />Welcome to the apex of Dallas nightlife.
            </p>
            <div className="h-[1px] w-12 bg-white/30"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-50">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </header>

      {/* Intro Marquee */}
      <div className="bg-white text-black py-4 border-y border-white/10">
        <SignatureInteraction type="marquee">
          <span className="font-bold uppercase text-6xl md:text-8xl tracking-tighter mr-8">
            Hypnotic Rhythms — Immersive Visuals — Crafted Cocktails — 
          </span>
        </SignatureInteraction>
      </div>

      {/* The 5 Rooms */}
      <section id="rooms" className="py-32 px-4 md:px-12 relative">
        <div className="max-w-7xl mx-auto mb-20">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-purple-500">05</span> ROOMS
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-xl border-l-2 border-purple-500 pl-6">
              Five distinct dimensions of sound. One venue.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[700px]">
          {[ 
            {
              name: "The Void",
              desc: "Deep House & Techno.\nMinimalist design, maximum bass.",
              img: "https://images.unsplash.com/photo-1574391884720-385038f9024c?q=80&w=1287&auto=format&fit=crop",
              color: "bg-purple-500"
            },
            {
              name: "Neon Jungle",
              desc: "Reggaeton & Latin Hits.\nBotanical walls meets neon lights.",
              img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=1476&auto=format&fit=crop",
              color: "bg-cyan-500"
            },
            {
              name: "The Vault",
              desc: "Hip-Hop & R&B.\nGolden interiors, VIP booths only.",
              img: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1287&auto=format&fit=crop",
              color: "bg-pink-500"
            },
            {
              name: "Eclipse",
              desc: "Top 40 & EDM.\nMain stage energy, CO2 cannons.",
              img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1287&auto=format&fit=crop",
              color: "bg-white"
            },
            {
              name: "Red Room",
              desc: "Afro-Beats & Dancehall.\nIntimate, sultry, crimson lighting.",
              img: "https://images.unsplash.com/photo-1549411939-5561a498b3c9?q=80&w=1470&auto=format&fit=crop",
              color: "bg-red-600"
            }
          ].map((room, i) => (
            <div 
              key={i} 
              className="relative group flex-1 h-[400px] lg:h-full bg-cover bg-center overflow-hidden rounded-xl border border-white/10 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale hover:grayscale-0 hover:scale-[1.02] hover:z-10"
              style={{ backgroundImage: `url('${room.img}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-4xl font-bold display-font mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {room.name}
                </div>
                <div className={`h-[1px] w-full ${room.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mb-4`}></div>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-pre-line">
                  {room.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Central Bar Showcase */}
      <section id="bar" className="relative w-full py-40 flex items-center justify-center overflow-hidden">
        {/* Parallax BG */}
        <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
           <SignatureInteraction type="parallax">
             <img 
               src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2529&auto=format&fit=crop" 
               alt="Luxury Bar" 
               className="w-full h-full object-cover opacity-50"
             />
           </SignatureInteraction>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303] z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
             <div className="w-full h-[600px] relative">
               <div className="absolute inset-0 border border-white/20 rounded-full rotate-12"></div>
               <div className="absolute inset-0 border border-white/20 rounded-full -rotate-6"></div>
               <img 
                 src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop" 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-cover rounded-full shadow-2xl shadow-purple-900/40" 
                 alt="Cocktail Detail" 
               />
             </div>
          </div>
          
          <SignatureEffect effect="glass-panel" className="p-10 md:p-16 rounded-2xl shadow-[0_0_30px_rgba(176,38,255,0.15)]">
            <h3 className="text-cyan-400 tracking-widest uppercase text-sm mb-4">The Alchemy Lab</h3>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Liquid <br /><span className="italic font-serif text-purple-400">Artistry</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              An expansive 360° central bar serving as the venue's beating heart. Our mixologists craft avant-garde cocktails using rare spirits, smoke infusions, and molecular techniques.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="font-medium">Signature: Black Velvet Martini</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="font-medium">Rare Japanese Whiskey Collection</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span className="font-medium">Tableside Bottle Service</span>
              </li>
            </ul>
            <button className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
              View Menu
            </button>
          </SignatureEffect>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-32 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-6">
              <h2 className="text-5xl md:text-7xl font-bold">
                LIVE <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-transparent">SETS</span>
              </h2>
              <span className="text-sm uppercase tracking-widest text-gray-500">This Week</span>
            </div>
          </Reveal>

          <div className="space-y-4">
            {[ 
              {
                day: "THU",
                artist: "DJ KASSIA",
                genre: "Deep House / The Void",
                color: "purple"
              },
              {
                day: "FRI",
                artist: "SYNTHWAVE COLLECTIVE",
                genre: "Retro Future / Eclipse",
                color: "cyan"
              },
              {
                day: "SAT",
                artist: "MIDNIGHT PROTOCOL",
                genre: "Top 40 Remixes / All Rooms",
                color: "pink"
              }
            ].map((event, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`group relative flex flex-col md:flex-row md:items-center justify-between py-8 px-6 border-b border-white/10 hover:border-${event.color}-500/50 transition-colors duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${event.color}-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex gap-8 items-center">
                    <div className="text-4xl font-bold text-gray-600 group-hover:text-white transition-colors">{event.day}</div>
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-1">{event.artist}</h3>
                      <p className={`text-sm text-${event.color}-400 uppercase tracking-widest`}>{event.genre}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-4 md:mt-0">
                    <button className={`opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 px-6 py-2 border border-${event.color}-500 text-${event.color}-400 hover:bg-${event.color}-500 hover:text-white uppercase text-xs tracking-widest`}>
                      Get Tickets
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2">
            <h2 className="text-6xl font-bold tracking-tighter mb-6">VELVET VOID</h2>
            <p className="text-gray-400 max-w-sm font-light">
              2021 McKinney Ave,<br />Dallas, TX 75201<br /><br />
              <a href="mailto:vip@velvetvoid.com" className="hover:text-white transition-colors">vip@velvetvoid.com</a>
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Social</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Spotify</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Dress Code</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; 2024 Velvet Void Dallas.</p>
          <p>Design by Elite AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
