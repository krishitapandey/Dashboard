"use client";

import { JourneyCard } from "@/components/JourneyCard/JourneyCard";
import { JOURNEY_CARDS } from "@/data/journey";

export default function JourneySection() {
  return (
    <section className="bg-white py-20 px-5 ">
      <div className="max-w-[1216px] mx-auto">
        <p className="text-[13px] font-bold text-dark mb-1.5 tracking-wider uppercase">
          Your SkillShikshya Journey
        </p>
        <h2 className="text-[30px] font-bold mb-[60px] leading-tight text-dark">
          <span className="text-brand-green">Step</span> In.{" "}
          <span className="text-brand-green">Skill</span> Up.{" "}
          <span className="text-brand-green">Stand</span> Out. 
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[40px] gap-x-[40px] justify-items-center">
          {JOURNEY_CARDS.map((card) => (
            <JourneyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}