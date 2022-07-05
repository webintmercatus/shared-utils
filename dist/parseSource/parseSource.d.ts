import type { Component, Components, Config, Configs, Source, StandardizedConfigs } from '../types';
export declare type SourceConfigs = {
    getComponents?: () => Promise<Components>;
    getConfigs?: () => Promise<Configs>;
    getLabel?: () => string | Promise<string | undefined>;
    getName?: () => string | Promise<string | undefined>;
    source?: string;
};
export declare type HelperFunctions = ReturnType<typeof getHelpers>;
export declare type Definitions = {
    [key: string]: DefinitionComponent;
};
export declare type DefinitionComponent = {
    getConfigs?: (_: HelperFunctions) => Configs;
    getSettings?: (_: HelperFunctions) => Configs;
    getTranslations?: (_: HelperFunctions) => Configs;
    getUI?: (_: HelperFunctions) => Configs;
    getOptions?: () => Component;
};
declare const getHelpers: (components: Components, component: string) => {
    addNested: (name: string, configs: Configs) => StandardizedConfigs;
    addFeature: (name: string, label: string, configs: Configs, enabled?: boolean, nesting?: boolean) => StandardizedConfigs;
    addGroup: (name: string, label: string, configs: Configs, nesting?: boolean, type?: string, callback?: (_: string, _2: Config) => void) => StandardizedConfigs;
    addTab: (label: string, configs: Configs) => StandardizedConfigs;
    addField: (key: string, callback?: (arg: {
        insert: (key: string, config: Config) => void;
        modify: (key: string, config: Config) => void;
    }) => void) => StandardizedConfigs;
};
declare const parseSource: ({ getComponents, getConfigs, getLabel, getName, source }: SourceConfigs) => Promise<Source>;
declare class SourceError extends Error {
    constructor(source: any, error: any);
}
export { parseSource, SourceError };