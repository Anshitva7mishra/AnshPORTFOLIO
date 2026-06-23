import React from 'react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body p-6 flex flex-col justify-between max-w-5xl mx-auto border-x border-border-custom">
      <header className="border-b-4 border-double border-ink pb-4 text-center">
        <div className="font-mono text-xs tracking-widest uppercase mb-2">
          VOL. I — NO. 1 • SPECIAL NOTICE
        </div>
        <h1 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tight">
          THE DAILY DEPLOYMENT
        </h1>
        <p className="italic text-sm mt-1">“All the code that’s fit to ship.”</p>
      </header>

      <main className="my-16 flex-grow flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-4 border-ink p-8 md:p-12 max-w-xl text-center bg-paper relative shadow-sm"
        >
          <div className="font-mono text-accent text-xs font-bold tracking-widest uppercase mb-4">
            ✦ CLASSIFIED REPORT ✦
          </div>
          
          <h2 className="font-headline font-black text-2xl md:text-4xl text-ink uppercase tracking-tight mb-6">
            MISSING PERSON REPORT
          </h2>

          <div className="text-sm md:text-base leading-relaxed text-ink space-y-4 mb-8">
            <p>The requested page could not be located.</p>
            <p>Authorities suspect it never existed.</p>
          </div>

          <div className="border-t border-b border-border-custom py-3 my-6 font-mono text-xs uppercase flex justify-between items-center">
            <span>STATUS:</span>
            <span className="text-accent font-bold animate-pulse">OPEN INVESTIGATION</span>
          </div>

          <a 
            href={`${import.meta.env.BASE_URL}index.html`} 
            className="inline-block bg-ink text-paper border border-ink font-mono font-bold text-xs uppercase px-6 py-3 tracking-widest hover:bg-accent hover:border-accent hover:text-paper transition-all"
          >
            RETURN TO FRONT PAGE
          </a>
        </motion.div>
      </main>

      <footer className="border-t border-border-custom pt-4 text-center font-mono text-xs text-gray-500">
        <div>THE DAILY DEPLOYMENT • ESTABLISHED 2026</div>
      </footer>
    </div>
  );
}
