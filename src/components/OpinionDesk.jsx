import React from 'react';
import { motion } from 'framer-motion';
import Highlighter from './Highlighter';

export default function OpinionDesk() {
  const opinions = [
    {
      title: "MOST PROJECTS DO NOT REQUIRE MICROSERVICES",
      text: "The architectural push to separate simple workloads into distributed networks of micro-containers remains one of the most expensive forms of engineering procrastination. A monolith is not a crime; it is an efficient deployment model. Before you partition your database, ensure you actually have enough traffic to warrant the network latency."
    },
    {
      title: "ANOTHER FRAMEWORK WILL NOT RECTIFY POOR DESIGN",
      text: "The search for the ultimate frontend library is a distraction. A codebase lacking solid separation of concerns and pure business logic will rot just as quickly in the latest metadata-driven compiler as it did in standard scripts. Focus on structural sanity, not packages install counts."
    },
    {
      title: "OPTIMIZATION BEFORE VALIDATION IS AN EXPENSIVE TRAP",
      text: "Running benchmarks on query execution paths for a product with zero monthly active users is an act of fear. Validate that your software provides value to real humans before you spend weeks tuning cache-invalidation loops or writing custom concurrency controls."
    }
  ];

  return (
    <div id="editorial" className="flex flex-col gap-8 my-8 border-b border-border-custom pb-8">
      
      {/* TOP SECTION: OPINION COLUMNS (Spans Full Width) */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              EDITORIAL
            </span>
          </div>

          <h2 className="font-headline font-black text-3xl text-ink uppercase tracking-tight text-center mb-6 italic">
            THE OPINION COLUMNS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opinions.map((op, idx) => (
              <div 
                key={idx}
                className={`flex flex-col border-t border-t-ink pt-3 ${
                  idx > 0 ? 'md:border-l md:border-l-border-custom/50 md:pl-4' : ''
                }`}
              >
                <h3 className="font-headline font-black text-sm text-ink leading-tight uppercase tracking-tight mb-3">
                  {op.title}
                </h3>
                <p className="font-body text-xs leading-relaxed text-left md:text-justify text-ink/80 mb-4 flex-grow">
                  {op.text}
                </p>
                <div className="font-mono text-[8px] text-gray-400 uppercase mt-auto">
                  SECTION REVIEWED BY EDITOR
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BOTTOM SECTION: SPLIT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-border-custom">
        
        {/* LEFT BOTTOM COLUMN: PUBLIC NOTICE (Spans 2/3) */}
        <div className="lg:col-span-2 flex flex-col">
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="border-b border-border-custom pb-1 mb-2">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                PUBLIC NOTICE
              </span>
            </div>
            <h2 className="font-headline font-black text-xl text-ink uppercase tracking-tight mb-3">
              <Highlighter>PUBLIC APOLOGY</Highlighter>
            </h2>
            <p className="font-body text-xs text-ink mb-4 leading-relaxed">
              The publication officially apologizes for the following recurring engineering transgressions committed by the subject:
            </p>
            <ul className="font-mono text-[11px] leading-relaxed text-ink gap-y-4 select-none grid grid-cols-1">
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">✦</span>
                <span>Naming files <code className="bg-ink/5 px-1 py-0.5 border border-border-custom">final_v2_final_actual.js</code></span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">✦</span>
                <span>Deploying database migrations on a Friday afternoon</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">✦</span>
                <span>Saying "it is just a quick fix" before disappearing for 6 hours</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">✦</span>
                <span>Underestimating complex feature timelines by exactly 300%</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-accent font-bold mt-0.5">✦</span>
                <span>Pushing directly to the main branch after 2:00 AM</span>
              </li>
            </ul>
            
            <div className="mt-6 border-t border-border-custom/40 pt-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">PENALTY IMPOSED:</span>
              <p className="font-body text-[11px] text-ink/80 mt-1 leading-relaxed text-justify">
                The developer has been sentenced to 100 hours of writing unit tests for legacy code and is strictly prohibited from using the phrase "it works on my machine" during daily standups.
              </p>
            </div>
          </motion.section>
        </div>

        {/* RIGHT BOTTOM COLUMN: OMBUDSMAN (Spans 1/3) */}
        <aside className="lg:col-span-1 flex flex-col border-t lg:border-t-0 lg:border-l border-border-custom pt-6 lg:pt-0 lg:pl-6">
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="border-b border-border-custom pb-1 mb-2">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                CORRECTIONS
              </span>
            </div>
            <h2 className="font-headline font-black text-xl text-ink uppercase tracking-tight mb-3">
              OFFICE OF THE OMBUDSMAN
            </h2>
            <p className="font-body text-xs leading-relaxed text-justify text-ink italic border-l-2 border-accent pl-3 flex-grow">
              In a rather dramatic turn of events on the auspicious night of Republic Day, January 26, 2025, the grand launch of ProjectUI was met with an uninvited guest: complete and utter chaos. All systems were green, the launch was imminent, and the developer team was all set. However, just minutes before the deadline, our self-proclaimed hero, Anshitva Mishra, decided to resolve a last-minute merge request from a teammate. What followed was a spectacular display of digital self-sabotage. Working in a state of heavy sleep deprivation, our coder resolved conflicts in a manner that made major critical sections of the frontend application completely vanish into thin air. The Office of the Ombudsman constructively notes: branch protection rules are not optional suggestions, and resolving git conflicts at midnight with shut eyes is akin to driving on a Mathura highway blindfolded. The application was thankfully salvaged, but the developer's pride has been permanently deprecated in production.
            </p>
          </motion.section>
        </aside>

      </div>
    </div>
  );
}
