export interface TranslationStateProps {
    locales: Locales;
    translations: Translations;
    localePage: Locales;
    translationPage: TranslationsPage;
    loading: boolean;
    error: object | string | null;
}

export interface Locales {
    [key: string]: States;
}

export interface States {
    name: string;
}

export interface Translations {
    [key: string]: any;
}

export interface TranslationType {
    localePage: Locales;
    translationPage: TranslationsPage;
}

export interface En {
    name: string;
}

export interface TranslationsPage {
    current_page: number;
    data: Data;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface Data {
    [key: string]: {
        [key: string]: string;
    };
}

export interface Link {
    url: null | string;
    label: string;
    active: boolean;
}