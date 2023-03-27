import { ReactNode } from 'react';
import { Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { AvatarPaletteColorOptions } from '../../../../../typings/material';
export declare type ThemeOptions = 'light' | 'dark';
export declare const typographyOptions: TypographyOptions;
export declare const avatarColors: AvatarPaletteColorOptions;
export declare const darkTheme: Theme;
export declare const lightTheme: Theme;
export interface ThemeProviderProps {
    children: ReactNode;
    theme?: Theme | ThemeOptions;
}
export declare function DotThemeProvider({ children, theme, }: ThemeProviderProps): JSX.Element;
declare module '@mui/material/LinearProgress' {
    interface LinearProgressPropsColorOverrides {
        purple: true;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        purple?: PaletteColorOptions;
    }
    interface PaletteOptions {
        purple?: PaletteColorOptions;
    }
}
