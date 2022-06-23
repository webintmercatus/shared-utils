export declare type ConfigCategory = `setting` | `translation` | `ui` | `ORGANIZATION_SETTINGS` | `TRANSLATION_SETTINGS` | `FEATURE_SETTINGS`;
/** A config defined in the source code */
export declare type ConfigObject = {
    /** This is a unique key to help identify this config */
    key?: string;
    /** The label for the config that will appear in the Config Manager UI */
    label?: string;
    /** The default value of the config */
    default: any;
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
};
export declare type Config = ConfigObject | string | boolean | number;
export declare type Configs = {
    [key: string]: Config;
};
export declare type StandardizedConfigs = {
    [key: string]: ConfigObject;
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
