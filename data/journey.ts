import { JourneyCardProps } from "@/types/journey.types";

export const JOURNEY_CARDS: (JourneyCardProps & { animationDelay: string })[] = [
  {
    bgColor: "var(--color-brand-red)",
    image: "/Group.svg",
    imagePosition: "left",
    imageWidth: 260,
    imageHeight: 345,
    imageTop: 22,
    imageLeft: -49,
    hoverImage: [
      { 
        type: "image", 
        imageUrl: "/slide.svg", 
        hoverText: "Clarity unlocked—stickers, sips, and skills all in one go!",
        showLogo: true 
      }
    ],
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    animationDelay: "0.4s",
  },
  {
    bgColor: "var(--color-brand-teal)",
    image: "/Group-2.svg",
    imagePosition: "right",
    imageWidth: 180,
    imageHeight: 367,
    imageTop: 20,
    imageLeft: 40,
    hoverImage: [
      { type: "image", imageUrl: "/slide-2.svg", hoverText: "Focused faces—learning mode: ON!", showLogo: false },
      { type: "image", imageUrl: "/slide-3.svg", hoverText: "Laptops, lessons, and a whole lot of growth!", showLogo: false }
    ],
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    animationDelay: "0.4s",
  },
  {
    bgColor: "var(--color-brand-purple)",
    image: "/Group-4.svg",
    imagePosition: "left",
    imageWidth: 300,
    imageHeight: 250,
    imageTop: 106,
    imageLeft: -54,
 
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description: "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    animationDelay: "0.4s",
  },
  {
    bgColor: "var(--color-brand-gold)",
    image: "/Group-3.svg",
    imagePosition: "right",
    imageWidth: 280,
    imageHeight: 310,
    imageTop: 53,
    imageLeft: -60,
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    animationDelay: "0.4s",
  },
];