import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Highlighter from './Highlighter';

export default function Desks() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const deskProjects = [
    {
      desk: "ENGINEERING DESK",
      title: "LOCAL ENGINEER ATTEMPTS TO BUILD AN ENTIRE ECOSYSTEM INSTEAD OF A SINGLE PRODUCT",
      meta: "PROJECTUI • LIVE PRODUCT (LAUNCHED JAN 26, 2025)",
      url: "https://www.projectui.in/",
      buttonText: "VIEW EVIDENCE",
      desc: "In what database administrators describe as an ambitious consolidation of workloads, ProjectUI has expanded from a static collection of UI components into a hybrid automation and AI framework. The platform provides pre-verified building blocks, custom automation modules like AutoProd, and secure utilities like PUICipher. By compiling these architectural templates, it reports a significant drop in copy-paste engineering errors in student code bases."
    },
    {
      desk: "PRODUCT DESK",
      title: "CREATOR ALLIANCE ESTABLISHES COOPERATION NETWORK FOR REAL SYSTEMS",
      meta: "PUI ATELIER • LIVE PRODUCT",
      url: "https://pui-atire.vercel.app/",
      buttonText: "OPEN CASE FILE",
      desc: "Investigators have uncovered a selective community of engineers and system operators operating under the moniker PUI Atelier. The group's database confirms they reject standard mockup building, focusing instead on deploying high-integrity, real-world systems. Members are reportedly subjected to rigorous peer reviews, with witnesses confirming that only production-grade code is allowed to reside in their primary repository."
    },
    {
      desk: "EDUCATION DESK",
      title: "BACKEND MASTERY EXPANDED TO 31 MODULES, BANISHING BOILERPLATE SHORTS",
      meta: "NMS BY PUI • LIVE PRODUCT",
      url: "https://nms-by-pui.vercel.app/",
      buttonText: "REVIEW FINDINGS",
      desc: "The No More Struggle (NMS) learning domain has deployed its backend engineering masterclass, introducing 31 rigorous modules. Developed in alignment with Sheryian Coding School (for MERN stack development) and CoderArmy (for GenAI with JS and DSA), the curriculum focuses entirely on first-principles backend architectures, prohibiting libraries and abstractions. Sources confirm students are forced to write low-level networking, raw database connectors, and custom protocols to pass verification."
    },
    {
      desk: "EDUCATION DESK",
      title: "JAVA COMPILATION RETRAGED BACK TO RAW COMPILER INTERNALS",
      meta: "JAVA LDP • LIVE PRODUCT",
      url: "https://java-ldp-for-nms.vercel.app/",
      buttonText: "ACCESS RECORDS",
      desc: "A sub-branch of the NMS educational department has released a deep JVM internals program. Titled 'Java From First Principles,' the modules explore the Java Virtual Machine's memory model, class loading protocols, and garbage collection metrics. The guide contains cinematic telemetry diagrams, prompting reports that developers are finally learning what happens under the JVM hood before calling imports."
    },
    {
      desk: "ORIGIN STORY DESK",
      title: "AI CREATIVE SUITE DEPLOYED AS BUILDER'S FIRST DEPLOYMENT WITH PREMIUM UI",
      meta: "KHELBUDDY.AI • PERSONAL ARCHIVE",
      url: "https://khelo-buddy-ai.vercel.app/",
      buttonText: "LAUNCH UTILITY",
      desc: "Chronological records confirm KhelBuddy.AI was the builder's debut project, featuring a premium custom user interface and an integrated dummy payment gateway simulator. The platform functions as an AI productivity helper, housing automated article writing, image generation, background/object erasure, and resume evaluating tools, marking the creator's entry into full-stack AI integration."
    },
    {
      desk: "STARTUP DESK",
      title: "EMOTIONAL OUTLET LAUNCHED: ANONYMOUS PLATFORM DECLARES WAR ON SILENT STRUGGLES",
      meta: "NOREXO • UPCOMING MVP (R&D STAGE)",
      url: "https://www.linkedin.com/company/norexo",
      buttonText: "EXPLORE PLATFORM",
      desc: "In a bid to create space where every voice is heard, investigators have revealed Norexo, an anonymous emotional support platform. Rejecting modern social networking surveillance, the ecosystem focuses on anonymous sharing, community support, and AI-powered companionship. Observers report that by eliminating the burden of identity, the platform enables vulnerable, honest conversations without the fear of judgment."
    },
    {
      desk: "COMMUNITY DESK",
      title: "JAVASCRIPT DEVELOPER BUILDS EXCLUSIVE JAVA SANCTUARY USING MERN STACK",
      meta: "JVMHUB • UPCOMING MVP (R&D STAGE)",
      url: "https://www.linkedin.com/posts/anshitva-mishra-1099392a7_java-jvm-javadeveloper-share-7473616271721291777-KQhd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn_zFkBVaIWQ6C-efp0ZbDCc_16Dz0IayM",
      buttonText: "ACCESS SPECIFICATIONS",
      desc: "In what software historians call an ironic twist of history, a JavaScript developer is compiling JVMHub—a platform built on React and Node.js exclusively for Java developers. The platform features an AI Java Mentor, college leaderboards, code-verified skill badges, and GC-Rank, a quality feed ranking algorithm inspired by Java's Generational Garbage Collector. Execution begins as Java reclaimers prepare to occupy the new workspace."
    },
    {
      desk: "OPEN SOURCE DESK",
      title: "SECURITY RESEARCHER DECLARES DEPRECATION OF BCRYPT IN FAVOR OF HARDENED ALTERNATIVE",
      meta: "KAVACH-KDF • UPCOMING MVP (R&D STAGE)",
      url: "https://www.linkedin.com/posts/anshitva-mishra-1099392a7_opensource-buildinpublic-nodejs-share-7472732252292952064-uqUi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn_zFkBVaIWQ6C-efp0ZbDCc_16Dz0IayM",
      buttonText: "EXAMINE CRYPTO",
      desc: "Cryptographic dispatches have announced Kavach-KDF, a modern Node.js password hashing library designed to replace obsolete bcrypt standards. Addressing legacy vulnerabilities, the package resolves bcrypt's silent 72-byte truncation through HMAC peppering, normalizes Unicode inputs across systems, and defaults to Argon2id memory-hard hashing. The library supports seamless automatic migration of legacy hashes upon user authentication."
    },
    {
      desk: "FUTURE EDITION DESK",
      title: "MORE CODE DISPATCHES UNDER ACTIVE R&D AND AUDIT",
      meta: "VOL V – VOLUME XXV • CLASSIFIED DESK",
      url: "#",
      buttonText: "COMPILING IN BACKGROUND",
      desc: "The publication's engineering desk continues audits on active development branches. Additional full-stack architectures, startup products, and custom security libraries will be published in upcoming editions as compilation targets reach stable production builds.",
      isPlaceholder: true
    }
  ];

  return (
    <section id="engineering-desk" className="my-8">
      <div className="text-center mb-6">
        <h2 className="font-headline font-black text-3xl md:text-4xl text-ink uppercase tracking-tight">
          DEPARTMENTAL DISPATCHES
        </h2>
        <div className="section-divider-double" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between p-4 bg-paper border border-border-custom animate-pulse select-none"
            >
              <div>
                {/* Desk label skeleton */}
                <div className="w-24 h-3.5 bg-ink/20 mb-3.5 rounded-none border-b border-ink/40 pb-1.5"></div>
                {/* Headline skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-5 bg-ink/35 w-full rounded-none"></div>
                  <div className="h-5 bg-ink/35 w-4/5 rounded-none"></div>
                </div>
                {/* Meta details skeleton */}
                <div className="w-32 h-2.5 bg-ink/15 mb-4 rounded-none"></div>
                {/* Body skeleton */}
                <div className="space-y-2 mb-6">
                  <div className="h-3 bg-ink/20 w-full rounded-none"></div>
                  <div className="h-3 bg-ink/20 w-11/12 rounded-none"></div>
                  <div className="h-3 bg-ink/20 w-5/6 rounded-none"></div>
                </div>
              </div>
              <div className="border-t border-border-custom/50 pt-3">
                <div className="w-28 h-7 bg-ink/25 rounded-none"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deskProjects.map((project, idx) => {
            if (project.isPlaceholder) {
              return (
                <div 
                  key={idx}
                  className="flex flex-col justify-between p-4 bg-ink/[0.03] border border-dashed border-border-custom select-none opacity-85"
                >
                  <div>
                    <div className="font-mono text-[10px] font-bold text-gray-500 tracking-widest uppercase border-b border-ink/20 pb-1.5 mb-3">
                      {project.desk}
                    </div>
                    <h3 className="font-headline font-bold text-xl text-ink/60 leading-tight uppercase tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <div className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-3">
                      {project.meta}
                    </div>
                    <p className="font-body text-xs leading-relaxed text-justify text-ink/50 mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="border-t border-border-custom/30 pt-3">
                    <span className="inline-block bg-transparent text-gray-400 text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-2 border border-border-custom/50">
                      {project.buttonText} ⚙
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col justify-between p-4 bg-paper border border-border-custom hover:border-ink transition-all"
              >
                <div>
                  <div className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase border-b border-ink pb-1.5 mb-3">
                    {project.desk}
                  </div>
                  <h3 className="font-headline font-black text-xl text-ink leading-tight uppercase tracking-tight mb-3 hover:text-accent transition-all">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Highlighter>{project.title}</Highlighter>
                    </a>
                  </h3>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-3">
                    {project.meta}
                  </div>
                  <p className="font-body text-xs leading-relaxed text-justify text-ink mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="border-t border-border-custom/50 pt-3">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-ink text-paper text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-2 border border-ink hover:bg-accent hover:border-accent hover:text-paper transition-all cursor-pointer"
                  >
                    {project.buttonText} ➔
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
      <div className="section-divider-heavy mt-8" />
    </section>
  );
}
