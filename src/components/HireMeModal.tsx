import React from "react";
import { motion } from "framer-motion";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  phone: string;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose, email, phone }) => {
  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3162b9]/80 backdrop-blur-[4px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#ffe066] bg-gradient-to-br from-[#3162b9]/95 via-[#4a7ad6]/90 to-[#ffe066]/20 backdrop-blur-xl"
        style={{ boxShadow: '0 8px 40px 0 rgba(49,98,185,0.25), 0 1.5px 8px 0 rgba(49,98,185,0.10)' }}
      >
        <button
          className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffe066] text-2xl text-[#3162b9] hover:bg-[#3162b9] hover:text-[#ffe066] transition-all shadow-lg border-2 border-[#3162b9]"
          onClick={onClose}
          aria-label="Close"
          style={{backdropFilter: 'blur(6px)'}}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="w-full h-44 relative flex items-center justify-center bg-gradient-to-b from-[#ffe066]/80 via-[#3162b9]/60 to-[#4a7ad6]/80">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">Contact Me</span>
            <span className="text-lg text-[#ffe066] mt-2 font-semibold">Let's connect for your next project!</span>
          </div>
        </div>
        <div className="p-10 md:p-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-[#ffe066]">Email</span>
            <div className="flex items-center gap-2 bg-[#3162b9]/80 rounded px-3 py-2">
              <span className="text-white select-all text-base">{email}</span>
              <button
                className="px-3 py-1 text-xs bg-[#ffe066] rounded hover:bg-white font-semibold text-[#3162b9] shadow border border-[#ffe066] hover:border-[#3162b9] transition-all"
                onClick={() => handleCopy(email)}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-[#ffe066]">Mobile</span>
            <div className="flex items-center gap-2 bg-[#3162b9]/80 rounded px-3 py-2">
              <span className="text-white select-all text-base">{phone}</span>
              <button
                className="px-3 py-1 text-xs bg-[#ffe066] rounded hover:bg-white font-semibold text-[#3162b9] shadow border border-[#ffe066] hover:border-[#3162b9] transition-all"
                onClick={() => handleCopy(phone)}
              >
                Copy
              </button>
            </div>
          </div>
          <p className="text-sm text-white/90 text-center mt-4">You can copy and contact me via email or phone.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HireMeModal;
