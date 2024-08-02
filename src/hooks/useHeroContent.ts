import { useEffect, useState } from "react";
import { heroTheme } from "../styles/themes";
import { useTheme } from "../contexts/ThemeContext";
import { useData } from "../contexts/DataContext";
import { ACTION_WORDS } from "../constants";
import { HeroContentHook, ThemeContent } from '../types/types';

export const useHeroContent = (): HeroContentHook => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, themeMode, isProfessionalMode } = useTheme();
  const { summaries } = useData();
  const isHero = theme === heroTheme;

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      setIsLoading(false);
    };

    loadData();
  }, []);

  const getActionWord = () => {
    const words = ACTION_WORDS[isHero ? "hero" : "villain"];
    return words[Math.floor(Math.random() * words.length)];
  };

  const content: Record<typeof themeMode, ThemeContent> = {
    professional: {
      name: "Brandon Coburn",
      subtitle: "Innovative Software Engineer",
      ctaText: "View My Resume",
      summary: summaries.professional,
      imageSrc: "/images/brandon-professional.jpg",
      imageAlt: "Brandon Coburn - Professional Software Engineer",
    },
    hero: {
      name: "Code Crusader",
      subtitle: "Vanquishing Bugs, Saving Projects!",
      ctaText: "View My Superhero Resume",
      summary: summaries.hero,
      imageSrc: "/images/code_crusader/code-crusader.png",
      imageAlt: "Code Crusader - Software Development Superhero",
    },
    villain: {
      name: "Byte Buster",
      subtitle: "Unleashing Digital Chaos!",
      ctaText: "View My Supervillain Resume",
      summary: summaries.villain,
      imageSrc: "/images/byte_buster/byte-buster.png",
      imageAlt: "Byte Buster - Software Development Super-villain",
    },
  };

  const mode = isProfessionalMode
      ? "professional"
      : isHero
          ? "hero"
          : "villain";
  const currentContent = content[mode];

  return {
    ...currentContent,
    actionWord: isProfessionalMode ? null : getActionWord(),
    isProfessionalMode,
    isLoading,
  };
};