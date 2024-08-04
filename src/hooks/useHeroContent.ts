import { useEffect, useState } from "react";
import { ThemeMode, useTheme } from "../contexts/ThemeContext";
import { useData } from "../contexts/DataContext";
import { ACTION_IMAGES } from "../constants";
import { HeroContentHook, ThemeContent } from '../types/types';

const getActionImage = (mode: ThemeMode): string => {
  const images = ACTION_IMAGES[mode];
  return images[Math.floor(Math.random() * images.length)];
};

export const useHeroContent = (): HeroContentHook => {
  const [isLoading, setIsLoading] = useState(true);
  const { themeMode, isProfessionalMode } = useTheme();
  const { summaries } = useData();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      setIsLoading(false);
    };

    loadData();
  }, [themeMode, isProfessionalMode]);

  const content: Record<ThemeMode, ThemeContent> = {
    professional: {
      name: "Brandon Coburn",
      subtitle: "Innovative Software Engineer",
      ctaText: "View My Resume",
      summary: summaries.professional,
      imageSrc: getActionImage(themeMode),
      imageAlt: "Brandon Coburn - Professional Software Engineer",
    },
    hero: {
      name: "Code Crusader",
      subtitle: "Vanquishing Bugs, Saving Projects!",
      ctaText: "View My Superhero Resume",
      summary: summaries.hero,
      imageSrc: getActionImage(themeMode),
      imageAlt: "Code Crusader - Software Development Superhero",
    },
    villain: {
      name: "Byte Buster",
      subtitle: "Unleashing Digital Chaos!",
      ctaText: "View My Supervillain Resume",
      summary: summaries.villain,
      imageSrc: getActionImage(themeMode),
      imageAlt: "Byte Buster - Software Development Super-villain",
    },
  };

  const currentContent = content[isProfessionalMode ? 'professional' : themeMode];

  return {
    ...currentContent,
    actionImage: getActionImage(themeMode),
    isProfessionalMode,
    isLoading,
    themeMode,
  };
};
