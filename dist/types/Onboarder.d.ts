import type { Config } from '.';
export declare type OnboarderConfigs = (string | Partial<Config>)[];
export declare type OnboarderTab = {
    id?: string;
    label?: string;
    order?: number;
    configs?: OnboarderConfigs;
    fields?: OnboarderConfigs;
};
export declare type OnboarderTabs = {
    [key: string]: OnboarderTab;
};
export declare type Onboarder = {
    label: string;
    tabs: OnboarderTabs;
};
export declare type Onboarders = {
    [key: string]: Onboarder;
};
