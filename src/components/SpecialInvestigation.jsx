import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Highlighter from './Highlighter';

export default function SpecialInvestigation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const caseFiles = [
    {
      num: "CASE FILE #001",
      title: "THE INITIAL DEPLOYMENT TRIGGER",
      meta: "ESTABLISHED: CIRCA 2024 | CLASSIFICATION: ORIGIN SHIFT",
      body: "Evidence reveals the subject's transition from passive observer to active compiler. Initial investigations recovered basic scripts running local automations. What appeared to be a harmless curiosity quickly mutated into a full-scale side-project habit, characterized by an inability to leave default configurations alone."
    },
    {
      num: "CASE FILE #002",
      title: "THE MULTI-REPO COLLUSION",
      meta: "ESTABLISHED: CIRCA 2025 | CLASSIFICATION: CORE EXPANSION",
      body: "The subject was observed maintaining multiple active codebases concurrently. Analysis of repository activity during this era shows overlapping commits on ProjectUI and Norexo. Investigators hypothesize the subject discovered a loophole in the space-time continuum allowing him to work without sleep, although caffeine contamination in water samples remains the official explanation."
    },
    {
      num: "CASE FILE #003",
      title: "THE CRYPTOGRAPHIC HARDENING CAMPAIGN",
      meta: "ESTABLISHED: CIRCA 2026 | CLASSIFICATION: ENCRYPTION PROTOCOL",
      body: "Investigators recovered a custom Node.js cryptographic key derivation library, Kavach-KDF, designed to deprecate insecure defaults. Evidence reveals the subject engineered an HMAC pepper layer to bypass legacy length boundaries and implemented auto-migration flows to rescue legacy credentials in real-time, effectively defending systems against GPU-accelerated brute force attacks."
    }
  ];

  return (
    <section id="special-investigation" className="my-8 bg-ink text-paper p-4 md:p-6 border-4 border-ink relative overflow-hidden">
      {/* Background print halftone effect approximation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5F0E6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10">
        <div className="border-b border-border-custom/30 pb-2 mb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
            SPECIAL REPORT
          </span>
        </div>

        <h2 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 text-center">
          SPECIAL INVESTIGATION: <Highlighter>THE SERIAL BUILDER</Highlighter>
        </h2>

        <p className="font-body text-sm md:text-base italic text-gray-300 max-w-3xl mx-auto text-center mb-8">
          An in-depth forensic investigation into the technical evolution and product deployment patterns of engineer Anshitva Mishra. Our investigators reviewed codebase histories, commits, and server logs.
        </p>
        
        <div className="text-center font-mono text-xs text-gray-400 mb-8">
          PROJECTS INACTIVE: <Highlighter>COUNTLESS</Highlighter>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div 
                key={idx}
                className="border border-border-custom/30 p-4 md:p-5 bg-paper/5 backdrop-blur-sm flex flex-col justify-between animate-pulse select-none"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-border-custom/20 pb-2 mb-4">
                    <span className="w-16 h-3 bg-ink/30 rounded-none"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  </div>
                  <div className="h-5 bg-ink/40 w-5/6 mb-2 rounded-none"></div>
                  <div className="h-3 bg-ink/20 w-3/4 mb-4 rounded-none"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-ink/25 w-full rounded-none"></div>
                    <div className="h-3 bg-ink/25 w-full rounded-none"></div>
                    <div className="h-3 bg-ink/25 w-4/5 rounded-none"></div>
                  </div>
                </div>
                <div className="border-t border-border-custom/10 pt-4 mt-6 flex justify-between">
                  <div className="w-16 h-2 bg-ink/15 rounded-none"></div>
                  <div className="w-12 h-2 bg-ink/15 rounded-none"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {caseFiles.map((cFile, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-border-custom/30 p-4 md:p-5 bg-paper/5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-border-custom/20 pb-2 mb-4">
                    <span className="font-mono text-xs font-bold text-accent tracking-wider">
                      {cFile.num}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  </div>

                  <h3 className="font-headline font-black text-lg uppercase tracking-tight text-paper mb-2">
                    {cFile.title}
                  </h3>

                  <div className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-4">
                    {cFile.meta}
                  </div>

                  <p className="font-body text-xs leading-relaxed text-gray-300 text-left md:text-justify">
                    {cFile.body}
                  </p>
                </div>

                <div className="border-t border-border-custom/10 pt-4 mt-6 font-mono text-[9px] text-gray-400 uppercase flex justify-between">
                  <span>EVIDENCE: COMMITTED</span>
                  <span>STATUS: SECURED</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
