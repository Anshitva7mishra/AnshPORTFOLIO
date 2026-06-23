import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Highlighter from './Highlighter';

export default function PressBureau() {
  const [expandedVolume, setExpandedVolume] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const archiveEditions = [
    {
      vol: "VOL I",
      title: "PROJECTUI",
      est: "2024",
      focus: "Frontend interface architecture and layout component structures.",
      url: "https://www.projectui.in/"
    },
    {
      vol: "VOL II",
      title: "NOREXO",
      est: "2025",
      focus: "Anonymous organizational validation loops and feedback tunnels.",
      url: "https://www.linkedin.com/company/norexo"
    },
    {
      vol: "VOL III",
      title: "JVMHUB",
      est: "2025",
      focus: "Java language ecosystem bridging and curated library systems.",
      url: "https://www.linkedin.com/posts/anshitva-mishra-1099392a7_java-jvm-javadeveloper-share-7473616271721291777-KQhd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn_zFkBVaIWQ6C-efp0ZbDCc_16Dz0IayM"
    },
    {
      vol: "VOL IV",
      title: "KAVACH-KDF",
      est: "2026",
      focus: "Hardened password derivation libraries resolving legacy truncation and GPU vulnerabilities.",
      url: "https://www.linkedin.com/posts/anshitva-mishra-1099392a7_opensource-buildinpublic-nodejs-share-7472732252292952064-uqUi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn_zFkBVaIWQ6C-efp0ZbDCc_16Dz0IayM"
    }
  ];

  const telegraphAddresses = [
    {
      label: 'LINKEDIN',
      handle: '/in/anshitva-mishra-1099392a7/',
      url: 'https://www.linkedin.com/in/anshitva-mishra-1099392a7/',
    },
    {
      label: 'GITHUB',
      handle: '/Anshitva7mishra',
      url: 'https://github.com/Anshitva7mishra',
    },
    {
      label: 'TWITTER / X',
      handle: '@AnshitvaM',
      url: 'https://x.com/AnshitvaM',
    },
  ];

  // Volumes X to XXV
  const classifiedVols = Array.from({ length: 16 }, (_, i) => i + 10);

  const toggleVolume = (vol) => {
    setExpandedVolume(expandedVolume === vol ? null : vol);
  };

  return (
    <div id="archives" className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8 border-b border-border-custom pb-8">
      
      {/* SECTION 24: PRESS BUREAU DIRECTORY & TECH STACK */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              PRESS BUREAU
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-3">
            TELEGRAPH ADDRESSES
          </h2>
          <p className="font-body text-xs text-ink/80 leading-relaxed mb-6">
            Official publication channels where evidence of engineering activity is regularly released to the public domain:
          </p>

          {isLoading ? (
            <div className="space-y-0 animate-pulse select-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border-b border-dotted border-border-custom py-3 flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <div className="h-3 bg-ink/30 w-24 rounded-none"></div>
                  <div className="h-3 bg-ink/15 w-full sm:w-40 rounded-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="font-mono text-xs select-none">
              {telegraphAddresses.map(({ label, handle, url }) => (
                <li key={label} className="border-b border-dotted border-border-custom">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 text-ink hover:text-accent font-bold group py-4 px-2 -mx-2 rounded hover:bg-ink/5 transition-colors"
                  >
                    <span className="shrink-0 whitespace-nowrap">{label} ➔</span>
                    <span className="text-gray-600 font-normal group-hover:text-accent break-all sm:text-right sm:max-w-[60%]">
                      {handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* TRUE CONTENT: TECH STACK DIRECTORY */}
        <div className="mt-8 border-t-2 border-dashed border-border-custom/80 pt-6">
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              SYSTEM INFRASTRUCTURE
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-3">
            TECH STACK
          </h2>
          <p className="font-body text-xs text-ink/80 leading-relaxed mb-4">
            Officially recognized programming languages and frameworks operated by the developer:
          </p>
          <ul className="font-mono text-[11px] leading-relaxed text-ink space-y-2 select-none">
            <li className="flex justify-between items-end border-b border-dotted border-border-custom pb-1">
              <span className="font-bold"><Highlighter>JAVA</Highlighter></span>
              <span className="text-gray-500 text-[9px] font-bold">CORE DOMAIN</span>
            </li>
            <li className="flex justify-between items-end border-b border-dotted border-border-custom pb-1">
              <span className="font-bold"><Highlighter>MERN STACK</Highlighter></span>
              <span className="text-gray-500 text-[9px] font-bold">FULL STACK</span>
            </li>
            <li className="flex justify-between items-end border-b border-dotted border-border-custom pb-1">
              <span className="font-bold"><Highlighter>AI TOOLS</Highlighter></span>
              <span className="text-gray-500 text-[9px] font-bold">COGNITIVE ENGINES</span>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* SECTION 25: ARCHIVES (Interactive accordion) */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col border-t lg:border-t-0 lg:border-x border-border-custom pt-6 lg:pt-0 lg:px-6 justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              ARCHIVES
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-3">
            CIRCULATION RECORDS
          </h2>
          <p className="font-body text-xs text-ink/80 leading-relaxed mb-4">
            Select historical editions preserved for verification and audit:
          </p>

          {isLoading ? (
            <div className="space-y-3 animate-pulse select-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-b border-border-custom/50 pb-2 flex justify-between items-center">
                  <div className="h-3 bg-ink/30 w-36 rounded-none"></div>
                  <div className="h-3 bg-ink/15 w-4 rounded-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
              {archiveEditions.map((edition) => (
                <div key={edition.vol} className="border-b border-border-custom/50 pb-2">
                  <button
                    onClick={() => toggleVolume(edition.vol)}
                    className="w-full flex justify-between items-center font-mono text-xs font-bold text-ink hover:text-accent py-1 cursor-pointer"
                  >
                    <span>{edition.vol} — {edition.title}</span>
                    <span>{expandedVolume === edition.vol ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {expandedVolume === edition.vol && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden font-mono text-[10px] text-gray-600 space-y-1.5 pt-1.5 pl-2"
                      >
                        <p><strong>ESTABLISHED:</strong> {edition.est}</p>
                        <p><strong>FOCUS:</strong> {edition.focus}</p>
                        <a 
                          href={edition.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent font-bold hover:underline inline-block mt-1"
                        >
                          REVIEW FINDINGS ➔
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Classified Volumes List */}
              <div className="pt-2 border-t border-border-custom/30">
                <div className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                  UPCOMING RECORDS (CLASSIFIED)
                </div>
                <div className="grid grid-cols-4 gap-1.5 font-mono text-[9px] text-center select-none">
                  {classifiedVols.map((vNum) => (
                    <div 
                      key={vNum} 
                      className="border border-border-custom/30 bg-ink/5 p-1 text-gray-400 font-semibold cursor-not-allowed hover:bg-red-50 hover:text-accent hover:border-accent transition-all"
                      title="Access Restricted: Under active compilation"
                    >
                      VOL {vNum}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="font-mono text-[9px] leading-relaxed text-gray-600 bg-ink/5 border border-border-custom p-3 mt-4">
          <p className="font-bold text-ink">ARCHIVE TELEMETRY:</p>
          <p>Authorities expect one new case file to emerge every week.</p>
          <p className="italic text-accent">Editors have stopped asking for realistic timelines.</p>
        </div>
      </motion.section>

      {/* SECTION 26: OBITUARY & DEMOGRAPHICS */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col border-t lg:border-t-0 border-border-custom pt-6 lg:pt-0 justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-4 text-center">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              OBITUARY
            </span>
          </div>

          <div className="border-4 border-ink p-6 text-center bg-paper relative shadow-sm max-w-xs mx-auto">
            {/* Black ribbon decorative corners */}
            <div className="absolute top-0 left-0 border-t-8 border-l-8 border-ink" />
            <div className="absolute top-0 right-0 border-t-8 border-r-8 border-ink" />
            <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-ink" />
            <div className="absolute bottom-0 right-0 border-b-8 border-r-8 border-ink" />

            <h3 className="font-headline font-black text-3xl text-ink uppercase tracking-tight mb-2">
              SLEEP
            </h3>
            
            <div className="font-mono text-xs font-semibold tracking-wider text-ink/80 border-b border-ink/30 pb-3 mb-3">
              2005 — PRESENT
            </div>

            <p className="font-body text-xs italic leading-relaxed text-ink/90 text-justify mb-4">
              Passed away peacefully in the middle of a late-night production deploy. Deeply mourned by the developer, the core system containers, and close family members who missed seeing them awake.
            </p>

            <div className="font-mono text-[10px] font-bold text-accent border-t border-ink/30 pt-3 uppercase tracking-widest">
              CAUSE: SOFTWARE ENGINEERING
            </div>
          </div>
        </div>

        {/* TRUE CONTENT: SUBJECT DEMOGRAPHICS */}
        <div className="mt-8 border-t-2 border-dashed border-border-custom/80 pt-6 max-w-xs mx-auto w-full text-left">
          <div className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase mb-3 border-b border-ink pb-1">
            SUBJECT DEMOGRAPHICS
          </div>
          <ul className="font-mono text-[10px] leading-relaxed text-ink space-y-2">
            <li className="flex flex-col">
              <span className="text-gray-500 uppercase">BASE OF OPERATIONS:</span>
              <span className="font-bold text-[11px]">Mathura, India</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-500 uppercase">ACADEMIC STATUS:</span>
              <span className="font-bold text-[11px]">B.Tech Computer Science (4th Yr)</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-500 uppercase">TRAINING FACILITIES:</span>
              <span className="font-bold text-[11px]">Sheryians Coding School, CoderArmy</span>
            </li>
          </ul>
        </div>
      </motion.section>

    </div>
  );
}
