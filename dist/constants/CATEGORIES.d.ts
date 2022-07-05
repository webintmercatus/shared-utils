export declare enum ConfigCategory {
    Setting = "setting",
    Translation = "translation",
    UI = "ui",
    OrganizationSettingV3 = "ORGANIZATION_SETTINGS",
    TranslationSettingV3 = "TRANSLATION_SETTINGS",
    FeatureSettingV3 = "FEATURE_SETTINGS"
}
export declare enum ConfigCategoryPlurals {
    Setting = "settings",
    Translation = "translations",
    UI = "ui",
    OrganizationSettingV3 = "ORGANIZATION_SETTINGS",
    TranslationSettingV3 = "TRANSLATION_SETTINGS",
    FeatureSettingV3 = "FEATURE_SETTINGS"
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
    ORGANIZATION_SETTINGS: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
    TRANSLATION_SETTINGS: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
    FEATURE_SETTINGS: {
        plural: ConfigCategoryPlurals;
        label: string;
        labelPlural: string;
        order: number;
    };
};
export { CATEGORIES };
