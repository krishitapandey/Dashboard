
export type CarouselSlide =
  | { type: "image"; imageUrl: string; hoverText?: string; showLogo?: boolean } 
  | { type: "text"; title: string; subtitle: string; description: string; showLogo?: boolean };

export interface JourneyCardProps {
  bgColor: string;
  image: string;
  hoverImage?: CarouselSlide[];
  imagePosition?: "left" | "right";
  title: string;
  subtitle: string;
  description: string;
  animationDelay?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageTop?: number;
  imageLeft?: number;
  imageRotation?: number;
}

export interface FrontProps extends Omit<JourneyCardProps, "hoverImage"> {
  isLeft: boolean;
}

export interface CarouselProps {
  hoverImage: CarouselSlide[];
  currentIndex: number;
  nextSlide: (e: React.MouseEvent) => void;
  prevSlide: (e: React.MouseEvent) => void;
  bgColor: string;
}