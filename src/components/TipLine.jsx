import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNotification } from '../context/NotificationContext.jsx';

export default function TipLine() {
  const { addBulletin } = useNotification();
  const [formData, setFormData] = useState({
    sourceName: '',
    returnAddress: '',
    tipHeadline: '',
    fullReport: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // Validation logic
  const missingName = Math.max(0, 2 - formData.sourceName.trim().length);
  const missingEmail = Math.max(0, 5 - formData.returnAddress.trim().length) || (!formData.returnAddress.includes('@') ? 1 : 0);
  const missingHeadline = Math.max(0, 5 - formData.tipHeadline.trim().length);
  const missingBody = Math.max(0, 20 - formData.fullReport.trim().length);

  const isFormValid = missingName === 0 && missingEmail === 0 && missingHeadline === 0 && missingBody === 0;

  // Read environment variables for EmailJS (with safe fallbacks)
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN || "";
  const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER || "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const templateParams = {
      source_name: formData.sourceName,
      return_address: formData.returnAddress,
      tip_headline: formData.tipHeadline,
      full_report: formData.fullReport,
      // parameters for user auto-receipt
      to_email: formData.returnAddress,
      to_name: formData.sourceName
    };

    if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID_ADMIN) {
      // Send main notification email to Admin (you)
      const sendAdmin = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_ADMIN,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send receipt/acknowledgement email to the Sender (User)
      const sendUser = EMAILJS_TEMPLATE_ID_USER
        ? emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID_USER,
            templateParams,
            EMAILJS_PUBLIC_KEY
          )
        : Promise.resolve();

      Promise.all([sendAdmin, sendUser])
        .then(() => {
          setIsSending(false);
          setStatus('success');
          addBulletin(
            "REPORT SUCCESSFULLY DELIVERED TO THE NEWSROOM",
            "Editors are pretending to be busy.",
            "success"
          );
          setFormData({ sourceName: '', returnAddress: '', tipHeadline: '', fullReport: '' });
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setIsSending(false);
          setStatus('error');
        
          addBulletin(
            "PUBLICATION ERROR",
            "The newsroom encountered an unexpected complication. Investigators are reviewing the matter.",
            "error"
          );
        });
    } else {
      // Simulation mode if key details are empty (prints to console)
      setTimeout(() => {
        console.log("Tip Submitted (Simulated double mail dispatch):", templateParams);
        setIsSending(false);
        setStatus('success');
        addBulletin(
          "REPORT SUCCESSFULLY DELIVERED TO THE NEWSROOM",
          "Editors are pretending to be busy. (Simulation Mode)",
          "success"
        );
        setFormData({ sourceName: '', returnAddress: '', tipHeadline: '', fullReport: '' });
      }, 1500);
    }
  };

  return (
    <motion.section 
      id="tip-line"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 max-w-4xl mx-auto"
    >
      <div className="border-b-4 border-double border-ink pb-2 mb-6">
        <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
          CLASSIFIEDS & DISPATCHES
        </span>
      </div>

      {/* Dashed Newspaper Cut-out Envelope */}
      <div className="border-2 border-dashed border-ink p-6 md:p-10 bg-paper relative shadow-sm hover:shadow-md transition-all duration-300">
        
        {/* Scissor Marker and Instruction */}
        <div className="absolute -top-3.5 left-4 sm:left-6 bg-paper px-2 sm:px-3 text-[8px] sm:text-[10px] font-mono text-ink border border-ink flex items-center gap-1 select-none">
          <span>✂</span>
          <span className="tracking-wider font-bold">CUT ALONG THE DOTTED LINE TO MAIL TELEGRAM</span>
        </div>

        {/* Vintage Stamp Box */}
        <div className="absolute top-6 right-6 w-20 h-24 border border-ink/40 flex flex-col items-center justify-center p-2 bg-ink/5 select-none hidden sm:flex">
          <span className="font-mono text-[7px] text-gray-500 uppercase tracking-widest text-center leading-none">POSTAGE STAMP</span>
          <span className="font-mono text-[10px] font-bold text-ink uppercase mt-3">1 COFFEE</span>
          <span className="font-mono text-[6px] text-gray-400 mt-auto leading-none text-center">MATHURA P.O. INDIA</span>
        </div>

        <div className="max-w-xl">
          <h2 className="font-headline font-black text-2xl md:text-3xl text-ink uppercase tracking-tight mb-2">
            TELEGRAM DISPATCH FORM
          </h2>
          <p className="font-body text-xs text-ink/80 leading-relaxed mb-6">
            Submit tips directly to the editor's desk. For custom contracts, code auditing inquiries, or system deployment requests, dispatch your transmission below.
          </p>

          <form onSubmit={handleSubmit} className="font-mono text-xs space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="sourceName" className="font-bold text-ink uppercase tracking-wider text-[10px] flex items-center justify-between w-full">
                  <span className="flex items-center gap-1.5"><span className="text-accent">I.</span> FROM (SOURCE NAME)</span>
                  {missingName > 0 && <span className="text-[9px] text-accent font-normal normal-case opacity-75">({missingName} char required)</span>}
                </label>
                <input 
                  type="text" 
                  id="sourceName" 
                  name="sourceName" 
                  value={formData.sourceName}
                  onChange={handleChange}
                  placeholder="e.g., Anonymous Investigator" 
                  required
                  className="bg-transparent border-b border-ink py-2 px-1 focus:border-accent outline-none rounded-none text-ink placeholder-gray-400/60 font-mono text-xs"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="returnAddress" className="font-bold text-ink uppercase tracking-wider text-[10px] flex items-center justify-between w-full">
                  <span className="flex items-center gap-1.5"><span className="text-accent">II.</span> REPLY WIRE (EMAIL)</span>
                  {missingEmail > 0 && <span className="text-[9px] text-accent font-normal normal-case opacity-75">{!formData.returnAddress.includes('@') ? '(Valid email required)' : `(${missingEmail} char required)`}</span>}
                </label>
                <input 
                  type="email" 
                  id="returnAddress" 
                  name="returnAddress" 
                  value={formData.returnAddress}
                  onChange={handleChange}
                  placeholder="e.g., agent@bureau.com" 
                  required
                  className="bg-transparent border-b border-ink py-2 px-1 focus:border-accent outline-none rounded-none text-ink placeholder-gray-400/60 font-mono text-xs"
                />
              </div>

            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="tipHeadline" className="font-bold text-ink uppercase tracking-wider text-[10px] flex items-center justify-between w-full">
                <span className="flex items-center gap-1.5"><span className="text-accent">III.</span> DISPATCH HEADLINE</span>
                {missingHeadline > 0 && <span className="text-[9px] text-accent font-normal normal-case opacity-75">({missingHeadline} char required)</span>}
              </label>
              <input 
                type="text" 
                id="tipHeadline" 
                name="tipHeadline" 
                value={formData.tipHeadline}
                onChange={handleChange}
                placeholder="e.g., URGENT: PRODUCTION DEPLOYMENT REGRESSION DETECTED" 
                required
                className="bg-transparent border-b border-ink py-2 px-1 focus:border-accent outline-none rounded-none text-ink placeholder-gray-400/60 font-mono text-xs w-full"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullReport" className="font-bold text-ink uppercase tracking-wider text-[10px] flex items-center justify-between w-full">
                <span className="flex items-center gap-1.5"><span className="text-accent">IV.</span> TRANSMISSION DETAILS (BODY)</span>
                {missingBody > 0 && <span className="text-[9px] text-accent font-normal normal-case opacity-75">({missingBody} char required)</span>}
              </label>
              <textarea 
                id="fullReport" 
                name="fullReport" 
                value={formData.fullReport}
                onChange={handleChange}
                rows={6} 
                placeholder="Enter complete technical audit records, custom contract proposals, or messages to the editor-in-chief..." 
                required
                className="bg-transparent border-b border-ink py-2 px-1 focus:border-accent outline-none rounded-none text-ink placeholder-gray-400/60 font-mono text-xs w-full resize-y leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-border-custom/40">
              <span className="font-mono text-[9px] text-gray-500 uppercase text-center sm:text-left">
                * All telegraph logs archived in public domain
              </span>
              <button 
                type="submit" 
                disabled={isSending || !isFormValid}
                className="w-full sm:w-auto shrink-0 bg-ink text-paper border border-ink py-3 px-6 uppercase font-bold tracking-widest hover:bg-accent hover:border-accent hover:text-paper transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-[10px] whitespace-nowrap"
              >
                {isSending 
                  ? 'SENDING TELEGRAM...' 
                  : (!isFormValid ? 'INCOMPLETE DETAILS' : 'DISPATCH MESSAGE ➔')}
              </button>
            </div>

          </form>
        </div>

      </div>
    </motion.section>
  );
}
