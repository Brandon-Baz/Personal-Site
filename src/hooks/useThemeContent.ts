// src/hooks/useThemeContent.ts
import { useTheme } from "../contexts/ThemeContext";
import { ThemeMode } from "../contexts/ThemeContext";

interface ThemeContent {
  name: string;
  subtitle: string;
  imageSrc: string;
}

const themeContent: Record<ThemeMode, ThemeContent> = {
  professional: {
    name: "Brandon Coburn",
    subtitle: "Founder of Bazinga Studios",
    imageSrc: "/images/brandon-professional.jpg",
  },
  hero: {
    name: "Code Crusader",
    subtitle: "Defender of Clean Architecture",
    imageSrc: "/images/code-crusader.png",
  },
  villain: {
    name: "Byte Buster",
    subtitle: "Master of Chaos Engineering",
    imageSrc: "/images/byte-buster.png",
  },
};

export const useThemeContent = (): ThemeContent => {
  const { themeMode } = useTheme();
  return themeContent[themeMode];
};
