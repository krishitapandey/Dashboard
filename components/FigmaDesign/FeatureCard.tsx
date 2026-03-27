"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence, type Variants } from "framer-motion"

export interface FeatureCardProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt?: string
  backgroundColor?: string
  textColor?: string
  className?: string
  onClick?: () => void
}

// ── Animation variants ──────────────────────────────────────────────────────

const textVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    transition: { duration: 0.25 } 
  },
}

const imageVariants: Variants = {
  rest: { 
    scale: 1, 
    y: 0, 
    rotate: 0,
    transition: { duration: 0.3 } 
  },
  hover: { 
    scale: 1.02, 
    y: -4, 
    rotate: 0,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
}

/**
 * FeatureCard — Figma "Clarity / Journey" card, pixel-matched.
 * Matches zoomed-in specifications with RIGHT-ALIGNED typography.
 */
export default function FeatureCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Feature illustration",
  backgroundColor = "#F45B5B",
  textColor = "#ffffff",
  className = "",
  onClick,
}: FeatureCardProps) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={hovered ? "hover" : "rest"}
      initial="rest"
      className={`relative cursor-pointer select-none group ${className}`}
      style={{
        width: "100%",
        maxWidth: "592px",
        height: "341px",
        overflow: "visible", // Critical for image overflow
      }}
    >
      {/* ── 1. Card Background Layer ── */}
      <motion.div
        className="absolute inset-0 rounded-[30px]"
        style={{
          backgroundColor,
          overflow: "hidden", // Keeps colors clipped to the 30px radius
          boxShadow: "0 25px 60px -12px rgba(16, 24, 40, 0.15)",
        }}
        whileHover={{
          boxShadow: "0 35px 80px -12px rgba(16, 24, 40, 0.25)",
          transition: { duration: 0.4 },
        }}
      />

      {/* ── 2. Character Image — Figma Ratio Refinement ── */}
      <motion.div
        variants={imageVariants}
        className="absolute pointer-events-none drop-shadow-2xl"
        style={{
          top: "-45px",
          left: "-55px",
          width: "320px",  // Refined for better balance
          height: "400px",
          zIndex: 10,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="320px"
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* ── 3. Content Frame — Figma: RIGHT-ALIGNED ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute flex flex-col items-end" // ENSURES RIGHT ALIGNMENT
          style={{
            top: "52px",
            right: "42px",
            width: "351px",
            textAlign: "right",
            zIndex: 5,
          }}
        >
          {/* Title — Nohemi, 900, 32px, 120%, Right */}
          <h2
            style={{
              fontFamily: "var(--font-nohemi), 'Nohemi', sans-serif",
              fontWeight: 900,
              fontSize: "32px",
              lineHeight: "120%",
              color: textColor,
              margin: "0 0 8px 0",
              width: "100%", // Explicitly fill width for alignment
            }}
          >
            {title}
          </h2>

          {/* Subtitle — Outfit, 500, 24px, 100%, Right */}
          <p
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "100%",
              color: textColor,
              margin: "0 0 32px 0",
              width: "100%",
            }}
          >
            {subtitle}
          </p>

          {/* Description — Outfit, 400, 18px, 150%, Right */}
          <p
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: textColor,
              margin: 0,
              width: "100%",
            }}
          >
            {description}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
