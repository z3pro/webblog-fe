// THIRD-PARTY IMPORT
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
    interface PaletteColor {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }

    export interface TypeText {
        dark: string;
        hint: string;
    }

    interface PaletteOptions {
        orange?: PaletteColorOptions;
        dark?: PaletteColorOptions;
        icon?: IconPaletteColorOptions;
    }

    interface Palette {
        orange: PaletteColor;
        dark: PaletteColor;
        icon: IconPaletteColor;
    }
}
// declare module '@mui/material/styles' {
//     interface CustomPalette {
//         anger: PaletteColorOptions;
//         apple: PaletteColorOptions;
//         steelBlue: PaletteColorOptions;
//         violet: PaletteColorOptions;
//     }
//     interface Palette extends CustomPalette { }
//     interface PaletteOptions extends CustomPalette { }
// }

// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         anger: true;
//         apple: true;
//         steelBlue: true;
//         violet: true;
//     }
// }