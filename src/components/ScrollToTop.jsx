import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-16 h-16 rounded-full bg-paper border border-dashed border-ink text-ink flex items-center justify-center shadow-lg hover:bg-ink hover:text-paper hover:border-solid hover:scale-110 transition-all duration-300 focus:outline-none group"
          aria-label="Scroll to top"
        >
          <div className="w-14 h-14 rounded-full border border-ink flex flex-col items-center justify-center group-hover:border-paper transition-colors duration-300">
            <span className="font-serif text-xl leading-none group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
            <span className="font-mono text-[8px] font-bold tracking-widest uppercase mt-0.5">
              TOP
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
