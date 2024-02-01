import { Components, ConfigMappings, StandardizedConfigs } from ".";
export declare type Source = {
    name: string;
    label: string;
    configs?: StandardizedConfigs;
    components?: Components;
    onboarders?: object;
    overrides?: object;
    mappings?: ConfigMappings;
};
export declare type Sources = {
    [key: string]: Source;
};
