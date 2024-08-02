export interface ThemeContent {
    name: string;
    subtitle: string;
    ctaText: string;
    summary: string;
    imageSrc: string;
    imageAlt: string;

}

export interface HeroContentHook extends ThemeContent {
    actionWord: string | null;
    isProfessionalMode: boolean;
    isLoading: boolean;
}