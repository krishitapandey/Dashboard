import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CardData } from '@/types/stats.types';




export const MainStatsCard = ({ data }: { data: CardData }) => {
  return (

    <motion.div
      layoutId={data.id} 
      layout
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      className="w-full lg:w-[500px] xl:w-[592px] h-[461px] z-20"
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
          <Card className="relative bg-[#C33241] text-white rounded-[32px] p-10 w-full lg:w-[592px] h-[461px] border-none flex flex-col justify-between overflow-hidden cursor-pointer">
      <div className="flex justify-end">
        <Button 
          variant="ghost" 
          className="group text-white hover:bg-white/50 flex items-center gap-2 text-[16px] font-semibold transition-all p-4"
        >
          View all Courses 
          <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="flex justify-center items-center gap-12 -mt-4">
        {data.icons.map((src, i) => (
          <div key={i} className="relative w-[70px] h-[70px] rotate-12 drop-shadow-md">
            <Image src={src} alt="icon" width={100}  height={100} className="object-cover " />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center items-center gap-6">
        <div className="flex items-start">
          <span className="text-[150px] font-bold leading-[0.75] text-[#F9EBEC]">{data.count}</span>
          <span className="text-[52px] font-bold mt-2 ml-1 text-[#F9EBEC]">+</span>
        </div>
        <div className="pb-4">
          <h3 className="text-[32px] text-[#F9EBEC] font-bold leading-none mb-2">{data.title}</h3>
          <p className="text-[#F9EBEC]/90 text-[18px] leading-snug max-w-[210px] font-medium">{data.description}</p>
        </div>
      </div>
    </Card>

    </motion.div>

  );
};