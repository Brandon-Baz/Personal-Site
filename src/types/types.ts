export interface ThemeContent {
    name: string;
    subtitle: string;
    ctaText: string;
    summary: string;
    imageSrc: string;
    imageAlt: string;

}

export interface HeroContentHook extends ThemeContent {
    actionImage: string | null;
    isProfessionalMode: boolean;
    isLoading: boolean;
    themeMode: string;
}