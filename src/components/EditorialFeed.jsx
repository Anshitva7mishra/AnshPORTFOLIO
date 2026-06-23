import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Highlighter from './Highlighter';

export default function EditorialFeed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const forecastItems = [
    { label: "MERN STACK", value: "95%" },
    { label: "JAVA", value: "92%" },
    { label: "AI TOOLS", value: "94%" },
    { label: "SYSTEM DESIGN", value: "86%" },
    { label: "POSTGRESQL", value: "88%" },
    { label: "CLOUD & DEPLOYMENT", value: "82%" },
    { label: "STARTING PROJECTS", value: "100%" },
    { label: "FINISHING THEM", value: "UNDER REVIEW", isSpecial: true }
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-6">
        {/* Skeleton Front Page Story */}
        <div className="lg:col-span-2 flex flex-col justify-between animate-pulse">
          <div>
            <div className="border-b border-border-custom pb-1 mb-2">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                FRONT PAGE REPORTING [PENDING]
              </span>
            </div>
            
            {/* Block Headline */}
            <div className="space-y-2 mb-4">
              <div className="h-9 bg-ink/30 w-full rounded-none"></div>
              <div className="h-9 bg-ink/30 w-4/5 rounded-none"></div>
            </div>

            {/* Block Subhead */}
            <div className="h-5 bg-ink/20 w-11/12 mb-6 rounded-none"></div>

            <div className="border-b border-border-custom pb-2 mb-6 flex justify-between">
              <div className="h-3 bg-ink/15 w-24 rounded-none"></div>
              <div className="h-3 bg-ink/15 w-20 rounded-none"></div>
            </div>

            {/* Photo Skeleton Block */}
            <div className="border border-ink p-1 bg-paper mb-6">
              <div className="w-full h-64 border border-dashed border-ink/35 bg-ink/10 flex flex-col items-center justify-center p-4">
                <span className="font-mono text-[10px] text-ink/40 font-bold uppercase tracking-wider">
                  ENGRAVING PLATE PROCESSING
                </span>
                <span className="font-mono text-[8px] text-ink/30 mt-1">
                  [1536px x 776px halftone screen]
                </span>
              </div>
            </div>

            {/* Body Text Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <div className="h-3 bg-ink/20 w-full rounded-none"></div>
                <div className="h-3 bg-ink/20 w-11/12 rounded-none"></div>
                <div className="h-3 bg-ink/20 w-full rounded-none"></div>
                <div className="h-3 bg-ink/20 w-5/6 rounded-none"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-ink/20 w-full rounded-none"></div>
                <div className="h-3 bg-ink/20 w-full rounded-none"></div>
                <div className="h-3 bg-ink/20 w-3/4 rounded-none"></div>
                <div className="h-3 bg-ink/20 w-11/12 rounded-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Sidebar */}
        <aside className="lg:col-span-1 flex flex-col border-t lg:border-t-0 lg:border-l border-border-custom pt-6 lg:pt-0 lg:pl-6 gap-6">
          
          {/* POI Skeleton */}
          <div className="flex flex-col animate-pulse">
            <div className="border-b border-border-custom pb-1 mb-2">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                PROFILE RECORD
              </span>
            </div>
            <div className="h-6 bg-ink/30 w-3/4 mb-4 rounded-none"></div>
            
            <div className="border border-ink p-1 bg-paper mb-4">
              <div className="w-full h-48 border border-dashed border-ink/35 bg-ink/10 flex items-center justify-center">
                <span className="font-mono text-[9px] text-ink/40 font-bold uppercase tracking-wider">
                  SUBJECT IDENTIFICATION PLATE
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-ink/20 w-full rounded-none"></div>
              <div className="h-3 bg-ink/20 w-11/12 rounded-none"></div>
            </div>
          </div>

          <div className="section-divider-thin" />

          {/* Forecast Skeleton */}
          <div className="flex flex-col animate-pulse">
            <div className="border-b border-border-custom pb-1 mb-2">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                METEOROLOGICAL
              </span>
            </div>
            <div className="h-6 bg-ink/30 w-1/2 mb-4 rounded-none"></div>
            <div className="space-y-3 py-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-3 bg-ink/20 w-24 rounded-none"></div>
                  <div className="h-3 bg-ink/20 w-8 rounded-none"></div>
                </div>
              ))}
            </div>
          </div>

        </aside>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-6">
      
      {/* SECTION 4: FRONT PAGE STORY */}
      <motion.article 
        id="front-page"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 flex flex-col justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              FRONT PAGE EXCLUSIVE
            </span>
          </div>

          <h2 className="font-headline font-black text-3xl md:text-5xl text-ink leading-tight uppercase tracking-tight mb-4">
            LOCAL ENGINEER STARTS ANOTHER PROJECT, CLAIMS THIS ONE IS DIFFERENT
          </h2>

          <h3 className="font-body text-base md:text-lg text-gray-700 leading-normal italic mb-6">
            Sources confirm the developer has launched multiple products including ProjectUI, Norexo, JVMHub, and several other experiments that continue to consume weekends.
          </h3>

          <div className="border-b border-border-custom pb-2 mb-6 font-mono text-[10px] text-gray-500 uppercase flex justify-between">
            <span>BY SPECIAL CORRESPONDENT</span>
            <span>MATHURA, INDIA</span>
          </div>

          {/* Reserved Image Area for Front Page */}
          <div className="border border-ink p-1 bg-paper mb-6">
            <div className="w-full overflow-hidden border border-border-custom/50 flex items-center justify-center bg-ink/5">
              <img 
                src={`${import.meta.env.BASE_URL}assets/developer_working.png`} 
                alt="Photographic reconstruction of the subject's environment" 
                className="w-full h-auto object-contain filter grayscale contrast-125 brightness-95" 
              />
            </div>
            <div className="font-mono text-[10px] text-gray-600 border-t border-border-custom/30 pt-1.5 px-1 mt-1">
              Fig 1: Photographic evidence showing elevated caffeine presence, dual-monitors displaying telemetry, and a mechanical keyboard.
            </div>
          </div>

          {/* Story Body in 2 Columns on Desktop */}
          <div className="newspaper-cols-2 text-sm leading-relaxed text-ink space-y-4">
            <p className="drop-cap font-body">
              A local B.Tech Computer Science student has once again embarked on a fresh side project, confidently reassuring close associates that this execution will depart from his historically lengthy catalog of unfinished code repositories.
            </p>
            <p className="font-body">
              The developer, identified as Anshitva Mishra, reportedly made the statement while open-sourcing yet another repository. "This one is built on a clean architecture from the start," Mishra was overheard telling an empty room. "The boilerplate is minimal, and the potential is unlimited."
            </p>
            <p className="font-body">
              However, database investigators remain skeptical. Historical records suggest a repeating cycle: an initial burst of enthusiasm, followed by deep dives into configuration, and ultimately, the lure of yet another new framework.
            </p>
            <p className="font-body">
              Despite this, authorities observed a remarkable series of actual working deployments, which friends claim is a statistical anomaly. Critics remain concerned, but active servers confirm the developer continues compilation efforts.
            </p>
            <p className="font-body">
              When pressed on his technical loyalties, the developer issued a formal clarification to the press: "Let the official record show that my backend architecture is absolutely top-notch. It is not that I dislike server-side engineering. But the User Interface... <Highlighter>UI is my true love.</Highlighter>"
            </p>
            <p className="font-body">
              Sources close to the investigation indicate this obsession stems from a growing industry crisis: the proliferation of AI-generated frontends. As automated coding assistants began churning out user interfaces at scale, independent analysts noted a disturbing trend—the web was rapidly devolving into a sea of identical, soulless templates lacking any human craftsmanship.
            </p>
            <p className="font-body">
              "Ever since AI started writing frontend code, everyone's UI has become incredibly bland and completely uniform," Mishra was quoted saying during a late-night debugging session. "It generates functional but entirely robotic designs. If the entire internet is going to look like it was assembled in a sterile factory, someone has to actually care about <Highlighter>the art of pixels.</Highlighter> That is exactly why I obsess over the frontend."
            </p>
          </div>
        </div>

        {/* This block sits outside the main div to snap to the bottom and fill empty space natively via justify-between */}
        <div className="mt-8 border-t border-ink/30 pt-4 flex justify-between items-end">
          <div className="font-mono text-[10px] text-gray-500 uppercase">
            REPORT FILED UNDER: <span className="text-ink font-bold">SOFTWARE ENGINEERING / PROFILING</span>
          </div>
          <div className="text-right">
            <div className="font-headline font-black text-sm italic text-ink">The Editorial Board</div>
            <div className="font-mono text-[9px] text-accent tracking-widest uppercase mt-0.5">VERIFIED DISPATCH</div>
          </div>
        </div>
      </motion.article>

      {/* SIDEBAR: Section 5 (Person of Interest) & Section 6 (Technology Forecast) */}
      <aside className="lg:col-span-1 flex flex-col border-t lg:border-t-0 lg:border-l border-border-custom pt-6 lg:pt-0 lg:pl-6 gap-6">
        
        {/* SECTION 5: PERSON OF INTEREST */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              PUBLIC NOTICE
            </span>
          </div>

          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-4">
            PERSON OF INTEREST
          </h2>

          {/* Reserved Image Area for POI */}
          <div className="border border-ink p-1 bg-paper mb-4">
            <div className="w-full overflow-hidden border border-border-custom/50 flex items-center justify-center bg-ink/5">
              <img 
                src={`${import.meta.env.BASE_URL}assets/subject_portrait.png`} 
                alt="Portrait of the wanted subject" 
                className="w-full h-auto object-contain filter grayscale contrast-125 brightness-95" 
              />
            </div>
            <div className="font-mono text-[10px] text-gray-600 border-t border-border-custom/30 pt-1.5 px-1 mt-1">
              SUBJECT: ANSHITVA MISHRA. KNOWN ALIAS: "THE SERIAL BUILDER".
            </div>
          </div>

          <p className="font-body text-xs leading-relaxed text-ink text-justify">
            Authorities confirm the subject, a 4th-year B.Tech CSE student, has been repeatedly observed building complex software systems (such as his signature NMS by PUI ecosystem) instead of maintaining a healthy sleep schedule. Eyewitnesses report hearing mechanical keyboard clicks deep into the night. Citizens are advised to approach with caffeine or database queries.
          </p>
        </motion.section>

        <div className="section-divider-thin" />

        {/* SECTION 6: TECHNOLOGY FORECAST */}
        <motion.section 
          id="tech-forecast"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              METEOROLOGICAL OFFICE
            </span>
          </div>

          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-4">
            TECHNOLOGY FORECAST
          </h2>

          <div className="font-mono text-xs space-y-2 mb-4 select-none">
            {forecastItems.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <span className="font-semibold">{item.label}</span>
                <span className="flex-grow border-b border-dotted border-border-custom mx-2" />
                <span className={`font-bold ${item.isSpecial ? 'text-accent animate-pulse' : ''}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="font-mono text-[11px] leading-relaxed text-gray-600 bg-ink/5 border border-border-custom p-3">
            <span className="font-bold text-accent">FORECAST NOTE:</span> Outlook remains optimistic despite recurring side-project activity. High pressure system of incoming ideas expected to collide with low pressure system of free time.
          </div>
        </motion.section>

        <div className="section-divider-thin" />

        {/* SECTION 7: CORE PHILOSOPHY */}
        <motion.section 
          id="core-philosophy"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              BUREAU OF INTELLIGENCE
            </span>
          </div>

          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-4">
            CORE PHILOSOPHY
          </h2>

          <div className="flex flex-col gap-4">
            <div className="border-l-2 border-accent pl-3">
              <h3 className="font-headline font-black text-sm text-ink uppercase tracking-tight">ARCHITECTURE FIRST</h3>
              <p className="font-body text-xs text-ink/80 mt-1 leading-relaxed text-justify">
                Code rots, but solid architecture scales. The primary objective is to separate business logic from UI rendering early, preventing the inevitable spaghetti code that plagues late-stage startups.
              </p>
            </div>
            
            <div className="border-l-2 border-accent pl-3">
              <h3 className="font-headline font-black text-sm text-ink uppercase tracking-tight">SECURITY BY DESIGN</h3>
              <p className="font-body text-xs text-ink/80 mt-1 leading-relaxed text-justify">
                Defaults are inherently dangerous. From cryptographic hashing to route protection, every data boundary must be treated as a hostile environment requiring explicit sanitization and validation.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-3">
              <h3 className="font-headline font-black text-sm text-ink uppercase tracking-tight">UX AS AN ENGINEERING METRIC</h3>
              <p className="font-body text-xs text-ink/80 mt-1 leading-relaxed text-justify">
                User experience is not merely graphic design; it is a measurable engineering constraint. Application latency, layout shifts, and contrast failures are treated as critical production bugs.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-3">
              <h3 className="font-headline font-black text-sm text-ink uppercase tracking-tight">PERSISTENT ITERATION</h3>
              <p className="font-body text-xs text-ink/80 mt-1 leading-relaxed text-justify">
                The first commit is never the final architecture. Software engineering is a continuous process of refactoring, optimizing, and occasionally deleting thousands of lines of legacy code with extreme prejudice.
              </p>
            </div>
          </div>
        </motion.section>

      </aside>
    </div>
  );
}
