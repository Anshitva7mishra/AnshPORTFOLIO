import React, { useEffect, useState } from 'react';

export default function Masthead({ repoCount = 80 }) {
  const [liveDate, setLiveDate] = useState('SUNDAY, JUNE 21, 2026');

  useEffect(() => {
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    
    const today = new Date();
    const dayName = days[today.getDay()];
    // Align with timeline consistent with original setting (future date 2026)
    const year = today.getFullYear() < 2026 ? 2026 : today.getFullYear();
    const monthName = today.getFullYear() < 2026 ? "JUNE" : months[today.getMonth()];
    const dateNum = today.getDate();
    
    setLiveDate(`${dayName}, ${monthName} ${dateNum}, ${year}`);
  }, []);

  return (
    <header className="flex flex-col border-b-4 border-double border-ink pb-4 mb-4">
      {/* Top Meta Line */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border-custom py-2 font-mono text-xs tracking-wider uppercase font-medium">
        <span className="text-left">VOL. I — NO. 1</span>
        <span className="text-center text-accent md:text-ink">{liveDate}</span>
        <span className="text-right hidden md:inline">MATHURA, INDIA</span>
      </div>

      {/* Title */}
      <div className="text-center py-6">
        <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase select-none">
          THE DAILY DEPLOYMENT
        </h1>
        <p className="font-body text-base md:text-xl italic mt-3 tracking-wide text-gray-700">
          “All the code that’s fit to ship.”
        </p>
      </div>

      {/* Bottom Meta Line */}
      <div className="grid grid-cols-2 md:grid-cols-3 border-t border-border-custom py-2 font-mono text-[10px] sm:text-xs tracking-wider uppercase font-medium">
        <span className="text-left">PRICE: ONE COFFEE</span>
        <span className="text-center hidden md:inline text-accent">WEATHER: 100% CHANCE OF MERGE CONFLICTS</span>
        <span className="text-right">EDITION: PORTFOLIO</span>
      </div>

      {/* Section 1.5: PUBLIC RECORDS */}
      <div className="border-t border-border-custom pt-4 mt-2">
        <div className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-3">
          PUBLIC RECORDS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-ink text-paper p-4 font-mono text-xs uppercase">
          <div className="flex flex-col border-r border-border-custom/20 pr-2">
            <span className="text-gray-400 text-[10px]">LIVE PRODUCTS</span>
            <span className="text-base font-bold mt-1">4</span>
          </div>
          <div className="flex flex-col border-r border-border-custom/20 pr-2">
            <span className="text-gray-400 text-[10px]">UPCOMING PRODUCTS</span>
            <span className="text-base font-bold mt-1">3</span>
          </div>
          <div className="flex flex-col sm:border-r border-border-custom/20 pr-2">
            <span className="text-gray-400 text-[10px]">TOTAL REPOSITORIES</span>
            <span className="text-base font-bold mt-1">{repoCount}</span>
          </div>
          <div className="flex flex-col border-r border-border-custom/20 pr-2">
            <span className="text-gray-400 text-[10px]">YEARS BUILDING</span>
            <span className="text-base font-bold mt-1">1.5+</span>
          </div>
          <div className="flex flex-col col-span-2 sm:col-span-1">
            <span className="text-gray-400 text-[10px]">PUBLICATION STATUS</span>
            <span className="text-base font-bold text-green-400 animate-pulse mt-1">ACTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
