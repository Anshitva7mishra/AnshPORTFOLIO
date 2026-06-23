import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationContext = createContext(null);

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const [bulletins, setBulletins] = useState([]);

  const addBulletin = (title, message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setBulletins((prev) => [...prev, { id, title, message, type }]);

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      removeBulletin(id);
    }, 6000);
  };

  const removeBulletin = (id) => {
    setBulletins((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addBulletin }}>
      {children}
      
      {/* Toast Overlay Container */}
      <div className="fixed bottom-6 right-0 sm:right-6 z-50 flex flex-col gap-4 max-w-md w-full px-4 sm:px-0 pointer-events-none">
        <AnimatePresence>
          {bulletins.map((b) => {
            let bannerText = '✦ LATEST BULLETIN ✦';
            let bannerBg = 'text-ink';
            if (b.type === 'success') {
              bannerText = '★ EXTRA! EXTRA! ★';
              bannerBg = 'text-accent';
            } else if (b.type === 'error') {
              bannerText = '⚡ PUBLICATION ERROR ⚡';
              bannerBg = 'text-accent font-bold';
            }

            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="pointer-events-auto bg-paper border-4 border-ink p-4 shadow-xl relative select-none flex flex-col"
              >
                {/* Vintage Corner Brackets */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-ink/40" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-ink/40" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-ink/40" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-ink/40" />

                <div className="flex justify-between items-start border-b border-border-custom pb-1.5 mb-2 font-mono text-[10px] font-bold">
                  <span className={`${bannerBg} tracking-widest`}>{bannerText}</span>
                  <button 
                    onClick={() => removeBulletin(b.id)}
                    className="text-gray-400 hover:text-accent font-mono cursor-pointer ml-4 font-normal"
                  >
                    [CLOSE]
                  </button>
                </div>

                <div className="text-left">
                  <h4 className="font-headline font-black text-sm uppercase tracking-tight text-ink mb-1">
                    {b.title}
                  </h4>
                  <p className="font-body text-xs leading-relaxed text-ink/80 italic">
                    {b.message}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}
