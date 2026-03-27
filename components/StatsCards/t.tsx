import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { CardData } from '@/types/stats.types';



export const VerticalActionCard = ({ data, onClick }: { data: CardData, onClick: () => void }) => {
  return (
    <motion.div 
      initial="initial" 
      whileHover="hover" 
      className="relative h-full z-10 hover:z-50 "
    >
    
      <motion.div
      
        variants={{
          initial: { opacity: 0, y: 10, scale: 0.8 },
          hover: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute hidden lg:flex -top-16 left-1/2 -translate-x-1/2 lg:flex-col items-center pointer-events-none"
      >
        <span className="text-[14px] font-light text-black whitespace-nowrap mb-[-10px]">Click me!</span>
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="text-black transform translate-x-2">
          <path d="M30 2 C30 2, 10 12, 25 22 C40 32, 45 10, 30 15 C15 25, 18 60, 45 85 M45 85 L35 80 M45 85 L50 72" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div
        layoutId={data.id}
        layout
        onClick={onClick} 
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex-1 h-full min-w-[60px] cursor-pointer "
      >
        <Card className="bg-[#F9EBEC] rounded-[32px] h-full border-none flex flex-row lg:flex-col justify-between p-4 md:p-6 transition-colors hover:bg-[#F2DADF] overflow-hidden">
          <div className="flex-1 flex items-center justify-center">
         
                 <motion.div 
            layout
            className="lg:rotate-180 lg:h-[230px] lg:[writing-mode:vertical-rl] flex flex-col items-start gap-2"
          >
              <span className="text-[#C33241] font-bold text-[24px] uppercase tracking-widest">{data.title}</span>
              <p className="text-[#C33241]/80 text-[18px] font-medium leading-tight">{data.description}</p>
            </motion.div>
          </div>
          
             <motion.div layout className="flex flex-row lg:flex-col items-center justify-end text-[#C33241]">
            <span className="text-[100px] font-bold leading-[0.8] tracking-tighter">{data.count}</span>
            <span className="text-[40px] font-bold mt-1 ml-1">+</span>
            </motion.div>
     
        </Card>
      </motion.div>
    </motion.div>
  );
};