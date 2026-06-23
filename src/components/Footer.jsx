import React from 'react';

export default function Footer({ repoCount = 80 }) {
  return (
    <footer className="mt-8 border-t-4 border-double border-ink pt-6 pb-8 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono uppercase text-ink">
        
        {/* Col 1: Publication Name */}
        <div className="flex flex-col justify-center">
          <div className="font-headline font-black text-lg md:text-xl tracking-tight text-ink leading-tight">
            THE DAILY DEPLOYMENT
          </div>
          <div className="text-[10px] text-gray-600 mt-1">
            VOL. I • ISSUE 001 • FOUNDED 2026
          </div>
        </div>

        {/* Col 2: Publisher */}
        <div className="flex flex-col justify-center border-t md:border-t-0 lg:border-l border-border-custom/50 pt-4 md:pt-0 lg:pl-6">
          <div className="text-gray-500 text-[10px] tracking-widest">EDITOR-IN-CHIEF</div>
          <div 
            className="text-4xl text-ink mt-2 tracking-tighter font-normal opacity-80 transform -rotate-3 select-none normal-case" 
            style={{ fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', 'Bradley Hand', cursive" }}
          >
            Anshitva
          </div>
          <div className="text-[10px] text-ink/70 font-mono tracking-widest mt-1 mb-1 normal-case">
            23-06-2026
          </div>
          <div className="text-[9px] text-gray-600 font-semibold uppercase">B.TECH CSE • 4TH YEAR STUDENT</div>
        </div>

        {/* Col 3: Channels */}
        <div className="flex flex-col justify-center border-t md:border-t-0 lg:border-l border-border-custom/50 pt-4 md:pt-0 lg:pl-6">
          <div className="text-gray-500 text-[10px] tracking-widest">PRESS BUREAU</div>
          <div className="flex flex-wrap items-center mt-1.5 font-bold text-[10px]">
            <a href="https://www.linkedin.com/in/anshitva-mishra-1099392a7/" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline py-2 pr-3 -my-2">LINKEDIN</a>
            <span className="text-gray-400 px-1">•</span>
            <a href="https://github.com/Anshitva7mishra" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline py-2 px-3 -my-2">GITHUB</a>
            <span className="text-gray-400 px-1">•</span>
            <a href="https://x.com/AnshitvaM" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline py-2 pl-3 -my-2">X</a>
          </div>
        </div>

        {/* Col 4: Status and Cases */}
        <div className="flex flex-col justify-center border-t md:border-t-0 lg:border-l border-border-custom/50 pt-4 md:pt-0 lg:pl-6">
          <div className="flex justify-between items-center text-[10px] text-gray-500">
            <span>STATUS: <strong className="text-green-600 font-bold ml-1 animate-pulse">ACTIVE</strong></span>
          </div>
          <div className="mt-1.5 text-[9px] text-gray-600 leading-normal space-y-0.5">
            <div className="flex justify-between">
              <span>LIVE PRODUCTS</span>
              <span className="font-bold text-ink">4</span>
            </div>
            <div className="flex justify-between">
              <span>UPCOMING PRODUCTS</span>
              <span className="font-bold text-ink">3</span>
            </div>
            <div className="flex justify-between">
              <span>TOTAL REPOSITORIES</span>
              <span className="font-bold text-ink">{repoCount}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="section-divider-thin my-6" />

      {/* Bottom Disclaimer */}
      <div className="font-body text-xs italic text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
        No deadlines were harmed during the creation of this publication. Several expectations were.
      </div>
    </footer>
  );
}
