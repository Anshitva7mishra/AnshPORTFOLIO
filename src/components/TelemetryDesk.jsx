import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TelemetryDesk({ repoCount = 80 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wireLogs, setWireLogs] = useState([
    {
      date: "LIVE — 12:04:10 AM",
      desk: "Engineering Desk",
      text: "[Commit] src/components/Desks.jsx updated: Refactored project portfolio cards to reference live links.",
      confidence: "Immediate"
    },
    {
      date: "LIVE — 11:58:32 PM",
      desk: "LinkedIn Desk",
      text: "[Post] \"Privacy is not a feature, it is a foundation.\" — Norexo launches anonymous community dispatches.",
      confidence: "Irrefutable"
    },
    {
      date: "LIVE — 11:42:15 PM",
      desk: "Engineering Desk",
      text: "[Commit] package.json updated: Added Framer Motion and EmailJS dependencies.",
      confidence: "High"
    },
    {
      date: "LIVE — 11:30:00 PM",
      desk: "X/Twitter Desk",
      text: "[Tweet] \"First-principles backend engineering means writing raw socket connections. No shortcuts. #BuildInPublic\"",
      confidence: "High"
    }
  ]);

  const [tickerState, setTickerState] = useState("MONITORING CONTEXT COMMITS...");

  useEffect(() => {
    // Simulated local loading state
    const loadTimer = setTimeout(() => setIsLoading(false), 1200);

    const staticSocialPosts = [
      { desk: "LinkedIn Desk", text: "[Post] \"Building JVMHub using a JavaScript MERN stack. Ironic history.\" — JVMHub specifications released.", confidence: "Irrefutable" },
      { desk: "LinkedIn Desk", text: "[Post] \"Kavach-KDF is fully open-source. Migrates legacy bcrypt users automatically.\" — security dispatches.", confidence: "High" },
      { desk: "X/Twitter Desk", text: "[Tweet] \"80 repositories tracked. A serial builder can't leave default configurations alone.\"", confidence: "Immediate" },
      { desk: "X/Twitter Desk", text: "[Tweet] \"Mathura reports: Coffee index volatile (+12.4%), sleep index critical (-45.2%).\"", confidence: "High" },
      { desk: "LinkedIn Desk", text: "[Post] \"Norexo launched. Because every voice deserves to be heard safely.\" — anonymous community portal.", confidence: "High" },
      { desk: "X/Twitter Desk", text: "[Tweet] \"31 modules of raw backend. Zero libraries. Hostel Chronicles is live.\"", confidence: "Critical" }
    ];

    const fetchGithubEvents = async () => {
      let activeSocialPosts = [...staticSocialPosts];
      try {
        const cacheBuster = new Date().getTime();
        const postsRes = await fetch(`${import.meta.env.BASE_URL}posts.json?t=${cacheBuster}`, {
          cache: 'no-store'
        });
        if (postsRes.ok) {
          const postsData = await postsRes.json();
          if (postsData.socialPosts && postsData.socialPosts.length > 0) {
            activeSocialPosts = postsData.socialPosts;
          }
        }
      } catch (postErr) {
        console.warn("Could not load public/posts.json, using built-in posts fallback:", postErr);
      }

      let parsedEvents = [];
      try {
        const cacheBuster = new Date().getTime();
        const response = await fetch(`https://api.github.com/users/Anshitva7mishra/events?per_page=10&t=${cacheBuster}`);
        
        if (response.ok) {
          const data = await response.json();
          parsedEvents = data
            .map(event => {
              const time = new Date(event.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              const dateStr = `LIVE — ${time}`;
              const repoName = event.repo.name.replace("Anshitva7mishra/", "");
              
              if (event.type === "PushEvent" && event.payload.commits && event.payload.commits.length > 0) {
                const commitMsg = event.payload.commits[0].message;
                return { date: dateStr, desk: "Engineering Desk", text: `[Commit] ${repoName}: ${commitMsg}`, confidence: "Immediate" };
              } else if (event.type === "CreateEvent") {
                const refType = event.payload.ref_type || "repository";
                return { date: dateStr, desk: "Research Desk", text: `[Event] Created ${refType} in ${repoName}`, confidence: "High" };
              } else if (event.type === "WatchEvent") {
                return { date: dateStr, desk: "Community Desk", text: `[Event] Starred repository ${repoName}`, confidence: "Medium" };
              } else if (event.type === "ForkEvent") {
                return { date: dateStr, desk: "Engineering Desk", text: `[Event] Forked repository ${repoName}`, confidence: "High" };
              }
              return null;
            })
            .filter(Boolean);
        } else {
          console.warn("GitHub API rate limit exceeded. Commits will not update until limit resets.");
        }
      } catch (githubErr) {
        console.warn("GitHub API error:", githubErr);
      }

      const mergedLogs = [];
      let eventIndex = 0;
      let socialIndex = 0;
      
      while (mergedLogs.length < 8) {
        if (eventIndex < parsedEvents.length && (mergedLogs.length % 3 !== 2 || socialIndex >= activeSocialPosts.length)) {
          mergedLogs.push(parsedEvents[eventIndex]);
          eventIndex++;
        } else if (socialIndex < activeSocialPosts.length) {
          const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          mergedLogs.push({
            ...activeSocialPosts[socialIndex],
            date: `LIVE — ${time}`
          });
          socialIndex++;
        } else {
          break;
        }
      }

      if (mergedLogs.length > 0) {
        setWireLogs(mergedLogs.slice(0, 4));
      }
    };

    fetchGithubEvents();
    const fetchInterval = setInterval(fetchGithubEvents, 60000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-0 my-8 border-b border-border-custom pb-8">
      
      {/* SECTION 17: LIVE INVESTIGATION */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between lg:pr-6"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              PRESS BUREAU
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-2">
            LIVE INVESTIGATION
          </h2>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-4 border-b-2 border-ink pb-1">
            A living log of observed dev activity
          </p>

          {isLoading ? (
            <div className="space-y-4 animate-pulse select-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-ink/5 border border-border-custom p-3 space-y-2">
                  <div className="flex justify-between border-b border-dotted border-border-custom pb-1">
                    <div className="h-2 bg-ink/20 w-16 rounded-none"></div>
                    <div className="h-2 bg-ink/20 w-20 rounded-none"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-3 bg-ink/30 w-full rounded-none"></div>
                    <div className="h-3 bg-ink/30 w-4/5 rounded-none"></div>
                  </div>
                  <div className="h-2 bg-ink/10 w-24 ml-auto rounded-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 pr-2 pb-4">
              <AnimatePresence initial={false}>
                {wireLogs.map((log) => (
                  <motion.div 
                    key={log.date + log.text}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-accent/5 border border-border-custom p-3 text-xs"
                  >
                    <div className="flex justify-between font-mono text-[9px] border-b border-dotted border-border-custom pb-1 mb-2">
                      <span className="text-accent font-bold">{log.date}</span>
                      <span className="font-semibold text-ink">{log.desk}</span>
                    </div>
                    <p className="font-body text-ink leading-relaxed mb-2">{log.text}</p>
                    <div className="font-mono text-[8px] text-gray-500 text-right uppercase">
                      CONFIDENCE: {log.confidence} • EVIDENCE RECORDED
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="border border-ink/20 p-2 font-mono text-[9px] text-ink/60 uppercase text-center tracking-widest bg-ink/5">
            [ ALL TELEMETRY LOGS CLASSIFIED. UNAUTHORIZED INTERFERENCE PROHIBITED. ]
          </div>
          <div className="bg-ink text-[#39FF14] p-3 font-mono text-[10px] flex items-center justify-between">
            <span>➔ {tickerState}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
          </div>
        </div>
      </motion.section>

      {/* SECTION 18: TECHNOLOGY DESK */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col border-t lg:border-t-0 lg:border-x border-border-custom pt-6 lg:pt-0 lg:px-6 justify-between"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              TECHNOLOGY DESK
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-4 leading-tight">
            COLLABORATION LABELED "HIGHLY PRODUCTIVE OR MERELY ACCELERATED PROCRASTINATION"
          </h2>
          <div className="font-mono text-[11px] font-bold text-accent tracking-wide uppercase mb-3">
            SOURCES CONFIRM PARTNERSHIP WITH COGNITIVE ENGINES
          </div>

          {isLoading ? (
            <div className="space-y-4 animate-pulse select-none">
              <div className="h-3 bg-ink/20 w-full rounded-none"></div>
              <div className="h-3 bg-ink/20 w-11/12 rounded-none"></div>
              <div className="h-3 bg-ink/20 w-full rounded-none"></div>
              <div className="h-3 bg-ink/20 w-4/5 rounded-none"></div>
              <div className="h-3 bg-ink/20 w-full rounded-none"></div>
              <div className="h-3 bg-ink/20 w-3/4 rounded-none"></div>
            </div>
          ) : (
            <div className="font-body text-xs leading-relaxed text-justify text-ink space-y-3">
              <p>
                An ongoing inquiry into the developer's output has confirmed deep collaboration with several artificial intelligence frameworks and workspaces. These include <strong className="font-mono text-accent">Gemini</strong> (prioritized for user interface design), <strong className="font-mono text-accent">Stitch</strong> (utilized for UI/UX modeling), <strong className="font-mono text-accent">GPT</strong> (commissioned for complex theoretical question solving and code logic templating), <strong className="font-mono text-accent">Perplexity</strong> (deployed for deep research), and <strong className="font-mono text-accent">AntiGravity</strong> (operated as the primary IDE).
              </p>
              <p>
                Proponents argue that the integration of automated code engines has allowed Mishra to write clean boilerplate in microseconds. Detractors, however, point out that this capacity has merely allowed him to prototype five times as many side-projects, compounding the tracking problems across his {repoCount} active repositories.
              </p>
              <p>
                "He can now spin up an API server in the time it takes to brew an espresso," warned an anonymous cloud manager. Security parameters remain monitored.
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* SECTION 19: MARKET REPORT */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col border-t lg:border-t-0 border-border-custom pt-6 lg:pt-0 lg:pl-6 gap-6"
      >
        <div>
          <div className="border-b border-border-custom pb-1 mb-2">
            <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
              MARKET REPORT
            </span>
          </div>
          <h2 className="font-headline font-black text-2xl text-ink uppercase tracking-tight mb-2">
            COMMODITIES SUMMARY
          </h2>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-4 border-b-2 border-ink pb-1">
            Index Close of Trading telemetry
          </p>

          {isLoading ? (
            <div className="space-y-3.5 animate-pulse select-none">
              <div className="border-b border-ink/40 pb-2 flex justify-between">
                <div className="h-3.5 bg-ink/35 w-20 rounded-none"></div>
                <div className="h-3.5 bg-ink/35 w-12 rounded-none"></div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border-custom/50">
                  <div className="h-3 bg-ink/20 w-24 rounded-none"></div>
                  <div className="h-3 bg-ink/20 w-12 rounded-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <table className="w-full font-mono text-[11px] border-collapse border-b border-border-custom text-left select-none">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="pb-1.5 font-bold">COMMODITY</th>
                  <th className="pb-1.5 font-bold text-right">INDEX</th>
                  <th className="pb-1.5 font-bold text-right">CHANGE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-custom/50 py-1.5">
                  <td className="py-2">Coffee Intake</td>
                  <td className="py-2 text-right">4.2 Cups</td>
                  <td className="py-2 text-right text-accent font-bold">+12.4%</td>
                </tr>
                <tr className="border-b border-border-custom/50 py-1.5">
                  <td className="py-2">Sleep Hours</td>
                  <td className="py-2 text-right">4.5 Hours</td>
                  <td className="py-2 text-right text-accent font-bold">-45.2%</td>
                </tr>
                <tr className="border-b border-border-custom/50 py-1.5">
                  <td className="py-2">Side Projects</td>
                  <td className="py-2 text-right">{repoCount} Repos</td>
                  <td className="py-2 text-right text-accent font-bold">+27%</td>
                </tr>
                <tr className="border-b border-border-custom/50 py-1.5">
                  <td className="py-2">Free Time</td>
                  <td className="py-2 text-right">0.2 Hours</td>
                  <td className="py-2 text-right text-accent font-bold">-89.1%</td>
                </tr>
                <tr className="border-b-2 border-ink py-1.5">
                  <td className="py-2">Prod Stability</td>
                  <td className="py-2 text-right">99.9% Uptime</td>
                  <td className="py-2 text-right text-accent font-bold">+99.8%</td>
                </tr>
                <tr className="font-bold text-xs uppercase bg-accent/5">
                  <td className="py-2 px-1" colSpan={2}>MOTIVATION INDEX:</td>
                  <td className="py-2 text-right text-accent px-1 animate-pulse">VOLATILE</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* CLASSIFIED ADVERTISEMENT BLOCK TO FILL SPACE */}
        <div className="border-2 border-ink p-4 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mt-2 hover:bg-ink/5 transition-colors duration-300">
          <div className="absolute -top-2.5 left-4 bg-paper px-2 font-mono text-[8px] font-bold tracking-widest text-ink">
            CLASSIFIED AD
          </div>
          <h4 className="font-headline font-black text-lg text-center uppercase leading-tight mb-2 tracking-tight">
            WANTED: <br/> <span className="text-accent">HARD ENGINEERING PROBLEMS</span>
          </h4>
          <p className="font-body text-[10px] text-center leading-relaxed mb-3 text-ink/80">
            Local software engineer actively seeking high-impact, deeply technical backend & frontend challenges. Proficiency in MERN stack, Java ecosystems, and resolving chaotic production fires. 
          </p>
          <div className="text-center mt-4 mb-2">
            <a href="#tip-line" className="font-mono text-[9px] font-bold text-paper bg-ink hover:bg-accent px-4 py-2 uppercase transition-colors">
              Dispatch a Telegram
            </a>
          </div>
        </div>

        {/* WEATHER REPORT added as original content to fill the right column empty space */}
        <div className="mt-8 border-t-2 border-dashed border-border-custom/80 pt-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent font-bold">☁</span>
            <h3 className="font-headline font-black text-sm text-ink uppercase tracking-tight">
              LOCAL FORECAST
            </h3>
          </div>
          <p className="font-body text-[11px] text-ink/85 leading-relaxed text-justify">
            Mathura forecasts indicate a high-pressure system building around 4th-year academic requirements. Expect severe downpours of caffeinated beverages and persistent fog over compiler optimization routines. Visibility into post-graduation plans remains strictly classified.
          </p>
        </div>
      </motion.section>

    </div>
  );
}
