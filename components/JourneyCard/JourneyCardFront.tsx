"use client";
import React from "react";
import { motion } from "framer-motion";
import {  JourneyCardProps } from "@/types/journey.types";


export function JourneyCardFront({
  bgColor, image, imageWidth, imageHeight, imageTop, imageLeft, imageRotation, animationDelay, isLeft, title, subtitle, description,
}: Omit<JourneyCardProps, "hoverImage"> & { isLeft: boolean }) {
  return (
    <motion.div
      key="front"
      initial={{ x: 0, opacity: 0, zIndex: 0 }}
      animate={{ x: 0, opacity: 1, zIndex: 1 }}
      exit={{ x: 20, opacity: 0, zIndex: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative flex items-center w-[592px] h-[341px] px-[30px] rounded-[30px]"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="journey-card__character absolute z-40 pointer-events-none"
        style={{
          width: `${imageWidth}px`, height: `${imageHeight}px`, top: `${imageTop}px`,
          [isLeft ? "left" : "right"]: `${imageLeft}px`,
          transform: `rotate(${imageRotation}deg)`, animationDelay,
        }}
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className={`flex flex-col flex-1 z-20 ${isLeft ? "text-right" : "text-left"}`}>
        <h3 className="font-nohemi font-bold text-[32px] leading-[1.2] text-white m-0">{title}</h3>
        <p className="font-outfit font-medium text-[24px] leading-[1.2] text-white">{subtitle}</p>
        <div className="flex flex-col gap-2 mt-2" style={{ marginLeft: isLeft ? "160px" : "0", marginRight: isLeft ? "0" : "160px" }}>
          <p className="font-outfit font-normal text-[18px] leading-normal text-white">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
