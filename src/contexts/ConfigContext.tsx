// THIRD-PARTY IMPORT
import { createContext, ReactNode } from 'react';
import { PaletteMode } from '@mui/material';

// PROJECTS IMPORT
import defaultConfig from '~/config';
import useLocalStorage from '~/hooks/useLocalStorage';
import { CustomizationProps } from '~/types/config';

const initialState: CustomizationProps = {
    ...defaultConfig,
    onChangeMenuType: () => { },
    onChangePresetColor: () => { },
    onChangeLocale: () => { },
    onChangeRTL: () => { },
    onChangeContainer: () => { },
    onChangeFontFamily: () => { },
    onChangeBorderRadius: () => { },
    onChangeOutlinedField: () => { }
};

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
    children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
    const [config, setConfig] = useLocalStorage('videoroof-config', {
        fontFamily: initialState.fontFamily,
        borderRadius: initialState.borderRadius,
        outlinedFilled: initialState.outlinedFilled,
        navType: initialState.navType,
        presetColor: initialState.presetColor,
        locale: initialState.locale,
        rtlLayout: initialState.rtlLayout
    });

    const onChangeFontFamily = (fontFamily: string) => {
        setConfig({
            ...config,
            fontFamily
        });
    };

    const onChangeBorderRadius = (event: Event, newValue: number | number[]) => {
        setConfig({
            ...config,
            borderRadius: newValue as number
        });
    };

    const onChangeOutlinedField = (outlinedFilled: boolean) => {
        setConfig({
            ...config,
            outlinedFilled
        });
    };

    const onChangeMenuType = (navType: PaletteMode) => {
        setConfig({
            ...config,
            navType
        });
    };

    const onChangePresetColor = (presetColor: string) => {
        setConfig({
            ...config,
            presetColor
        });
    };

    const onChangeLocale = (locale: string) => {
        setConfig({
            ...config,
            locale
        });
    };

    const onChangeRTL = (rtlLayout: boolean) => {
        setConfig({
            ...config,
            rtlLayout
        });
    };

    const onChangeContainer = () => {
        setConfig({
            ...config,
            container: !config.container
        });
    };

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onChangeMenuType,
                onChangePresetColor,
                onChangeLocale,
                onChangeRTL,
                onChangeContainer,
                onChangeFontFamily,
                onChangeBorderRadius,
                onChangeOutlinedField
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export { ConfigProvider, ConfigContext };
