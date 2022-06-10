declare const parseSource: ({ getComponents, getConfigs, getLabel, getName, source }: {
    getComponents: any;
    getConfigs: any;
    getLabel: any;
    getName: any;
    source: any;
}) => Promise<{
    name: any;
    label: any;
}>;
declare const getMockResponse: (configs: any, options?: any) => {};
declare class SourceError extends Error {
    constructor(source: any, error: any);
}
export { getMockResponse, parseSource, SourceError };
