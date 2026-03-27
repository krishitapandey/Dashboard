"use client";
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import {  VerticalActionCard } from '@/components/StatsCards/VerticalActionCard';
import { MainStatsCard } from '@/components/StatsCards/MainStatsCard';
import { CardData } from '@/types/stats.types';
import { initialCards } from '@/data/stats';





export default function CourseStats() {
  const [activeId, setActiveId] = useState('all');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 font-sans select-none overflow-hidden">
      <header className="mb-12 text-center lg:text-left">
        <h2 className="text-[32px] font-bold tracking-tight text-dark-text">
          Dive Into <span className="text-brand-green">What's Hot Right Now!</span> 
        </h2>
      </header> 

      <LayoutGroup>
        <motion.div 
          layout
          className="flex flex-col lg:flex-row gap-6 items-center justify-center min-h-[500px]"
        >
          {initialCards.map((card) => (
            <React.Fragment key={card.id}>
              {activeId === card.id ? (
                <MainStatsCard data={card} />
              ) : (
                <VerticalActionCard 
                  data={card} 
                  onClick={() => setActiveId(card.id)} 
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}