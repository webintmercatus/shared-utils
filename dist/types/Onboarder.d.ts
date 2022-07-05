import type { Config } from '.';
export declare type OnboarderFields = (string | Partial<Config>)[];
export declare type OnboarderTab = {
    id?: string;
    order?: number;
    label: string;
    fields: OnboarderFields;
};
export declare type Onboarder = {
    [key: string]: OnboarderTab;
};
