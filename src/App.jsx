import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Masthead from './components/Masthead';
import Navigation from './components/Navigation';
import Ticker from './components/Ticker';
import EditorialFeed from './components/EditorialFeed';
import Desks from './components/Desks';
import SpecialInvestigation from './components/SpecialInvestigation';
import TelemetryDesk from './components/TelemetryDesk';
import OpinionDesk from './components/OpinionDesk';
import TipLine from './components/TipLine';
import PressSupportFund from './components/PressSupportFund';
import PressBureau from './components/PressBureau';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repoCount, setRepoCount] = useState(80); // 80 is the baseline/fallback count

  useEffect(() => {
    // Fetch live public repository count dynamically from GitHub API
    fetch("https://api.github.com/users/Anshitva7mishra")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("GitHub profile fetch unsuccessful");
      })
      .then((data) => {
        if (data.public_repos !== undefined) {
          setRepoCount(data.public_repos);
        }
      })
      .catch((err) => {
        console.warn("Could not retrieve live GitHub repository count. Falling back to default (80).", err);
      });
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="press-loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto p-0 sm:p-3 md:p-6 bg-paper text-ink selection:bg-accent selection:text-paper w-full"
      >
        <div className="border border-border-custom p-1 sm:p-3 md:p-4 bg-paper relative shadow-sm">
          {/* Broadsheet Border Frame */}
          <div className="border-4 border-ink p-1.5 sm:p-4 md:p-6">
            <Masthead repoCount={repoCount} />
            <Navigation />
            <Ticker />
            <EditorialFeed />
            <div className="section-divider-heavy my-6" />
            <Desks />
            <SpecialInvestigation />
            <div className="section-divider-heavy my-6" />
            <TelemetryDesk repoCount={repoCount} />
            <OpinionDesk />
            <TipLine />
            <PressSupportFund />
            <PressBureau />
            <Footer repoCount={repoCount} />
          </div>
        </div>
      </motion.div>
      <ScrollToTop />
    </>
  );
}
