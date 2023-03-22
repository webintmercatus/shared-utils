import { Components, StandardizedConfigs } from "./Config";
export declare type Source = {
    name: string;
    label: string;
    configs?: StandardizedConfigs;
    components?: Components;
    onboarders?: object;
    overrides?: object;
};
export declare type Sources = {
    [key: string]: Source;
};
