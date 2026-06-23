import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'FRONT PAGE', id: 'front-page' },
    { label: 'ENGINEERING DESK', id: 'engineering-desk' },
    { label: 'TECHNOLOGY FORECAST', id: 'tech-forecast' },
    { label: 'SPECIAL INVESTIGATION', id: 'special-investigation' },
    { label: 'EDITORIAL', id: 'editorial' },
    { label: 'TIP LINE', id: 'tip-line' },
    { label: 'ARCHIVES', id: 'archives' }
  ];

  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small delay on mobile to allow drawer close animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <nav className="sticky top-0 bg-paper z-40 border-t border-b-2 border-ink py-2 my-3 select-none">
        {/* Desktop Sticky Bar */}
        <div className="hidden lg:flex justify-around items-center max-w-6xl mx-auto font-mono text-xs font-bold tracking-wider">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-accent hover:underline decoration-accent transition-all cursor-pointer"
              >
                {item.label}
              </button>
              {index < navItems.length - 1 && (
                <span className="text-border-custom font-normal">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Header Bar */}
        <div className="flex lg:hidden justify-between items-center px-2 sm:px-4 font-mono text-xs font-bold">
          <span className="text-[9px] sm:text-[10px] tracking-widest text-gray-500 uppercase">THE DAILY DEPLOYMENT</span>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center gap-1.5 border border-ink px-2.5 py-1.5 hover:bg-ink hover:text-paper transition-all cursor-pointer text-[10px]"
          >
            <FaBars />
            <span className="hidden sm:inline">TABLE OF CONTENTS</span>
            <span className="sm:hidden">INDEX</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Expandable Drawer) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 sm:w-2/3 bg-paper border-l-4 border-ink p-6 z-50 flex flex-col justify-between shadow-2xl font-body"
            >
              <div>
                <div className="flex justify-between items-center border-b border-border-custom pb-4 mb-6">
                  <div className="font-mono text-xs font-bold text-accent">THE DEPARTMENTS</div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-ink p-1 hover:text-accent cursor-pointer"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-6 text-left">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="font-headline font-black text-xl text-ink hover:text-accent text-left uppercase tracking-tight border-b border-border-custom/30 pb-2 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="font-mono text-[10px] text-gray-400 border-t border-border-custom pt-4">
                © {new Date().getFullYear()} THE DAILY DEPLOYMENT. ALL RIGHTS COMMITTED.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
