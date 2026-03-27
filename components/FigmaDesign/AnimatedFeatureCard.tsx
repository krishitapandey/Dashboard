"use client"
 
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket } from "lucide-react"
import { Card, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export default function AnimatedFeatureCard() {
  const [isHovered, setIsHovered] = React.useState(false)
 
  // Animation variants for smooth sliding and fading
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  }
 
  const carouselVariants = {
    initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, delay: 0.1 } },
    exit: { opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.3 } }
  }
 
  return (
    <Card 
      className="bg-[#fce8d5] border-none rounded-[2.5rem] overflow-hidden relative min-h-[400px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          /* Default Text State */
          <motion.div
            key="text-content"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 p-10 flex flex-col justify-start z-10"
          >
            <CardTitle className="text-4xl font-bold text-orange-900 mb-2">
              Start with Clarity
            </CardTitle>
            <p className="text-orange-800/80 font-semibold text-xl">
              Step into a better learning path.
            </p>
            <p className="text-orange-800/60 max-w-sm mt-4 text-base leading-relaxed">
              Overwhelmed by too many learning options? SkillShikshya provides a clear, 
              curated roadmap from the start.
            </p>
          </motion.div>
        ) : (
          /* Hover Carousel State */
          <motion.div
            key="carousel-content"
            variants={carouselVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 bg-[#fce8d5] flex items-center justify-center p-8 z-20"
          >
            <Carousel className="w-full max-w-xs" opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <div className="p-2 text-center">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl mb-6 bg-white flex items-center justify-center">
                       <div className="w-full h-full bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                          <Rocket className="w-20 h-20 text-orange-400" />
                       </div>
                    </div>
                    <p className="font-bold text-orange-900 text-lg">Clarity unlocked—stickers, tips, and skills!</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-2 text-center">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl mb-6 bg-white flex items-center justify-center">
                       <div className="w-full h-full bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <Rocket className="w-20 h-20 text-blue-400 rotate-45" />
                       </div>
                    </div>
                    <p className="font-bold text-orange-900 text-lg">Focused phases—learning mode: ON!</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-[-20px] bg-white/90 hover:bg-white border-none shadow-md text-orange-900" />
              <CarouselNext className="right-[-20px] bg-white/90 hover:bg-white border-none shadow-md text-orange-900" />
            </Carousel>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}