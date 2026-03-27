import { CardData } from "@/types/stats.types";

export const initialCards: CardData[] = [
  {
    id: 'all',
    count: '23',
    title: 'All Courses',
    description: "courses you're powering through right now.",
    icons: ["/Frame.svg", "/Frame-2.svg", "/Frame-3.svg", "/Frame-4.svg"],
  },
  {
    id: 'upcoming',
    count: '05',
    title: 'Upcoming Courses',
    description: 'exciting new courses waiting to boost your skills.',
    icons: ["/Frame.svg", "/Frame-2.svg", "/Frame-3.svg", "/Frame-4.svg"],
  },
  {
    id: 'ongoing',
    count: '10',
    title: 'Ongoing Courses',
    description: "currently happening—don't miss out on the action!",
    icons: ["/Frame.svg", "/Frame-2.svg", "/Frame-3.svg", "/Frame-4.svg"],
  },
];
