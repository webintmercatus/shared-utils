declare enum ConfigCategory {
    Settings = "settings",
    Translations = "translations",
    UI = "ui"
}
declare const CATEGORIES: {
    setting: {
        plural: ConfigCategory;
        label: string;
        labelPlural: string;
        order: number;
    };
    translation: {
        plural: ConfigCategory;
        label: string;
        labelPlural: string;
        order: number;
    };
    ui: {
        plural: ConfigCategory;
        label: string;
        labelPlural: string;
        order: number;
    };
    ORGANIZATION_SETTINGS: {
        plural: string;
        label: string;
        labelPlural: string;
        order: number;
    };
    TRANSLATION_SETTINGS: {
        plural: string;
        label: string;
        labelPlural: string;
        order: number;
    };
    FEATURE_SETTINGS: {
        plural: string;
        label: string;
        labelPlural: string;
        order: number;
    };
};
export { CATEGORIES, ConfigCategory };
