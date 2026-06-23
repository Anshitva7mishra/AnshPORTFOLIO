import React from 'react';

export default function Highlighter({ children }) {
  return (
    <span className="relative inline-block">
      {/* Background marker stroke effect */}
      <span 
        className="absolute inset-0 bg-[#FFD700]/40 transform -skew-x-6 rotate-[1deg] rounded-[2px]" 
        style={{ padding: '0 4px', left: '-2px', right: '-2px' }}
      />
      {/* Text itself */}
      <span className="relative font-bold italic text-ink">{children}</span>
    </span>
  );
}
