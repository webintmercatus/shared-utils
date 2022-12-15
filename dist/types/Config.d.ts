import { ConfigCategory } from "../constants";
export declare type ConfigDefaultValue = null | boolean | number | number[] | string | string[] | object;
export declare type ConfigObject = {
    /** The default value of the config */
    default?: ConfigDefaultValue;
    /** This is a unique key to help identify this config */
    key?: string;
    /** The label for the config that will appear in the Config Manager UI */
    label?: string;
    type?: `input` | `switch` | `radios` | `select` | `checklist` | `image`;
    inputType?: `text` | `number` | `color` | `url`;
    required?: boolean;
    placeholder?: string;
    help?: string;
    section?: string;
    category?: ConfigCategory;
    component?: string;
    hint?: string;
    visibleIf?: string;
    values?: string[];
    reference?: string;
    validator?: string[];
    group?: string;
    readonly?: boolean;
    docLink?: string;
    styleClasses?: string;
    tags?: string[];
    longLabel?: string;
    deprecated?: boolean;
    inherit?: string;
} & ({
    inherit: string;
} | {
    default: ConfigDefaultValue;
});
/** A config defined in the source code */
export declare type Config = ConfigObject | string | boolean | number;
export declare type Configs = {
    [key: string]: Config;
};
export declare type StandardizedConfig = ConfigObject & {
    label: string;
    type: string;
};
export declare type StandardizedConfigs = {
    [key: string]: StandardizedConfig;
};
export declare type NestedConfigs = Config | {
    [key: string]: NestedConfigs;
};
export declare type ConfigAsField = Partial<Config> & {
    model: string;
    inputType?: string;
};
export declare type Section = {
    section?: string;
    category?: ConfigCategory;
    configs: Configs;
};
export declare type ComponentOptions = {
    label?: string;
    order?: number;
    description?: string;
    rootKey?: string;
    toggleable?: boolean;
    tabs?: Tabs;
    groups?: Groups;
};
export declare type Component = ComponentOptions & {
    getOptions?: () => ComponentOptions;
};
export declare type Components = {
    [key: string]: Component;
};
export declare type Groups = {
    [key: string]: ConfigObject;
};
export declare type Tab = {
    label?: string;
    groups?: Configs;
};
export declare type Tabs = {
    [key: string]: Tabs;
};
