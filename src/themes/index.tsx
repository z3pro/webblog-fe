// THIRD-PARTY IMPORT
import { createTheme, CssBaseline, StyledEngineProvider, Theme, ThemeOptions, ThemeProvider } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// PROJECTS IMPORT
import componentStyleOverrides from '~/themes/compStyleOverride';
import customShadows from '~/themes/shadows';
import Palette from '~/themes/palette';
import Typography from '~/themes/typography';
import useConfig from '~/hooks/useConfig';
import { CustomShadowProps } from '~/types/default-theme';

interface Props {
    children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
    const { fontFamily, borderRadius, outlinedFilled, navType, presetColor, rtlLayout } = useConfig();

    const theme: Theme = useMemo<Theme>(() => Palette(navType, presetColor), [navType, presetColor]);

    const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
        () => Typography(theme, borderRadius, fontFamily),
        [theme, borderRadius, fontFamily]
    );

    const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => customShadows(navType, theme), [navType, theme]);

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            direction: rtlLayout ? 'rtl' : 'ltr',
            palette: theme.palette,
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            },
            typography: themeTypography,
            customShadows: themeCustomShadows
        }),
        [rtlLayout, theme, themeCustomShadows, themeTypography]
    );

    const themes: Theme = createTheme(themeOptions);
    themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}