import { heroContainerVariants, heroElementVariants, heroImageVariants, heroButtonVariants, heroTextVariants } from "../animations/heroAnimations";
import { professionalButtonVariants, professionalContainerVariants, professionalElementVariants, professionalImageVariants, professionalTextVariants } from "../animations/professionalAnimations";
import { villainContainerVariants, villainElementVariants, villainImageVariants, villainButtonVariants, villainTextVariants } from "../animations/villainAnimations";

const getAnimations = (isProfessionalMode: boolean, themeMode: string) => {
    if (isProfessionalMode) {
        return {
            container: professionalContainerVariants,
            element: professionalElementVariants,
            image: professionalImageVariants,
            button: professionalButtonVariants,
            text: professionalTextVariants
        };
    }
    return themeMode === 'hero'
        ? {
            container: heroContainerVariants,
            element: heroElementVariants,
            image: heroImageVariants,
            button: heroButtonVariants,
            text: heroTextVariants
        }
        : {
            container: villainContainerVariants,
            element: villainElementVariants,
            image: villainImageVariants,
            button: villainButtonVariants,
            text: villainTextVariants
        };
};

export default getAnimations;
