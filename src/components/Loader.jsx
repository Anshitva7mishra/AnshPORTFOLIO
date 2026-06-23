import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Gathering Reports...');

  useEffect(() => {
    const totalDuration = 2400; // Total ms for load
    const intervalTime = 40; // Frequency of update
    const totalSteps = totalDuration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentProgress = Math.min(Math.floor((stepCount / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 25) {
        setStatusText('Gathering Reports...');
      } else if (currentProgress < 50) {
        setStatusText('Reviewing Evidence...');
      } else if (currentProgress < 75) {
        setStatusText('Contacting Sources...');
      } else if (currentProgress < 100) {
        setStatusText('Preparing Archives...');
      } else {
        setStatusText('EDITION READY');
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Prevent scrolling when the loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Generate newspaper-style progress bar indicator: ■■■■■■□□□□
  const filledBlocks = Math.min(Math.floor(progress / 10), 10);
  const emptyBlocks = 10 - filledBlocks;
  const barString = '■'.repeat(filledBlocks) + '□'.repeat(emptyBlocks);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-paper text-ink z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 select-none"
    >
      {/* Broadsheet Border Frame */}
      <div className="border border-border-custom p-1.5 sm:p-3 bg-paper max-w-sm sm:max-w-lg w-full relative shadow-lg">
        <div className="border-4 border-ink p-4 sm:p-8 flex flex-col items-center text-center">
          
          <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-accent uppercase font-bold border-b border-border-custom pb-1.5 mb-4 w-full">
            THE PRESS ASSOCIATION DIRECTIVE
          </div>

          <h1 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight mb-2 leading-none">
            THE DAILY DEPLOYMENT
          </h1>
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-4 sm:mb-6">
            VOL. I • ISSUE 001
          </p>

          <div className="section-divider-double w-full mb-4 sm:mb-6" />

          <div className="font-headline text-base sm:text-lg italic text-gray-700 mb-4 sm:mb-6">
            “PREPARING TODAY’S EDITION”
          </div>

          {/* Checklist Segment */}
          <div className="w-full font-mono text-[10px] sm:text-[11px] text-left border border-border-custom p-3 sm:p-4 bg-ink/5 mb-4 sm:mb-6 space-y-2">
            <div className="flex justify-between items-center gap-2">
              <span>GATHERING REPORTS</span>
              <span className={progress >= 25 ? "text-accent font-bold" : "text-gray-400"}>
                {progress >= 25 ? "✓ VERIFIED" : "○ IN PROGRESS"}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>REVIEWING EVIDENCE</span>
              <span className={progress >= 50 ? "text-accent font-bold" : "text-gray-400"}>
                {progress >= 50 ? "✓ COLLECTED" : progress >= 25 ? "○ IN PROGRESS" : "⧖ PENDING"}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>CONTACTING SOURCES</span>
              <span className={progress >= 75 ? "text-accent font-bold" : "text-gray-400"}>
                {progress >= 75 ? "✓ CONTACTED" : progress >= 50 ? "○ IN PROGRESS" : "⧖ PENDING"}
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-border-custom/30 pt-2 mt-2">
              <span className="font-bold">STATUS</span>
              <span className="font-bold text-accent tracking-wider uppercase animate-pulse">
                {statusText}
              </span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="font-mono text-[10px] sm:text-xs uppercase w-full">
            <div className="flex justify-between mb-2">
              <span>EDITION PROGRESS: {progress}%</span>
              <span className="hidden sm:inline">MATHURA PRESS OFFICE</span>
            </div>
            <div className="text-lg sm:text-xl tracking-widest text-ink select-none font-bold">
              {barString}
            </div>
          </div>

          <div className="section-divider-thin w-full mt-4 sm:mt-6" />
          <div className="font-mono text-[7px] sm:text-[8px] text-gray-400 uppercase tracking-widest mt-2 w-full leading-relaxed">
            * Warning: Do not force close. Branch operations are running live synchronization *
          </div>

        </div>
      </div>
    </motion.div>
  );
}
