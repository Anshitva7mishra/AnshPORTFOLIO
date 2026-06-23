import React from 'react';

export default function Ticker() {
  const tickerItems = [
    { label: "LATEST REPORT", text: "ProjectUI continues expansion." },
    { label: "BREAKING", text: "Norexo enters validation phase." },
    { label: "ENGINEERING DESK", text: "JVMHub remains under active development." },
    { label: "MARKET WATCH", text: "Engineer still believes deadlines are estimates." },
    { label: "LATEST REPORT", text: "Coffee consumption reaches historic heights." },
    { label: "COMMUNITY REPORT", text: "Authorities note a high volume of side projects." }
  ];

  return (
    <div className="border-t border-b border-ink py-2 my-4 bg-accent/5 overflow-hidden select-none">
      <div className="whitespace-nowrap flex items-center">
        <div className="ticker-scroll-animate font-mono text-xs uppercase flex items-center gap-8">
          {/* Repeat items to ensure seamless infinite looping */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2">
              <span className="text-accent font-bold">{item.label}:</span>
              <span>{item.text}</span>
              <span className="text-border-custom ml-6">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
