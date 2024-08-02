import 'styled-components';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module 'styled-components' {
    export interface DefaultTheme extends MuiTheme {
        palette: {
            primary: {
                main: string;
                dark: string;
            },
            secondary: {
                main: string;
                dark: string;
            },
            background: {
                paper: Interpolation<FastOmit<PaperOwnProps & CommonProps & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, "className" | "style" | "children" | "elevation" | "square" | "classes" | "sx" | "variant">, never>>;
                default: string;
            },
            text: {
                primary: string;
                secondary: string;
            },
            common: {
                white: string;
            },
        },
    }
}