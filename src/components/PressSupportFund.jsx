import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNotification } from '../context/NotificationContext';

export default function PressSupportFund() {
  const { addBulletin } = useNotification();
  const upiId = "mishraanshitva@pingpay";
  const [selectedAmount, setSelectedAmount] = useState(null);

  const supportTiers = [
    { label: "₹50 (Espresso)", value: 50 },
    { label: "₹100 (Double Shot)", value: 100 },
    { label: "₹250 (Beans Bag)", value: 250 },
    { label: "₹500 (All-Night Fuel)", value: 500 }
  ];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId)
      .then(() => {
        addBulletin(
          "COPIED TO CLIPBOARD", 
          "UPI ID successfully recorded to your clipboard memory. Ready for dispatch.", 
          "success"
        );
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
        addBulletin(
          "COPY FAILURE", 
          "Unable to write to system clipboard. Please record ID manually.", 
          "error"
        );
      });
  };

  // Compile deep link and QR URL
  const qrData = encodeURIComponent(`upi://pay?pa=${upiId}&pn=Anshitva%20Mishra&cu=INR` + (selectedAmount ? `&am=${selectedAmount}` : ""));
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&color=111111&bgcolor=F5F0E6`;

  return (
    <motion.section 
      id="support-fund"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 max-w-4xl mx-auto border-t-4 border-double border-ink pt-8 pb-4"
    >
      <div className="border-b border-border-custom pb-1 mb-6 text-center">
        <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
          OFFICIAL DISPATCH
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="font-headline font-black text-3xl text-ink uppercase tracking-tight mb-3">
          PRESS SUPPORT FUND
        </h2>
        <p className="font-body text-sm leading-relaxed text-ink/80 italic">
          The newsroom remains operational thanks to caffeine, curiosity, and occasional financial assistance. Readers wishing to support future investigations may contribute below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-ink p-4 sm:p-6 md:p-8 bg-paper">
        
        {/* Left Column: QR Code Display Card */}
        <div className="flex flex-col items-center border-2 border-ink p-4 bg-paper/5 flex-grow relative">
          <div className="absolute top-1 left-1 font-mono text-[7px] text-gray-500 uppercase">
            STATION ID: MATHURA-01
          </div>
          
          <div className="w-48 h-48 sm:w-52 sm:h-52 border border-border-custom bg-paper p-2 flex items-center justify-center relative shadow-sm">
            <img 
              src={qrCodeUrl} 
              alt="UPI payment QR code" 
              className="w-full h-full object-contain filter contrast-125"
            />
          </div>

          <div className="font-mono text-[9px] sm:text-[10px] text-gray-600 mt-3 text-center uppercase leading-normal">
            <div>SCAN VIA ANY UPI APP TO SPONSOR</div>
            <div className="font-bold text-accent mt-1">
              {selectedAmount ? `TIER: ₹${selectedAmount} INR` : "TIER: CUSTOM CONTRIBUTION"}
            </div>
          </div>
        </div>

        {/* Right Column: Copy ID & Suggestions */}
        <div className="flex flex-col justify-between space-y-6">
          
          {/* UPI Address Box */}
          <div className="border-b border-border-custom pb-4">
            <label className="font-mono text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
              Sponsorship Channel Address (UPI)
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold bg-ink/5 border border-border-custom/80 px-2 py-1.5 flex-grow select-all text-ink break-all text-center sm:text-left">
                {upiId}
              </span>
              <button 
                onClick={handleCopyUpi}
                className="bg-ink text-paper border border-ink text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 hover:bg-accent hover:border-accent hover:text-paper transition-all cursor-pointer whitespace-nowrap text-center"
              >
                COPY WIRE ID
              </button>
            </div>
          </div>

          {/* Amount Tiers Selection */}
          <div>
            <label className="font-mono text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
              Sponsorship Level Suggestions
            </label>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {supportTiers.map((tier) => (
                <button
                  key={tier.value}
                  onClick={() => setSelectedAmount(selectedAmount === tier.value ? null : tier.value)}
                  className={`border font-mono text-[9px] sm:text-[10px] font-semibold py-1.5 sm:py-2 px-2 sm:px-3 tracking-wide text-center uppercase transition-all cursor-pointer ${
                    selectedAmount === tier.value 
                      ? 'border-accent bg-accent text-paper font-bold' 
                      : 'border-ink/40 hover:border-ink bg-transparent text-ink hover:bg-ink/5'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            {selectedAmount && (
              <button
                onClick={() => setSelectedAmount(null)}
                className="font-mono text-[9px] text-accent font-bold hover:underline uppercase mt-3 inline-block cursor-pointer"
              >
                Reset to custom amount ↺
              </button>
            )}
          </div>

          <div className="font-mono text-[9px] leading-relaxed text-gray-600 border-t border-border-custom/40 pt-4">
            * Contributions are applied directly towards coffee resources, cloud deployments, and repository maintenance. All audits are managed by the lead developer.
          </div>

        </div>

      </div>
    </motion.section>
  );
}
