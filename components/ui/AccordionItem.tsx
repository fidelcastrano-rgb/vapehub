'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl bg-surface overflow-hidden">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left font-bold focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out px-6 text-gray-400 ${
          open ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
