export declare type TransformationOptions = {
    nested: boolean;
    categorized: boolean;
};
declare const getTransformationOptions: (options?: Partial<TransformationOptions>) => TransformationOptions;
export { getTransformationOptions };
