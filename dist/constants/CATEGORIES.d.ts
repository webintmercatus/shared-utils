export declare enum ConfigCategory {
    Setting = "setting",
    Translation = "translation",
    UI = "ui",
    Feature = "feature"
}
export declare enum ConfigCategoryPlurals {
    Setting = "settings",
    Translation = "translations",
    UI = "ui",
    Feature = "features"
}
declare const CATEGORIES: {
    setting: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
    translation: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
    ui: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
    feature: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
};
export { CATEGORIES };
