declare const parseSource: ({ getComponents, getConfigs, getLabel, getName, source }: {
    getComponents?: any;
    getConfigs?: any;
    getLabel?: any;
    getName?: any;
    source?: string;
}) => Promise<{
    name: any;
    label: any;
    configs?: any;
    components?: any;
}>;
declare class SourceError extends Error {
    constructor(source: any, error: any);
}
export { parseSource, SourceError };
