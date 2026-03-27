"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { CarouselSlide, JourneyCardProps } from "@/types/journey.types";
import { JourneyCardFront } from "./JourneyCardFront";
import { JourneyCardCarousel } from "./JourneyCardCarouseal";


const STYLE_ID = "journey-card-styles";


function injectStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `

    @keyframes journeyFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-14px); }
    }
    .journey-card__character { animation: journeyFloat 3s ease-in-out infinite; }
    .font-nohemi { font-family: 'Nohemi', sans-serif; }
    .font-outfit { font-family: 'Outfit', sans-serif; }
  `;
  document.head.appendChild(style);
}

// // --- Sub-Component: Navigation Arrows ---
// const CarouselNav = ({ direction, onClick }: { direction: "left" | "right"; onClick: (e: React.MouseEvent) => void }) => {
//   const isLeft = direction === "left";
//   return (
//     <div className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 flex items-center justify-center h-[160px] w-[80px] z-30 pointer-events-none`}>
//       <svg width="80" height="160" viewBox="0 0 60 120" fill="none" className={`absolute ${isLeft ? "left-0" : "right-0"} top-0`}>
//         <path 
//           d={isLeft ? "M0 0 V 10 C 0 30, 60 20, 60 60 C 60 100, 0 90, 0 110 V 120 Z" : "M60 0 V 10 C 60 30, 0 20, 0 60 C 0 100, 60 90, 60 110 V 120 Z"} 
//           fill="white"
//         />
//       </svg>
//       <div className="absolute top-1/2 -translate-y-1/2 pointer-events-auto">
//         <Button variant="ghost" onClick={onClick} className="p-0 w-14 h-14 flex items-center justify-center rounded-full transition-colors bg-white text-black hover:bg-gray-100">
//           {isLeft ? <ChevronLeft size={50} strokeWidth={3} /> : <ChevronRight size={50} strokeWidth={3} />}
//         </Button>
//       </div>
//     </div>
//   );
// };


// function JourneyCardFront({
//   bgColor, image, imageWidth, imageHeight, imageTop, imageLeft, imageRotation, animationDelay, isLeft, title, subtitle, description,
// }: Omit<JourneyCardProps, "hoverImage"> & { isLeft: boolean }) {
//   return (
//     <motion.div
//       key="front"
//       initial={{ x: 0, opacity: 0, zIndex: 0 }}
//       animate={{ x: 0, opacity: 1, zIndex: 1 }}
//       exit={{ x: 20, opacity: 0, zIndex: 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="relative flex items-center w-[592px] h-[341px] px-[30px] rounded-[30px]"
//       style={{ backgroundColor: bgColor }}
//     >
//       <div
//         className="journey-card__character absolute z-30 pointer-events-none"
//         style={{
//           width: `${imageWidth}px`, height: `${imageHeight}px`, top: `${imageTop}px`,
//           [isLeft ? "left" : "right"]: `${imageLeft}px`,
//           transform: `rotate(${imageRotation}deg)`, animationDelay,
//         }}
//       >
//         <img src={image} alt="" className="w-full h-full object-contain" />
//       </div>

//       <div className={`flex flex-col flex-1 z-20 ${isLeft ? "text-right" : "text-left"}`}>
//         <h3 className="font-nohemi font-bold text-[32px] leading-[1.2] text-white m-0">{title}</h3>
//         <p className="font-outfit font-medium text-[24px] leading-[1.2] text-white">{subtitle}</p>
//         <div className="flex flex-col gap-2 mt-2" style={{ marginLeft: isLeft ? "160px" : "0", marginRight: isLeft ? "0" : "160px" }}>
//           <p className="font-outfit font-normal text-[18px] leading-normal text-white">{description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// function JourneyCardCarousel({ hoverImage, currentIndex, nextSlide, prevSlide, bgColor }: {
//   hoverImage: CarouselSlide[]; currentIndex: number; nextSlide: (e: React.MouseEvent) => void; bgColor: string; prevSlide: (e: React.MouseEvent) => void;
// }) {
//   const currentSlide = hoverImage[currentIndex];

//   return (
//     <motion.div
//       key="carousel"
//       initial={{ x: 100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: 100, opacity: 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[30px]"
//       style={{ backgroundColor: bgColor }}
//     >
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`carousel-slide-${currentIndex}`}
//             initial={{ x: 20, opacity: 0, zIndex: 10 }}
//             animate={{ x: 0, opacity: 1, zIndex: 10 }}
//             exit={{ x: -20, opacity: 0, zIndex: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="w-full h-full flex items-center justify-between"
//           >
//             {currentSlide.type === "image" ? (
//               <div className="relative w-full h-full flex flex-row items-center">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <img src={currentSlide.imageUrl} alt="" className="w-full h-full object-cover" />
//                 </div>
//                 {currentSlide.hoverText && (
//                   <div className={currentSlide.showLogo ? "w-[310px] h-full flex flex-col justify-start pt-[50px] pr-8 text-left" : "absolute left-10 top-10 right-10 z-20"}>
//                     <h3 className="font-outfit font-semibold text-[22px] leading-[1.3] text-white">{currentSlide.hoverText}</h3>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex flex-col justify-center items-start w-full h-full p-[50px] text-left">
//                 <h3 className="font-nohemi font-bold text-[32px] leading-[1.2] text-white m-0">{currentSlide.title}</h3>
//                 <p className="font-outfit font-medium text-[24px] leading-[1.2] text-white mt-1">{currentSlide.subtitle}</p>
//                 <p className="font-outfit font-normal text-[18px] leading-normal text-white mt-4">{currentSlide.description}</p>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {currentSlide.showLogo && (
//           <>
//             <motion.img key="deco-logo-left" src="/image.svg" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute left-20 top-10 w-20 h-20 opacity-90 pointer-events-none z-10" />
//             <motion.img key="deco-logo" src="/image.svg" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute right-20 bottom-10 w-20 h-20 opacity-90 pointer-events-none z-10" />
//           </>
//         )}
//       </div>

//       <CarouselNav direction="left" onClick={prevSlide} />
//       <CarouselNav direction="right" onClick={nextSlide} />
//     </motion.div>
//   );
// }

// --- Main Component ---
export function JourneyCard(props: JourneyCardProps) {
  const {
    bgColor, image, imagePosition = "left", imageRotation = 0, title, subtitle, description,
    animationDelay = "0s", imageWidth = 250, imageHeight = 330, hoverImage = [], imageTop = 20, imageLeft = -40,
  } = props;

  useEffect(() => { injectStyles(); }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLeft = imagePosition === "left";

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hoverImage.length) setCurrentIndex((prev) => (prev + 1) % hoverImage.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hoverImage.length) setCurrentIndex((prev) => (prev - 1 + hoverImage.length) % hoverImage.length);
  };

  return (
    <div className="relative w-[660px] h-[341px]">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setCurrentIndex(0); }}
        className="relative flex items-center w-full h-full px-[40px] z-10 overflow-hidden cursor-pointer rounded-[30px]"
      >
        <AnimatePresence mode="wait">
          {!isHovered || hoverImage.length === 0 ? (
            <JourneyCardFront {...{ ...props, isLeft }} />
          ) : (
            <JourneyCardCarousel
              hoverImage={hoverImage}
              bgColor={bgColor}
              currentIndex={currentIndex}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}